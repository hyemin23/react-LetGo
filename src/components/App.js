import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from '../fbInstance';

function App() {


  const [init, setInit] = useState(false);
  //firebase의 인증 상태가 중 로그인 한 유저라면 
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      //로그인된 사용자라면
      if (user) {
        setIsLogin(true);
      }
      //로그인 하지 않은 사용자라면 
      else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLogin={isLogin} /> : "initial.."}
      <footer>copy @ hyemin</footer>
    </>
  );
}

export default App;
