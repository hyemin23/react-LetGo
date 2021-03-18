import AddProfile from "components/AddProfile";
import Npost from "components/Npost";
import { authService, dbService } from "fbInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = ({ userObj }) => {


    //게시글 목록들 가져오기 
    const [newPosts, setNewPosts] = useState([]);


    useEffect(() => {
        dbService.collection("newSend").onSnapshot((snapshot) => {

            const newObj = snapshot.docs.map(doc => ({
                postId: doc.id
                , ...doc.data()
            }));

            setNewPosts(newObj);
        });
    }, []);


    const onLogout = async (e) => {
        e.preventDefault();

        try {
            const logout = await authService.signOut();
            console.log(logout);
            alert("로그아웃 성공!");
        } catch (error) {
            console.log(error);
            alert("로그아웃 실패");
        }
    }

    return (
        <>
            <h2>홈화면</h2>
            <div>
                <Link to="/profile">{`${userObj.displayName}님의 프로필`}</Link>
                <input type="button" onClick={onLogout} value="로그아웃" />
            </div>

            <AddProfile userObj={userObj} />


            <div>
                <h2>게시글 목록</h2>
                {newPosts && newPosts.map((post) =>
                    (
                        <>
                            {post && (
                                <Npost
                                    key={post.id}
                                    post={post}
                                    userPostCheck={post.writerId === userObj.uid}

                                />
                            )}
                        </>
                    )
                )}
            </div>

        </>
    )
}

export default Home;