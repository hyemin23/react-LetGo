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
import { faHandHolding, faUserPlus } from "@fortawesome/free-solid-svg-icons";

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

    //로그인
    const onSubmit = async (e) => {

        e.preventDefault();

        try {
            await authService.signInWithEmailAndPassword(email, password);
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
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faHandHolding}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <h2 style={{ fontSize: "25px", fontWeight: 600 }}>놓고(Go)
                </h2>
            <p style={{ marginTop: "14px", fontSize: "15px", }}> 가져갈게요. 두고 가세요.</p>

            <form onSubmit={onSubmit} className="container">

                <div>

                    <input
                        type="text" placeholder="Email" required
                        onChange={onChange}
                        name="email"
                        value={email}
                        className="authInput"
                        autoFocus
                    />
                </div>
                <div>
                    <input
                        type="password" placeholder="Password" required
                        onChange={onChange}
                        name="passowrd"
                        password={password}
                        className="authInput"
                    />
                </div>

                <button type="submit" value="LogIn" name="login"
                    className="authInput authSubmit"
                >Login</button>
                {error &&
                    <p className="authError">
                        {error}
                    </p>}

            </form>


            <div className="authBtns">
                <button type="button" name="google" onClick={socialLogin} className="authBtn">
                    <FontAwesomeIcon icon={faGoogle} color={"#04AAFF"}
                    />
                    <p>Google 로그인</p>
                </button>

                <button type="button" name="git" onClick={socialLogin} className="authBtn">
                    <FontAwesomeIcon icon={faGithub} color={"#04aaff"} />
                    <p>Github 로그인</p>
                </button>

                <button className="authBtn">
                    <Link to="/joinForm" style={{ textDecoration: "none", color: "black" }}>
                        <FontAwesomeIcon icon={faUserPlus} color={"#04aaff"} />
                        <p>회원가입</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Auth;