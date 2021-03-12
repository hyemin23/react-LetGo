import { dbService } from 'fbInstance';
import React, { createElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Profile = ({ history, userObj }) => {

    console.log("--===")
    console.log(history);
    console.log("--===")

    const [todos, setTodos] = useState([]);
    //text-area 값
    const [areaValue, setAreaValue] = useState("");
    //게시글 Id
    const [selectPostId, setSelectPostId] = useState("");
    //구식의 방법
    /*const newTwit = async () => {
        const firedbget = await dbService.collection("twit").get();
        firedbget.forEach((doc) => {
            const obj = {
                ...doc.data()
            };

            setTodos((prev) => [obj, ...prev]);
        });
    }
    */

    //db에 저장된 내 글 가져오기
    useEffect(() => {

        //newTwit();

        //추천하는 방법
        dbService.collection("twit").onSnapshot((snapshot) => {
            //console.log(snapshot.docs);
            const newTwit = snapshot.docs.map((doc) => ({
                id: doc.id
                , ...doc.data()

            }));
            setTodos(newTwit);
        });
    }, []);

    //삭제 or 수정
    const onClick = async (e, postId) => {

        e.preventDefault();
        const { name } = e.target;

        //삭제시
        if (name === "onDelete") {
            window.confirm("삭제하시겠습니까?");
            await dbService.doc(`twit/${postId}/`).delete();
        }


        //수정시
        else if (name === "onEdit") {

            //수정버튼 클릭 시 disabled 속성 없애기
            e.target.parentNode.parentNode.firstChild.firstChild.removeAttribute('disabled');

            //text area 수정내용 저장

            setAreaValue(e.target.parentNode.parentNode.firstChild.firstChild.value);
            //최종 수정완료

            //수정된 게시글 번호 넣어주기
            setSelectPostId(postId);

            //e.target.parentNode.parentNode.firstChild.firstChild.value
        }
    }

    //변경 감지 내용
    useEffect(() => {
        onEdit();
    }, [areaValue]);


    //최종 수정완료 
    const onEdit = () => {

        console.log("edits");
        if (selectPostId !== "" && selectPostId !== null && selectPostId !== undefined) {

            dbService.doc(`twit/${selectPostId}/`).update({
                text: areaValue
            }).then((data) => {
                //홈으로 돌아가게 만들어주기
                //history back을 이용해서 보내줘야하나?

                alert("수정되었습니다.");
            });
        }

        //수정 완료 후 다시 disabled 상태로 바꿔놓기
        // e.target.parentNode.parentNode.firstChild.firstChild.addAttribute('disabled');

        setSelectPostId("");

    }

    return (
        <div>
            Profile
            <Link to="/">홈으로</Link>

            <h2>내가 쓴 글 목록</h2>
            {todos.map((todo) => (
                todo.userId === userObj.uid ?
                    <>
                        <form>
                            <div>
                                <textarea disabled>{todo.text}</textarea>
                                <p>작성일 : {todo.date}</p>
                            </div>
                            <div>
                                <input type="button" name="onDelete" value="삭제"
                                    onClick={(e) => onClick(e, todo.id)} />
                                <input type="button" name="onEdit" value="수정"
                                    onClick={(e) => onClick(e, todo.id)}
                                />
                            </div>
                        </form>
                    </>
                    : ""
            ))}
        </div>
    );
};

export default Profile;
