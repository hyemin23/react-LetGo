
import { authService } from "fbInstance";
import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import "../css/App.css";
import styled from "styled-components";
function App() {

  //init이 false면 router를 숨김
  //즉 firebase의 초기화 여부에 따라 정해짐
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    //로그인 감지
    authService.onAuthStateChanged((user) => {


      //만약 로그인을 했다면
      if (user) {

        console.log("로그인한 유저 :", user);
        setIsLoggedIn(true);

        //user 객체가 크므로 원하는 속성들만 모아서 넣어주기
        setUserObj({
          displayName: user.displayName
          , uid: user.uid
          , updateProfile: (args) => user.updateProfile(args)
        });
      }
      //로그인을 하지 않았다면
      else {
        setUserObj(null);
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  //유저 새로고침
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName
      , uid: user.uid
      , updateProfile: (args) => user.updateProfile(args)
    })
  }

  return (
    <>
      {

        init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} /> : "Initializing..."

      }
    </>
  );
}


export default App;
