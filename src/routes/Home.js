import AddProfile from "components/AddProfile";
import Npost from "components/Npost";
import { authService, dbService } from "fbInstance";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Home = ({ userObj }) => {

    const history = useHistory();
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
            await authService.signOut();
            alert("로그아웃 성공!");
            history.push("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃 실패");
        }
    }

    return (
        <div className="container">
            {userObj &&
                <div>
                    h2
                        <Link to="/profile">{`${userObj.displayName}님의 프로필`}</Link>
                    <input type="button" onClick={onLogout} value="로그아웃" />
                </div>
            }
            <AddProfile userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                <h2>게시글 목록</h2>
                {newPosts && newPosts.map((post) =>
                    (
                        <>
                            {post && userObj && (
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
        </div>
    )
}

export default Home;