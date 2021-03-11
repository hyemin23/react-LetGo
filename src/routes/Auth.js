import { firebaseInstance, authService } from 'fbInstance';
import React, { useState } from 'react'

//회원가입 화면
function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    //로그인
    const onSubmit = (e) => {
        e.preventDefault();
        authService.signInWithEmailAndPassword(email, password).then((user) => {
            alert("로그인 되었습니다 !");
        }).catch((error) => {
            setError(error.message);
        });


    }

    //회원가입
    //이메일 : 이메일 형식에 맞게 작성
    //비밀번호 6글자
    const onClick = (e) => {
        e.preventDefault();
        authService.createUserWithEmailAndPassword(email, password).then((user) => {
            if (!!user) {
                alert("회원가입 되었습니다.");
            }
        }).catch((error) => {
            var errorMessage = error.message;
            setError(errorMessage);
        })
    }

    //소셜 로그인
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="이메일을 입력해주세요." value={email}
                    onChange={onChange}
                    name="email"
                    required />
                <input type="password" placeholder="비밀번호를 입력해주세요." value={password}
                    onChange={onChange}
                    name="password"
                    required />
                <button type="submit">로그인</button>
                {error ? <span>로그인 에러 : {error}</span> : ""}
            </form>
            <div>
                <button type="button" onClick={onClick}> 회원가입 </button>
                <button type="button" name="google" onClick={onSocialClick}>Google Login</button>
                <button type="button" name="github" onClick={onSocialClick}>Github Login</button>
            </div>
        </div>
    )
}

export default Auth;