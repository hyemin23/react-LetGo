import { authService } from "fbInstance";
import { useState } from "react";

const JoinForm = () => {

    const [joinEmail, setJoinEmail] = useState("");
    const [joinPassword, setJoinPassowrd] = useState("");
    const [error, setError] = useState("");
    //회원가입
    const onChange = (e) => {
        const { name } = e.target;
        if (name === "joinEmail") {
            setJoinEmail(e.target.value);
        } else if (name === "joinPassword") {
            setJoinPassowrd(e.target.value);
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            //회원가입일 경우
            await authService.createUserWithEmailAndPassword(joinEmail, joinPassword);

            alert("회원가입 되었습니다!");
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }



    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Email" required
                    onChange={onChange}
                    name="joinEmail"
                    value={joinEmail} />
                <input type="password" placeholder="Password" required
                    onChange={onChange}
                    name="joinPassword"
                    password={joinPassword} />
                {error && <p>{error}</p>}
                <input type="submit" />
            </form>
        </div>
    );
}

export default JoinForm;
