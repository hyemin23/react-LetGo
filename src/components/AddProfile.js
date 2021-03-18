import { dbService, fbStorage } from 'fbInstance';
import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

function AddProfile({ userObj }) {

    //입력한 게시글 내용
    const [posts, setPosts] = useState("");
    //file url 가져오기
    const [attachment, setAttachment] = useState("");
    const onChange = (e) => {
        e.preventDefault();
        setPosts(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let resultUrl = "";
        if (attachment !== null && attachment !== undefined && attachment !== "") {
            //child에서는 기본적으로 경로를 만드는 메서드
            //사진의 경로 : 파일에 대한 ref
            //여기는 그냥 파일에 대한 저장소 즉, ref 만 생성하는 곳 ( 파일을 생성하는 곳이 아님)
            const fileRef = fbStorage.ref().child(`${userObj.uid}/${uuid()}`);

            //upload = putString으로 업로드 base64 문자열이므로
            //임의로 만든 파일 경로(fileRef) 에 업로드할 파일경로(attachment)를 올린다고 생각
            const res = await fileRef.putString(attachment, "data_url");

            //최종 경로
            resultUrl = await res.ref.getDownloadURL();

        }

        let date = new Date();
        const resultObj = {
            "text": posts
            , "date": date.getDate()
            , "writerId": userObj.uid
            , resultUrl
        }

        //사진을 먼저 저장소에 업로드 하고 그 base64 URL을 받아와서 작업한다
        await dbService.collection("newSend").add(resultObj).then(function (data) {
            alert("게시글이 등록되었습니다.");
            console.log(data);
        });

        setPosts("");
        setAttachment("");
    }

    //사진 초기화
    const onClear = () => {
        setAttachment("");
    }

    //파일 API 사용
    const onFileChange = (e) => {

        const { files } = e.target;

        //file Reader API 사용
        const theFile = files[0];
        const reader = new FileReader();

        //파일 로딩이 끝나면 그 후 여기 실행
        reader.onload = (finishedEvent) => {
            setAttachment(finishedEvent.currentTarget.result);
        }

        //파일로딩
        reader.readAsDataURL(theFile);
    }

    return (

        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={posts} onChange={onChange}
                    placeholder="오늘 하루는 어땠나요?"
                    maxLength={200} />
                <input type="file"
                    accept="image/*"
                    onChange={onFileChange}
                />
                <button type="submit">
                    떨쳐버리기
                    </button>
                {attachment &&
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClear}>Clear</button>
                    </div>
                }

            </form>
        </div>
    )
}

export default AddProfile;


