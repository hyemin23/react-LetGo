import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dbService, fbStorage } from 'fbInstance';
import React, { useState } from 'react'

function Npost({ post, userPostCheck }) {

    const [updateToggle, setUpdateToggle] = useState(false);
    const [updateText, setUpdateText] = useState(post.text);

    const onRemove = async () => {
        console.log("onRemove");
        const ok = window.confirm("정말 삭제하시겠습니까?");
        if (ok) {

            //게시글 삭제
            await dbService.doc(`newSend/${post.postId}`).delete();

            //사진이 있었다면 사진 삭제
            if (!!post.resultUrl) await fbStorage.refFromURL(post.resultUrl).delete();


            alert("삭제되었습니다.");


        } else {
            return false;
        }
    }

    //수정액션
    //3번 랜더링 하니까 각각 렌더링되기때문
    const onToggle = () => {
        setUpdateToggle((prev) => !prev);

    }
    const onChange = (e) => {
        e.preventDefault();
        setUpdateText(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`newSend/${post.postId}`).update({ text: updateText });

        setUpdateToggle(false);
        alert("수정되었습니다!");
    }

    //토글이 true면 업데이트 창 보여주기
    return (
        <div className="newPost">
            {updateToggle ? (
                <>
                    <form onSubmit={onSubmit} className="container newPostEdit">
                        <input type="text" value={updateText} onChange={onChange}
                            className="formInput"
                        />
                        <div style={{ textAlign: "center" }}>
                            <button type="submit" className="formBtn">
                                수정
                            </button>
                            <input type="button" value="취소" onClick={onToggle} className="formCancelBtn" />
                        </div>
                    </form>

                </>
            ) : (
                    <>
                        {
                            post.writerId &&
                            <div className="wirte_Info">
                                <p>{`내용 : ${post.text}`}</p>
                                <p>날짜 : {post.date}</p>
                                <p>작성자 :{post.writerId}</p>
                            </div>
                        }

                        {
                            post.resultUrl && (
                                <img src={post.resultUrl} width="50px" height="50px" />
                            )}

                        {
                            userPostCheck && (
                                <div class="post_actions">
                                    <span onClick={onRemove} name="delete" style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faTrash} color={"rgba(255,89,0)"} />
                                    </span>

                                    <span onClick={onToggle} name="onEdit"
                                        style={{ cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faPencilAlt}
                                            color={" rgb(95, 154, 242)"} />
                                    </span>
                                </div>
                            )}
                    </>
                )}
        </div>
    );

}

export default Npost;

