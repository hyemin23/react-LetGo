(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{35:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(36),c=n.n(r),s=n(6),i=n(23),o=(n(44),n(57),n(58),{apiKey:"AIzaSyDknBZw7CdJH4_1e71hN260LLavkW2alMo",authDomain:"react-twitter-8a3b2.firebaseapp.com",projectId:"react-twitter-8a3b2",storageBucket:"react-twitter-8a3b2.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-LetGo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDknBZw7CdJH4_1e71hN260LLavkW2alMo",REACT_APP_AUTH_DOMAIN:"react-twitter-8a3b2.firebaseapp.com",REACT_APP_DATABASE_URL:"https://react-twitter-8a3b2-default-rtdb.firebaseio.com",REACT_APP_PROJECT_ID:"react-twitter-8a3b2",REACT_APP_STORAGE_BUCKET:"react-twitter-8a3b2.appspot.com",REACT_APP_MESSAGIN_ID:"223319554213",REACT_APP_APP_ID:"1:223319554213:web:faef2a08fe66765678354c"}).REACT_APP_MESSAGING_SENDER_ID,appId:"1:223319554213:web:faef2a08fe66765678354c",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-LetGo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDknBZw7CdJH4_1e71hN260LLavkW2alMo",REACT_APP_AUTH_DOMAIN:"react-twitter-8a3b2.firebaseapp.com",REACT_APP_DATABASE_URL:"https://react-twitter-8a3b2-default-rtdb.firebaseio.com",REACT_APP_PROJECT_ID:"react-twitter-8a3b2",REACT_APP_STORAGE_BUCKET:"react-twitter-8a3b2.appspot.com",REACT_APP_MESSAGIN_ID:"223319554213",REACT_APP_APP_ID:"1:223319554213:web:faef2a08fe66765678354c"}).REACT_APP_MEASUREMENT_ID});i.a.initializeApp(o);var l=i.a,u=i.a.auth(),j=i.a.firestore(),d=i.a.storage(),b=n(21),p=n(8),O=n(7),f=n.n(O),h=n(12),x=n(13),m=n(28),v=n(14),g=n(1),_=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],j=i[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),O=p[0],_=p[1],A=function(e){e.preventDefault();var t=e.target.name;"email"===t?r(e.target.value):"passowrd"===t&&j(e.target.value)},w=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.signInWithEmailAndPassword(n,o);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),_(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.name,console.log("\uc774\ub984\uc740:"),console.log(n),"google"===n?(console.log("google \ub85c\uadf8\uc778"),a=new l.auth.GoogleAuthProvider):"git"===n&&(console.log("git \ub85c\uadf8\uc778"),a=new l.auth.GithubAuthProvider),e.next=7,u.signInWithPopup(a).then((function(e){alert("\ub85c\uadf8\uc778 \uc131\uacf5!")}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(x.a,{icon:v.b,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)("h2",{style:{fontSize:"25px",fontWeight:600},children:"\ub193\uace0(Go)"}),Object(g.jsx)("p",{style:{marginTop:"14px",fontSize:"15px"},children:" \uac00\uc838\uac08\uac8c\uc694. \ub450\uace0 \uac00\uc138\uc694."}),Object(g.jsxs)("form",{onSubmit:w,className:"container",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",placeholder:"Email",required:!0,onChange:A,name:"email",value:n,className:"authInput",autoFocus:!0})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"password",placeholder:"Password",required:!0,onChange:A,name:"passowrd",password:o,className:"authInput"})}),Object(g.jsx)("button",{type:"submit",value:"LogIn",name:"login",className:"authInput authSubmit",children:"Login"}),O&&Object(g.jsx)("p",{className:"authError",children:O})]}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{type:"button",name:"google",onClick:P,className:"authBtn",children:[Object(g.jsx)(x.a,{icon:m.b,color:"#04AAFF"}),"Google Login"]}),Object(g.jsxs)("button",{type:"button",name:"git",onClick:P,className:"authBtn",children:[Object(g.jsx)(x.a,{icon:m.a,color:"#04aaff"}),"Git Login"]}),Object(g.jsx)("button",{className:"authBtn",children:Object(g.jsxs)(b.b,{to:"/joinForm",style:{textDecoration:"none",color:"black"},children:[Object(g.jsx)("p",{children:Object(g.jsx)(x.a,{icon:v.g,color:"#04aaff"})}),"\ud68c\uc6d0\uac00\uc785"]})})]})]})},A=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(""),d=Object(s.a)(j,2),b=d[0],p=d[1],O=function(e){var t=e.target.name;"joinEmail"===t?r(e.target.value):"joinPassword"===t&&l(e.target.value)},x=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.createUserWithEmailAndPassword(n,o);case 4:alert("\ud68c\uc6d0\uac00\uc785 \ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),p(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:x,children:[Object(g.jsx)("input",{type:"text",placeholder:"Email",required:!0,onChange:O,name:"joinEmail",value:n}),Object(g.jsx)("input",{type:"password",placeholder:"Password",required:!0,onChange:O,name:"joinPassword",password:o}),b&&Object(g.jsx)("p",{children:b}),Object(g.jsx)("input",{type:"submit"})]})})};var w=function(e){var t=e.userObj,n=Object(p.f)(),a=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.signOut();case 4:alert("\ub85c\uadf8\uc544\uc6c3 \uc131\uacf5!"),n.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),alert("\ub85c\uadf8\uc544\uc6c3 \uc2e4\ud328");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("nav",{children:[Object(g.jsxs)("div",{className:"home_logo",children:[Object(g.jsx)("span",{style:{display:"block"},children:Object(g.jsx)(b.b,{to:"/",children:Object(g.jsx)(x.a,{icon:v.b,color:"#04AAFF",size:"5x"})})}),Object(g.jsx)("h2",{style:{display:"block",marginTop:35},children:"just left behind"})]}),t&&Object(g.jsx)("div",{className:"home_info",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("em",{children:t.displayName}),"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."]})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:Object(g.jsx)(b.b,{to:"/profile",className:"header_profile",children:Object(g.jsx)(x.a,{icon:v.f,color:"#04AAFF",size:"1x"})})})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{onClick:a,className:"header_logout",children:Object(g.jsx)(x.a,{icon:v.d,size:"1x",color:"#04AAFF"})})})]})})]})},P=n(25);var S=function(e){var t=e.userObj,n=e.refreshUser,r=Object(a.useState)(""),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),d=u[0],b=u[1],p=Object(a.useState)({displayName:""}),O=Object(s.a)(p,2),x=O[0],m=O[1],v=function(){var e=Object(h.a)(f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("newSend").where("writerId","==",t.uid).orderBy("date","desc").get();case 2:n=e.sent,console.log(n),a=n.docs.map((function(e){return Object(P.a)({postId:e.id},e.data())})),o(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}),[]);var _=function(){var e=Object(h.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.updateProfile(x).then((function(){alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),n()})).catch((function(e){alert(e.message)}));case 3:m({}),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"profile_change_form",children:[Object(g.jsx)("span",{onClick:function(e){b(!0)},children:"\ub2c9\ub124\uc784 \ubcc0\uacbd"}),d&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:"profile_change",children:[Object(g.jsx)("input",{type:"text",placeholder:"\ubcc0\uacbd\ud558\uc2e4 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"displayName",value:x.writerId,onChange:function(e){var t=e.target,n=t.name,a=t.value;"displayName"===n&&m({displayName:a})}}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{type:"submit",onClick:_,children:"\ubcc0\uacbd"}),Object(g.jsx)("button",{type:"cancel",onClick:function(){return b((function(e){return!e}))},children:"\ucde8\uc18c"})]})]})}),Object(g.jsx)("hr",{}),t&&Object(g.jsx)("h2",{children:"".concat(t.displayName,"\ub2d8\uc774 \ub450\uace0 \uac04 \ubaa9\ub85d")}),Object(g.jsx)("div",{className:"profile_write",children:i&&i.map((function(e){return Object(g.jsx)("div",{className:"profile_write_form",children:Object(g.jsxs)("p",{children:["\ub0b4\uc6a9 : ".concat(e.text," \uc791\uc131\uc77c : ").concat(e.date)," "]})})}))})]})},y=n(38);var E=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],p=function(){var e=Object(h.a)(f.a.mark((function e(n){var a,r,s,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",null===u||void 0===u||""===u){e.next=10;break}return r=d.ref().child("".concat(t.uid,"/").concat(Object(y.v4)())),e.next=6,r.putString(u,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:a=e.sent;case 10:return o=new Date,l={text:c,date:o.getDate(),writerId:t.uid,resultUrl:a},e.next=14,j.collection("newSend").add(l).then((function(e){alert("\uac8c\uc2dc\uae00\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),console.log(e)}));case 14:i(""),b("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:p,className:"addedProfileForm",children:[Object(g.jsxs)("div",{className:"addedProfileForm_input_container",children:[Object(g.jsx)("input",{type:"text",value:c,onChange:function(e){e.preventDefault(),i(e.target.value)},placeholder:"\uc624\ub298 \ud558\ub8e8\ub294 \uc5b4\ub560\ub098\uc694?",maxLength:200,className:"addProfileInput"}),Object(g.jsx)("button",{type:"submit",className:"addProfileSubmit",children:"\ub193\uace0\uac00\uae30"})]}),Object(g.jsxs)("label",{for:"file-upload",className:"file-upload-label",children:[Object(g.jsx)("span",{children:"\ud568\uaed8 \uc62c\ub9ac\uae30"}),Object(g.jsx)(x.a,{icon:v.a})]}),Object(g.jsx)("input",{type:"file",accept:"image/*",id:"file-upload",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){b(e.currentTarget.result)},n.readAsDataURL(t)},style:{opacity:0}}),u&&Object(g.jsxs)("div",{className:"profile_image_uploaded",children:[Object(g.jsx)("img",{src:u,style:{backgroundImage:u}}),Object(g.jsx)("div",{className:"image_cancel_btn",children:Object(g.jsx)("span",{onClick:function(){b("")},children:Object(g.jsx)(x.a,{icon:v.h,size:"1.5x",color:"red"})})})]})]})};var N=function(e){var t=e.post,n=e.userPostCheck,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(t.text),u=Object(s.a)(l,2),b=u[0],p=u[1],O=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("onRemove"),!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=11;break}return e.next=5,j.doc("newSend/".concat(t.postId)).delete();case 5:if(!t.resultUrl){e.next=8;break}return e.next=8,d.refFromURL(t.resultUrl).delete();case 8:alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){o((function(e){return!e}))},_=function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j.doc("newSend/".concat(t.postId)).update({text:b});case 3:o(!1),alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"newPost",children:i?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:_,className:"container newPostEdit",children:[Object(g.jsx)("input",{type:"text",value:b,onChange:function(e){e.preventDefault(),p(e.target.value)},className:"formInput"}),Object(g.jsxs)("div",{style:{textAlign:"center"},children:[Object(g.jsx)("button",{type:"submit",className:"formBtn",children:"\uc218\uc815"}),Object(g.jsx)("input",{type:"button",value:"\ucde8\uc18c",onClick:m,className:"formCancelBtn"})]})]})}):Object(g.jsxs)(g.Fragment,{children:[t.writerId&&Object(g.jsxs)("div",{className:"wirte_Info",children:[Object(g.jsx)("p",{children:"\ub0b4\uc6a9 : ".concat(t.text)}),Object(g.jsxs)("p",{children:["\ub0a0\uc9dc : ",t.date]}),Object(g.jsxs)("p",{children:["\uc791\uc131\uc790 :",t.writerId]})]}),t.resultUrl&&Object(g.jsx)("img",{src:t.resultUrl,width:"50px",height:"50px"}),n&&Object(g.jsxs)("div",{class:"post_actions",children:[Object(g.jsx)("span",{onClick:O,name:"delete",style:{cursor:"pointer"},children:Object(g.jsx)(x.a,{icon:v.e,color:"rgba(255,89,0)"})}),Object(g.jsx)("span",{onClick:m,name:"onEdit",style:{cursor:"pointer"},children:Object(g.jsx)(x.a,{icon:v.c,color:" rgb(95, 154, 242)"})})]})]})})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){j.collection("newSend").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(P.a)({postId:e.id},e.data())}));i(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(E,{userObj:t}),Object(g.jsx)("h2",{style:{fontSize:25,fontWeight:600,textAlign:"center",marginBottom:35,marginTop:20},children:"Our Memory"}),c&&c.map((function(e){return Object(g.jsx)(g.Fragment,{children:e&&t&&Object(g.jsx)(N,{post:e,userPostCheck:e.writerId===t.uid},e.id)})}))]})},I=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(g.jsxs)(b.a,{children:[t&&Object(g.jsx)(w,{userObj:n}),Object(g.jsx)(p.c,{children:t?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(C,{userObj:n})}}),Object(g.jsx)(p.a,{exact:!0,path:"/profile",render:function(){return Object(g.jsx)(S,{userObj:n,refreshUser:a})}})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/",component:_}),Object(g.jsx)(p.a,{exact:!0,path:"/joinForm",component:A})]})})]})};n(35);var T=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(null),d=Object(s.a)(j,2),b=d[0],p=d[1];return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){e?(console.log("\ub85c\uadf8\uc778\ud55c \uc720\uc800 :",e),l(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(p(null),l(!1)),r(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:n?Object(g.jsx)(I,{isLoggedIn:o,userObj:b,refreshUser:function(){var e=u.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing..."})};c.a.render(Object(g.jsx)(T,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.05280f5e.chunk.js.map