(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"a",(function(){return b}));var s=n(24),a=n(3),r=n(16),i={users:[],pageSize:10,totalCount:100,currentPage:1,isFetching:!1,folowingInProgress:[]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(a.a)(Object(a.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(a.a)(Object(a.a)({},e),{},{followed:!1}):e}))});case"SETUSERS":return Object(a.a)(Object(a.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(a.a)(Object(a.a)({},e),{},{totalCount:t.totalCount});case"TOGL-IDFETCHING":return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case"TOGL-IS-FOLLOWING-PROGRESS":return Object(a.a)(Object(a.a)({},e),{},{folowingInProgress:t.isFetching?[].concat(Object(s.a)(e.folowingInProgress),[t.userId]):e.folowingInProgress.filter((function(e){return e!=t.userId}))})}return e};var c=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},o=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},u=function(e){return{type:"TOGL-IDFETCHING",isFetching:e}},l=function(e,t){return{type:"TOGL-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},d=function(e,t){return function(n){n(u(!0)),n(c(e)),r.c.getUsers(e,t).then((function(e){n(u(!1)),n({type:"SETUSERS",users:e.data.items}),n(o(e.data.totalCount))}))}},j=function(e){return function(t){t(l(!0,e)),r.c.getUnFollow(+e).then((function(n){0===n.data.resultCode&&t({type:"UN-FOLLOW",userid:e}),t(l(!1,e))}))}},b=function(e){return function(t){t(l(!0,e)),r.c.getFollow(+e).then((function(n){0===n.data.resultCode&&t({type:"FOLLOW",userid:e}),t(l(!1,e))}))}}},131:function(e,t,n){e.exports={status:"ProfileInfo_status__31wvJ"}},132:function(e,t,n){e.exports={item:"Post_item__2KsXO"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var s=n(128),a=n.n(s).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7866738e-c5bf-440e-864d-4cc467150876"}}),r={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},getUnFollow:function(e){return a.delete("follow/".concat(e))},getFollow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},updatePhotos:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},160:function(e,t,n){},19:function(e,t,n){e.exports={nav:"Navbar_nav__hqimj",item:"Navbar_item__1rYmE",activeClassLink:"Navbar_activeClassLink__1kCFK"}},245:function(e,t,n){},25:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},286:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s);n(160),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(64),i=n.n(r),c=n(10),o=n(13),u=n(9),l=n(126),d=n(24),j=n(3),b=n(287),O={dialogs:[{id:Object(b.a)(),name:"Nastya"},{id:Object(b.a)(),name:"Vlad"},{id:Object(b.a)(),name:"Vika"},{id:Object(b.a)(),name:"Andrey"},{id:Object(b.a)(),name:"Vasia"}],messages:[{id:Object(b.a)(),message:"hi how is your programmnig"},{id:Object(b.a)(),message:'hi, its ok"'},{id:Object(b.a)(),message:"Good"},{id:Object(b.a)(),message:"ok"},{id:Object(b.a)(),message:"yo"}]};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.value;return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[{id:Object(b.a)(),message:n}])});default:return e}},f=n(16),p={profile:null,status:"",posts:[{id:Object(b.a)(),message:"Hi, how are you*?",likekounts:12},{id:Object(b.a)(),message:"its my first post",likekounts:33},{id:Object(b.a)(),message:"go in iron",likekounts:333},{id:Object(b.a)(),message:"its my life",likekounts:333}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.value,s={id:Object(b.a)(),likekounts:0,message:n};return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[s])});case"SET_USER_PROFILE":return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case"SET_STATUS":case"UPDATE_STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case"UPDATE_PHOTO":return Object(j.a)(Object(j.a)({},e),{},{profile:Object(j.a)(Object(j.a)({},e.profile),t.data)});default:return e}},g=n(103),v=n(37),x=function(e){return{type:"SET-USER-DATA",data:e}},_={id:null,email:null,login:null,isAuth:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(j.a)(Object(j.a)({},e),t.data)}return e},C=function(){return function(e){f.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.email,r=n.login;e(x({id:s,email:a,login:r,isAuth:!0}))}}))}},P=n(129),k={initialized:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0})}return e},y=Object(u.c)({dialogsPage:h,profilePage:m,usersPeges:g.b,auth:S,form:l.a,app:w}),N=Object(u.e)(y,Object(u.a)(P.a)),T=n(39),E=n(40),A=n(42),I=n(41),U=(n(245),n(19)),L=n.n(U),F=n(0),D=function(){return Object(F.jsxs)("nav",{className:L.a.nav,children:[Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)(o.b,{to:"/profile",activeClassName:L.a.activeClassLink,children:"Profile"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)(o.b,{to:"/dialogs",activeClassName:L.a.activeClassLink,children:"Messages"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)(o.b,{to:"/users",activeClassName:L.a.activeClassLink,children:"Users"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)(o.b,{to:"/chat",activeClassName:L.a.activeClassLink,children:"Chat"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)("a",{children:"News"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)("a",{children:"Music"})}),Object(F.jsx)("div",{className:L.a.item,children:Object(F.jsx)("a",{children:"Settings"})})]})},R=n(11),M=n(25),B=n.n(M),G=function(e){return Object(F.jsx)("div",{className:B.a.dialog+" "+B.a.active,children:Object(F.jsx)(o.b,{to:"dialogs/"+e.id,children:e.name})})},z=function(e){return Object(F.jsx)("div",{className:B.a.dialog,children:e.message})},W=n(124),H=n(125),V=function(e){return e?void 0:"Field is required"},J=function(e){return function(t){if(t)return t.length>e?"Max length is "+e+" symbols ":void 0}},K=n(92),q=n(34),Y=n.n(q),Q=function(e){var t=e.input,n=(e.children,e.meta),s=Object(K.a)(e,["input","children","meta"]),a=n.touched&&n.error;return Object(F.jsxs)("div",{className:Y.a.formControl+" "+(a?Y.a.error:""),children:[Object(F.jsx)("div",{children:Object(F.jsx)("input",Object(j.a)(Object(j.a)({},t),s))}),a&&Object(F.jsx)("span",{children:n.error})]})},X=function(e){var t=e.input,n=(e.children,e.meta),s=Object(K.a)(e,["input","children","meta"]),a=n.touched&&n.error;return Object(F.jsxs)("div",{className:Y.a.formControl+" "+(a?Y.a.error:""),children:[Object(F.jsx)("div",{children:Object(F.jsx)("textarea",Object(j.a)(Object(j.a)({},t),s))}),a&&Object(F.jsx)("span",{children:n.error})]})},Z=function(e){var t=e.dialogsPage.messages.map((function(e){return Object(F.jsx)(z,{message:e.message},e.id)})),n=e.dialogsPage.dialogs.map((function(e){return Object(F.jsx)(G,{id:e.id,name:e.name},e.id)}));return Object(F.jsxs)("div",{className:B.a.dialogs,children:[Object(F.jsx)("div",{className:B.a.dialogsItems,children:n}),Object(F.jsxs)("div",{className:B.a.messages,children:[Object(F.jsxs)("div",{children:[" ",t]}),Object(F.jsx)(ee,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},$=J(10),ee=Object(H.a)({form:"AddMessageForm"})((function(e){return Object(F.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(F.jsx)("div",{children:Object(F.jsx)(W.a,{placeholder:"Enter your message",validate:[$,V],name:"newMessageBody",component:X})}),Object(F.jsx)("div",{children:Object(F.jsx)("button",{children:"add message"})})]})})),te=function(e){return{isAuth:e.auth.isAuth}},ne=function(e){return Object(c.b)(te)((function(t){return t.isAuth?Object(F.jsx)(e,Object(j.a)({},t)):Object(F.jsx)(R.a,{to:"/login"})}))},se=Object(u.d)(Object(c.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",value:e}}(t))}}})),ne)(Z),ae=n(131),re=n.n(ae),ie=n(51),ce=n(33),oe=function(e){var t=Object(s.useState)(!1),n=Object(ce.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(e.status),c=Object(ce.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(F.jsxs)("div",{children:[!a&&Object(F.jsx)("div",{children:Object(F.jsx)("span",{onDoubleClick:function(){return r(!0)},children:e.status||"-------"})}),a&&Object(F.jsx)("div",{children:Object(F.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(o)},value:o})})]})},ue=function(e){if(!e.profile)return Object(F.jsx)(ie.a,{});return Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:re.a.discriptionBlock,children:[Object(F.jsx)("div",{children:e.profile.fullName}),Object(F.jsx)("img",{src:e.profile.photos.large}),e.isOwner&&Object(F.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&e.savePhoto(t.target.files[0])}}),Object(F.jsx)(oe,{status:e.status,updateStatus:e.updateStatus})]})})},le=n(90),de=n.n(le),je=n(132),be=n.n(je),Oe=function(e){return Object(F.jsxs)("div",{className:be.a.item,children:[Object(F.jsx)("img",{alt:"post",src:"https://vignette.wikia.nocookie.net/castle-rock/images/9/9d/Stephen_King._Art_by_CoalRye.jpg/revision/latest?cb=20180716011208&path-prefix=ru"}),e.message,Object(F.jsx)("div",{children:Object(F.jsxs)("span",{children:[e.likekounts," like"]})})]})},he=function(e){var t=e.posts.map((function(e){return Object(F.jsx)(Oe,{message:e.message,likekounts:e.likekounts,id:e.id},e.id)}));return Object(F.jsxs)("div",{className:de.a.postsBlock,children:[Object(F.jsx)("h3",{children:"My posts"}),Object(F.jsx)("div",{children:Object(F.jsx)(pe,{onSubmit:function(t){e.addPost(t.newPostBody)}})}),Object(F.jsx)("div",{className:de.a.posts,children:t})]})},fe=J(20),pe=Object(H.a)({form:"AddNewPostForm"})((function(e){return Object(F.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(F.jsx)("div",{children:Object(F.jsx)(W.a,{placeholder:"Enter new post",validate:[fe,V],name:"newPostBody",component:X})}),Object(F.jsx)("div",{children:Object(F.jsx)("button",{children:"Add post"})})]})})),me=Object(c.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",value:e}}(t))}}}))(he),ge=function(e){return Object(F.jsxs)("div",{children:[Object(F.jsx)(ue,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(F.jsx)(me,{})]})},ve=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"refreshPrrofile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorisedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshPrrofile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!=e.match.params.userId&&this.refreshPrrofile()}},{key:"render",value:function(){return Object(F.jsx)("div",{children:Object(F.jsx)(ge,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),n}(a.a.Component),xe=Object(u.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){f.c.getProfile(+e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){f.b.getStatus(+e).then((function(e){t({type:"SET_STATUS",status:e.data})}))}},updateStatus:function(e){return function(t){f.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"UPDATE_STATUS",status:e}}(e))}))}},savePhoto:function(e){return function(t){f.b.updatePhotos(e).then((function(e){0===e.data.resultCode&&t({type:"UPDATE_PHOTO",data:e.data.data.photos})}))}}}),ne,R.f)(ve),_e=n(91),Se=n.n(_e),Ce=function(e){return Object(F.jsxs)("header",{className:Se.a.header,children:[Object(F.jsx)("img",{alt:"header",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),Object(F.jsx)("div",{className:Se.a.loginBlock,children:e.isAuth?Object(F.jsxs)("div",{children:[e.login," --- ",Object(F.jsx)("button",{onClick:e.logoutTC,children:"Logout"})]}):Object(F.jsx)(o.b,{to:"/login",children:"Login"})})]})},Pe=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(F.jsx)(Ce,Object(j.a)({},this.props))}}]),n}(a.a.Component),ke=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:function(){return function(e){f.a.logout().then((function(t){0===t.data.resultCode&&e(x({login:null,id:null,email:null,isAuth:!1}))}))}}})(Pe),we=Object(H.a)({form:"login"})((function(e){return Object(F.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(F.jsx)("div",{children:Object(F.jsx)(W.a,{placeholder:"email",validate:[V],name:"email",component:Q})}),Object(F.jsx)("div",{children:Object(F.jsx)(W.a,{placeholder:"password",validate:[V],name:"password",component:Q})}),Object(F.jsx)("div",{children:Object(F.jsx)(W.a,{type:"checkbox",name:"rememberMe",component:Q})}),e.error&&Object(F.jsx)("div",{className:Y.a.FormsControl,children:e.error}),Object(F.jsx)("div",{children:Object(F.jsx)("button",{children:"Login"})})]})}));var ye=Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n){return function(s){f.a.login(e,t,n).then((function(e){if(0===e.data.resultCode)s(C());else{var t=e.data.messages.length>0?e.data.messages[0]:"some error";s(Object(v.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(F.jsx)(R.a,{to:"/profile"}):Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{children:"Login"}),Object(F.jsx)(we,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe)}})]})})),Ne=n(35),Te=n.n(Ne),Ee=function(){var e=Object(c.c)((function(e){return e.auth.id})),t=Object(s.useState)(""),n=Object(ce.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)([]),o=Object(ce.a)(i,2),u=o[0],l=o[1],j=Object(s.useState)(),b=Object(ce.a)(j,2),O=b[0],h=b[1],f=Object(s.useRef)(null);O&&(O.onmessage=function(e){var t=JSON.parse(e.data);l([].concat(Object(d.a)(u),Object(d.a)(t))),f&&f.current&&f.current.scrollTo(0,f.current.scrollHeight)}),Object(s.useEffect)((function(){var e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");e&&h(e)}),[]);return Object(F.jsxs)("div",{className:Te.a.chat,children:[Object(F.jsx)("div",{children:Object(F.jsx)("div",{ref:f,className:Te.a.messanges,children:u.map((function(t,n){return Object(F.jsxs)("div",{className:Te.a.messange,children:[Object(F.jsx)("img",{className:Te.a.usersPhoto,src:t.photo}),Object(F.jsx)("b",{children:Object(F.jsx)("span",{className:t.userId===e?Te.a.span2:Te.a.span,children:t.userName})}),Object(F.jsx)("span",{children:t.message})]},n)}))})}),Object(F.jsxs)("div",{children:[Object(F.jsx)("textarea",{value:a,onChange:function(e){r(e.currentTarget.value)}}),Object(F.jsx)("button",{onClick:function(){O&&(O.send(a),r(""))},children:"Send"})]})]})},Ae=a.a.lazy((function(){return n.e(3).then(n.bind(null,290))})),Ie=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(F.jsxs)("div",{className:"app-wrapper",children:[Object(F.jsx)(ke,{}),Object(F.jsx)(D,{}),Object(F.jsxs)("div",{className:"app-wrapper-content",children:[Object(F.jsx)(R.b,{path:"/profile/:userId?",render:function(){return Object(F.jsx)(xe,{})}}),Object(F.jsx)(R.b,{path:"/dialogs",render:function(){return Object(F.jsx)(se,{})}}),Object(F.jsx)(R.b,{path:"/users",render:function(){return Object(F.jsx)(a.a.Suspense,{fallback:Object(F.jsx)("div",{children:Object(F.jsx)(ie.a,{})}),children:Object(F.jsx)(Ae,{})})}}),Object(F.jsx)(R.b,{path:"/login",render:function(){return Object(F.jsx)(ye,{})}}),Object(F.jsx)(R.b,{path:"/chat",render:function(){return Object(F.jsx)(Ee,{})}})]})]}):Object(F.jsx)(ie.a,{})}}]),n}(a.a.Component),Ue=Object(u.d)(Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ie);i.a.render(Object(F.jsxs)(o.a,{children:[Object(F.jsx)(c.a,{store:N,children:Object(F.jsx)(Ue,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={formControl:"FormsControl_formControl__P0OFh",error:"FormsControl_error__1g0kt",FormsControl:"FormsControl_FormsControl__3L67z"}},35:function(e,t,n){e.exports={usersPhoto:"Chat_usersPhoto__1XzaW",messanges:"Chat_messanges__cYBo0",chat:"Chat_chat__fhiBV",messange:"Chat_messange__10FAU",span:"Chat_span__21kzV",span2:"Chat_span2__3ztus"}},51:function(e,t,n){"use strict";n(1);var s=n.p+"static/media/loader.a1a99674.gif",a=n(0);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:s})})}},90:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1aryQ",posts:"MyPosts_posts__1q9rU"}},91:function(e,t,n){e.exports={header:"Header_header__1MOL-",loginBlock:"Header_loginBlock__1z7oD"}}},[[286,1,2]]]);
//# sourceMappingURL=main.c03a2838.chunk.js.map