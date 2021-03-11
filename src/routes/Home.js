import { authService } from 'fbInstance';
import React from 'react'

function Home() {

    const onClick = (e) => {
        e.preventDefault();
        authService.signOut();
    }
    return (
        <div>
            Home
            <button type="button" onClick={onClick}>로그아웃</button>
        </div>
    )
}

export default Home;
