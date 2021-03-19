import { authService, firebaseInstance } from "fbInstance";
import { useState } from "react";
import { Link, Route, HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [error, setError] = useState("");

    const onChange = (e) => {
        e.preventDefault();

        const { name } = e.target;

        if (name === "email") {
            setEmail(e.target.value);
        } else if (name === "passowrd") {
            setPassowrd(e.target.value);
        }

    }

    const onSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await authService.signInWithEmailAndPassword(email, password);
            console.log(data);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }

    // 깃허브 구글 로그인 분기
    const socialLogin = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name } = e.target;

        let provider;

        //구글 로그인
        //크롬은 팝업 창 안 열림
        if (name === "google") {

            console.log("google 로그인");
            provider = new firebaseInstance.auth.GoogleAuthProvider();


        }
        //깃허브 로그인
        else if (name === "git") {
            console.log("git 로그인");
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        await authService.signInWithPopup(provider).then((data) => {
            alert("로그인 성공!");
        });
    }

    return (
        <div className="container">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFE"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <h2>P<em>(ost)</em> &amp; S<em>(end)</em> </h2>

            <form onSubmit={onSubmit}>
                <div>
                    <p>로그인</p>
                    <input
                        type="text" placeholder="Email" required
                        onChange={onChange}
                        name="email"
                        value={email}
                        className="authInput"
                    />

                    <input
                        type="password" placeholder="Password" required
                        onChange={onChange}
                        name="passowrd"
                        password={password}
                        className="authInput"
                    />
                    <div>
                        <button type="submit" value="LogIn" name="login"
                            className="authSubmitBtn"
                        >Login</button>
                        {error &&
                            <p>
                                {error}
                            </p>}

                    </div>
                </div>
            </form>


            <div className="authBtns">
                <button type="button" name="google" onClick={socialLogin} className="authBtn">
                    Google 로그인<FontAwesomeIcon icon={faGoogle} />
                </button>

                <button type="button" name="git" onClick={socialLogin} className="authBtn">
                    Github 로그인<FontAwesomeIcon icon={faGithub} />
                </button>

                <button className="authBtn">
                    <Link to="/joinForm" >회원가입</Link>
                </button>
            </div>
        </div>
    )
}

export default Auth;