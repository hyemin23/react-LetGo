import { authService, dbService } from 'fbInstance';
import React, { useState } from 'react'
import { Link, Route, Router } from 'react-router-dom';

function Home({ userObj }) {

    const [todayText, setTodayText] = useState("");

    //db저장 액션
    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        if (name === 'todayText') {
            setTodayText(value);
        };
    }

    //로그아웃 액션
    const onClick = async (e) => {
        e.preventDefault();
        const { name } = e.target;

        if (name === "logout") {
            authService.signOut();
        }
        else if (name === "send") {

            //firebase db에 저장
            await dbService.collection("twit").add({
                text: todayText
                , date: new Date().getFullYear()
                , userId: userObj.uid
                , onEdit: false
            })
                .then((docRef) => {
                    alert("성공적으로 등록되었습니다.");
                }).catch((error) => {
                    alert("에러가 발생하였습니다 : ", error);
                });
            setTodayText("");
        }
    }
    return (
        <div>
            <h2>Home</h2>
            <input type="submit" name="logout" onClick={onClick} value="로그아웃" />
            <Link to="/profile"  >프로필</Link>
            <input type="text"
                placeholder="오늘 하루는 어땠나요?"
                name="todayText"
                onChange={onChange}
                value={todayText}
            >
            </input>
            <input type="button" name="send" onClick={onClick} value="share" />
        </div>
    )
}

export default Home;
