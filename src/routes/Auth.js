import { authService, firebaseInstance } from "fbInstance";
import { useState } from "react";
import { Link, Route, HashRouter as Router } from "react-router-dom";


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

        const result = await authService.signInWithPopup(provider).then((data) => {
            console.log(data);

            const token = data.credential.accessToken;
            const user = data.user;

            console.log(token, user);
        });


    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Email" required
                    onChange={onChange}
                    name="email"
                    value={email} />
                <input type="password" placeholder="Password" required
                    onChange={onChange}
                    name="passowrd"
                    password={password} />
                <button type="submit" value="LogIn" name="login"
                >로그인</button>
                {error &&
                    <p>
                        {error}
                    </p>}
            </form>
            <div>
                <button type="button" name="google" onClick={socialLogin}>
                    Google 로그인
                </button>
                <button type="button" name="git" onClick={socialLogin}>
                    Github 로그인
                </button>
                <div>
                    <ul>
                        <li>
                            <Link to="/joinForm" >회원가입</Link>
                        </li>
                    </ul>

                </div>

            </div>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default Auth;