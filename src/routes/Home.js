import AddProfile from "components/AddProfile";
import Npost from "components/Npost";
import { dbService } from "fbInstance";
import { useEffect, useState } from "react";

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



    return (
        <div className="container">
            <AddProfile userObj={userObj} />

            <h2 style={{ fontSize: 25, fontWeight: 600, textAlign: "center", marginBottom: 35, marginTop: 20 }}>Our Memory</h2>

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
    )

}

export default Home;