
<h2 align="center"> Introduction </h2>
 URI : https://hyemin23.github.io/react-LetGo/
  <h2 align="left"> 개인 프로젝트 "놓고"</h2>

> 말 못 할 사연이나 걱정거리들을 익명성 뒤에 거침없이 적고 떨쳐버리세요! 🖌
 
<h4 align="center"> Login Page </h4>
<p display="block" align="center">
<img src="https://user-images.githubusercontent.com/54235714/112762902-2d290580-903d-11eb-902b-9c785273b2d3.png" alt="main" width="50%" height="30%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
</p>


<h4 align="center">Landing Page</h4>
<div  width="100%">
<p display="block" align="center">
<img src="https://user-images.githubusercontent.com/54235714/112763585-0ae4b700-9040-11eb-9f5d-acb9a4420e08.png" alt="main" width="50%" height="30%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
 </p>
 
 <h4 align="center">Create,Update,Delete,Read</h4>
<p display="block" align="center">
<img src="https://user-images.githubusercontent.com/54235714/112763410-52b70e80-903f-11eb-8609-72660915d027.png" alt="main3" width="50%" height="30%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
 </p>
</div>
 
 <h4 align="center">Profile Page </h4>
 <p display="block" align="center">
 <img src="https://user-images.githubusercontent.com/54235714/112763525-bfcaa400-903f-11eb-9fea-ac2e58e36859.png" alt="main4" width="50%" height="30%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
 </p>
 
 
  <h4 align="center">Status Check </h4>
<p display="block" align="center">
 <img src="https://user-images.githubusercontent.com/54235714/112763601-189a3c80-9040-11eb-9b17-5cace6f1a9a8.png" alt="main4" width="50%" height="10%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
</p>

<h4 align="center">Join Page </h4>
<p display="block" align="center">
 <img src="https://user-images.githubusercontent.com/54235714/112790922-62fcd700-909b-11eb-942e-d56a5a8e2048.png" alt="main4" width="50%" height="30%" margin="0%" padding="0%" display="block" border="0" box-sizing="border-box"/>
</p>


<h2 align="center">📌 &nbsp; 프로젝트 소개 & 기능 소개 &nbsp;📌 <h2/>
 
### "놓고"

 놓다의 사전적 의미는 "손으로 무엇을 쥐거나 잡거나 누르고 있는 상태에서 손을 펴거나 힘을 빼서 잡고 있던 물건이 손 밖으로 빠져나가게 하다."입니다.
 친구 또는 가족들에게 털지 못한 고민이나 속앓이들을 마음껏 적고 훌훌 털어버리고 가세요!

   "놓고" 프로젝트는 현대사회에 집과 일 반복적인 루틴 속에서 지쳐가는 사람들의 걱정과 근심을 조금이나마 해소하고자 기획한 사이트입니다.
 어떠한 기술을 익히는 데 있어서 중요한 건 스스로 어떤 것을 구현하거나 만들어보는 것이라고 생각합니다 
 본 프로젝트는 `useState()`와 `useEffect()` Hook을 활용하여 학습하고자 프로젝트를 만들었으며 `firebaseDB`를 사용하여 진행하였습니다.
 호스팅은 git - `gh-pages` 을 이용하여 무료 호스팅 하였습니다.

<h3>회원가입 & 로그인 & </h3>

  - 회원가입 : 일반회원가입과 Git(깃허브),Google Login(구글 로그인)을 통하여 간단한 가입이 가능합니다.
  - 로그인  : 로그인은 firebase DB를 통하여 password 암호화하였으며, cookie 값을 통한 password 인증 절차를 추가하였습니다.

 
<h3>메인 페이지 </h3>

- 개인 프라이버시를 위해 익명성을 보장하였으며, 다른 사람 또는 본인의 게시물들을 조회 & 업로드(read, create) 할 수 있습니다.
uuid를 통하여 개개인을 구별 가능한 고유 번호를 저장하였으며 해당 uuid를 통하여 본인이 작성한 게시글은 수정(update) & 삭제(delete)가 얼마든지 가능합니다.
 firebase의 snap-shot(스냅샷)을 이용하여 실시간 글의 작성유무에 따라 새로고침 없이 페이지가 랜더링 됩니다.


<h3>프로필 페이지</h3>
- 자신의 닉네임을 실시간으로 수정하면 모든 페이지에서 랜더링됩니다. 또한 내가 쓴 게시글을 조회할 수 있습니다.
