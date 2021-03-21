import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHolding, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { authService } from 'fbInstance';

function Navigation({ userObj }) {

    const history = useHistory();
    const onLogout = async (e) => {
        e.preventDefault();

        try {
            await authService.signOut();
            alert("로그아웃 성공!");
            history.push("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃 실패");
        }
    }


    return (
        <nav>
            <div className="home_logo">
                <span style={{ display: "block" }}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHandHolding}
                            color={"#04AAFF"}
                            size="5x" />
                    </Link>
                </span>
                <h2 style={{ display: "block", marginTop: 35 }}>just left behind</h2>
            </div>

            {userObj &&
                <div className="home_info">
                    <ul>
                        <li>
                            <span>
                                <em>{userObj.displayName}</em>님 환영합니다.
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link to="/profile" className="header_profile">
                                    <FontAwesomeIcon icon={faUser} color={"#04AAFF"}
                                        size="1x" />
                                </Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={onLogout} className="header_logout" >
                                <FontAwesomeIcon icon={faPowerOff} size="1x"
                                    color={"#04AAFF"} />
                            </span>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navigation
