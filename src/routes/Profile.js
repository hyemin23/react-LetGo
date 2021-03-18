import { authService, dbService } from 'fbInstance';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

function Profile({ userObj, refreshUser }) {
    const history = useHistory();

    const [newProfileObj, setNewProfileObj] = useState("");
    const [onEditToggle, setOnEditToggle] = useState(false);
    const [editObj, setEditObj] = useState({

        displayName: ""
    });



    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }


    //내가 쓴 게시물만 보기
    const getMyPosts = async () => {
        //파이어베이스의 조건문 where 이용
        const nProfile = await dbService.collection("newSend").where("writerId", "==", userObj.uid).orderBy("date", "asc").get();

        const newProfileObj = nProfile.docs.map((doc) => ({
            postId: doc.id
            , ...doc.data()
        }));
        setNewProfileObj(newProfileObj);
    }



    useEffect(() => {
        getMyPosts();
    }, []);



    //프로필 수정
    const onEditProfile = (e) => {
        //내 정보 수정이면 폼 변경
        setOnEditToggle(true);
    }


    //입력된 정보들 수정
    const onSubmit = async (e) => {
        e.preventDefault();

        //수정할 정보들 업데이트
        await userObj.updateProfile(editObj).then(() => {
            alert("수정되었습니다!");

            //유저 새로고침
            refreshUser();

        }).catch((error) => {
            alert(error.message);
        });



        setEditObj({});
        setOnEditToggle(false);

    }

    //입력된 정보들 상태값에 저장
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "displayName") {
            setEditObj({ "displayName": value });
        }
    }

    return (
        <>
            <button onClick={onLogOutClick}>로그아웃</button>
            <button type="button" onClick={onEditProfile}>내 정보 수정</button>


            {onEditToggle &&
                <>
                    <form>

                        <input type="text" placeholder="변경하실 닉네임을 입력해주세요."
                            name="displayName"
                            value={editObj.writerId}
                            onChange={onChange}
                        />
                        <button type="submit" onClick={onSubmit}>수정</button>
                    </form>

                </>
            }
            <hr />
            <h2>
                {`${userObj.displayName}님이 쓴 글`}
            </h2>
            {newProfileObj && newProfileObj.map((profile => (
                <>
                    <p>{`내용 : ${profile.text} 작성일 : ${profile.date} 작성자:${profile.writerId}`} </p>
                </>
            )))}

        </>
    )
}

export default Profile;
