import { dbService, fbStorage } from 'fbInstance';
import React, { useState } from 'react'

function Npost({ post, userPostCheck }) {

    const [updateToggle, setUpdateToggle] = useState(false);
    const [updateText, setUpdateText] = useState(post.text);

    const onClick = async (e, postId) => {

        const { name } = e.target;

        //삭제 액션
        if (name === "delete") {
            const ok = window.confirm("정말 삭제하시겠습니까?");
            if (ok) {

                //게시글 삭제
                await dbService.doc(`newSend/${post.postId}`).delete();
                //사진 삭제
                await fbStorage.refFromURL(post.resultUrl).delete();


                alert("삭제되었습니다.");

            } else {
                return false;
            }
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
        <>
            {updateToggle ? (
                <>

                    <form onSubmit={onSubmit}>
                        <input type="text" value={updateText} onChange={onChange}
                        />
                        <button type="submit" >
                            수정
                    </button>
                    </form>
                    <input type="button" value="취소" onClick={onToggle} />
                </>
            ) : (
                    <>

                        {
                            post.writerId &&
                            <>

                                <p>{`내용 : ${post.text}`}</p>
                                <p>날짜 : {post.date}</p>
                                <p>작성자 : {post.writerId}</p>
                            </>
                        }

                        {
                            post.resultUrl && (
                                <img src={post.resultUrl} width="50px" height="50px" />
                            )}

                        {
                            userPostCheck && (
                                <>
                                    <input type="button" name="delete"
                                        onClick={(e) => { onClick(e, post.postId) }}
                                        value="삭제"
                                    />
                                    <input
                                        type="button"
                                        onClick={onToggle}
                                        name="onEdit"
                                        value="수정"
                                    />
                                </>
                            )}
                    </>
                )}
        </>
    );

}

export default Npost;

