import { dbService } from 'fbInstance';
import React, { useEffect, useState } from 'react';

function Profile({ userObj, refreshUser }) {

    const [newProfileObj, setNewProfileObj] = useState("");
    const [onEditToggle, setOnEditToggle] = useState(false);
    const [editObj, setEditObj] = useState({

        displayName: ""
    });

    //내가 쓴 게시물만 보기
    const getMyPosts = async () => {
        //파이어베이스의 조건문 where 이용
        const nProfile = await dbService.collection("newSend").where("writerId", "==", userObj.uid).orderBy("date", "desc").get();

        console.log(nProfile);


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
        <div className="profile_change_form">
            <span onClick={onEditProfile}
            >
                닉네임 변경
            </span>



            {onEditToggle &&
                <>
                    <form className="profile_change">
                        <input type="text" placeholder="변경하실 닉네임을 입력해주세요."
                            name="displayName"
                            value={editObj.writerId}
                            onChange={onChange}
                        />

                        <div>
                            <button type="submit" onClick={onSubmit}>
                                변경
                        </button>
                            <button type="cancel" onClick={() => setOnEditToggle((prev) => !prev)} >
                                취소
                        </button>
                        </div>
                    </form>

                </>
            }
            <hr />

            {userObj &&
                <h2>
                    {`${userObj.displayName}님이 두고 간 목록`}
                </h2>
            }
            <div className="profile_write">
                {newProfileObj && newProfileObj.map((profile => (
                    <div className="profile_write_form">
                        <p>{`내용 : ${profile.text} 작성일 : ${profile.date}`} </p>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Profile;
