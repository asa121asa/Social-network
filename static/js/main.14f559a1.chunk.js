(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{128:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__bOFQE"}},129:function(e,t,n){e.exports={usersPhoto:"User_usersPhoto__2geQG"}},130:function(e,t,n){e.exports={status:"ProfileInfo_status__31wvJ"}},131:function(e,t,n){e.exports={item:"Post_item__2KsXO"}},159:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__hqimj",item:"Navbar_item__1rYmE",activeClassLink:"Navbar_activeClassLink__1kCFK"}},24:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},244:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s);n(159),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(62),i=n.n(a),c=n(10),o=n(12),u=n(8),l=n(123),j=n(23),d=n(5),b=n(286),h={dialogs:[{id:Object(b.a)(),name:"Nastya"},{id:Object(b.a)(),name:"Vlad"},{id:Object(b.a)(),name:"Vika"},{id:Object(b.a)(),name:"Andrey"},{id:Object(b.a)(),name:"Vasia"}],messages:[{id:Object(b.a)(),message:"hi how is your programmnig"},{id:Object(b.a)(),message:'hi, its ok"'},{id:Object(b.a)(),message:"Good"},{id:Object(b.a)(),message:"ok"},{id:Object(b.a)(),message:"yo"}]};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.value;return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[{id:Object(b.a)(),message:n}])});default:return e}},p=n(125),g=n.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7866738e-c5bf-440e-864d-4cc467150876"}}),f=function(e,t){return g.get("users?page=".concat(e,"&count=").concat(t))},m=function(e){return g.delete("follow/".concat(e))},x=function(e){return g.post("follow/".concat(e))},v=function(e){return console.warn("Obsolete method"),S.getProfile(e)},S={getProfile:function(e){return g.get("profile/"+e)},getStatus:function(e){return g.get("profile/status/"+e)},updateStatus:function(e){return g.put("profile/status",{status:e})},updatePhotos:function(e){return g.put("profile/photo",{image:e})}},_=function(){return g.get("auth/me")},C=function(e,t,n){return g.post("/auth/login",{email:e,password:t,rememberMe:n})},P=function(){return g.delete("auth/login")},k={profile:null,status:"",posts:[{id:Object(b.a)(),message:"Hi, how are you*?",likekounts:12},{id:Object(b.a)(),message:"its my first post",likekounts:33},{id:Object(b.a)(),message:"go in iron",likekounts:333},{id:Object(b.a)(),message:"its my life",likekounts:333}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.value,s={id:Object(b.a)(),likekounts:0,message:n};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(j.a)(e.posts),[s])});case"SET_USER_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case"SET_STATUS":case"UPDATE_STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},T={users:[],pageSize:10,totalCount:100,currentPage:1,isFetching:!1,folowingInProgress:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case"SETUSERS":return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(d.a)(Object(d.a)({},e),{},{totalCount:t.totalCount});case"TOGL-IDFETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"TOGL-IS-FOLLOWING-PROGRESS":return Object(d.a)(Object(d.a)({},e),{},{folowingInProgress:t.isFetching?[].concat(Object(j.a)(e.folowingInProgress),[t.userId]):e.folowingInProgress.filter((function(e){return e!=t.userId}))})}return e},y=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},E=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},A=function(e){return{type:"TOGL-IDFETCHING",isFetching:e}},F=function(e,t){return{type:"TOGL-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},I=n(40),U=function(e){return{type:"SET-USER-DATA",data:e}},L={id:null,email:null,login:null,isAuth:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(d.a)(Object(d.a)({},e),t.data)}return e},z=function(){return function(e){_().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,r=n.email,a=n.login;e(U({id:s,email:r,login:a,isAuth:!0}))}}))}},M=n(126),R={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{initialized:!0})}return e},G=Object(u.c)({dialogsPage:O,profilePage:w,usersPeges:N,auth:D,form:l.a,app:B}),W=Object(u.e)(G,Object(u.a)(M.a)),H=n(29),V=n(30),J=n(32),K=n(31),Q=(n(244),n(18)),q=n.n(Q),Y=n(0),X=function(){return Object(Y.jsxs)("nav",{className:q.a.nav,children:[Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)(o.b,{to:"/profile",activeClassName:q.a.activeClassLink,children:"Profile"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)(o.b,{to:"/dialogs",activeClassName:q.a.activeClassLink,children:"Messages"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)(o.b,{to:"/users",activeClassName:q.a.activeClassLink,children:"Users"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)(o.b,{to:"/chat",activeClassName:q.a.activeClassLink,children:"Chat"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)("a",{children:"News"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)("a",{children:"Music"})}),Object(Y.jsx)("div",{className:q.a.item,children:Object(Y.jsx)("a",{children:"Settings"})})]})},Z=n(11),$=n(24),ee=n.n($),te=function(e){return Object(Y.jsx)("div",{className:ee.a.dialog+" "+ee.a.active,children:Object(Y.jsx)(o.b,{to:"dialogs/"+e.id,children:e.name})})},ne=function(e){return Object(Y.jsx)("div",{className:ee.a.dialog,children:e.message})},se=n(121),re=n(122),ae=function(e){return e?void 0:"Field is required"},ie=function(e){return function(t){if(t)return t.length>e?"Max length is "+e+" symbols ":void 0}},ce=n(90),oe=n(37),ue=n.n(oe),le=function(e){var t=e.input,n=(e.children,e.meta),s=Object(ce.a)(e,["input","children","meta"]),r=n.touched&&n.error;return Object(Y.jsxs)("div",{className:ue.a.formControl+" "+(r?ue.a.error:""),children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("input",Object(d.a)(Object(d.a)({},t),s))}),r&&Object(Y.jsx)("span",{children:n.error})]})},je=function(e){var t=e.input,n=(e.children,e.meta),s=Object(ce.a)(e,["input","children","meta"]),r=n.touched&&n.error;return Object(Y.jsxs)("div",{className:ue.a.formControl+" "+(r?ue.a.error:""),children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("textarea",Object(d.a)(Object(d.a)({},t),s))}),r&&Object(Y.jsx)("span",{children:n.error})]})},de=function(e){var t=e.dialogsPage.messages.map((function(e){return Object(Y.jsx)(ne,{message:e.message},e.id)})),n=e.dialogsPage.dialogs.map((function(e){return Object(Y.jsx)(te,{id:e.id,name:e.name},e.id)}));return Object(Y.jsxs)("div",{className:ee.a.dialogs,children:[Object(Y.jsx)("div",{className:ee.a.dialogsItems,children:n}),Object(Y.jsxs)("div",{className:ee.a.messages,children:[Object(Y.jsxs)("div",{children:[" ",t]}),Object(Y.jsx)(he,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},be=ie(10),he=Object(re.a)({form:"AddMessageForm"})((function(e){return Object(Y.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{placeholder:"Enter your message",validate:[be,ae],name:"newMessageBody",component:je})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"add message"})})]})})),Oe=function(e){return{isAuth:e.auth.isAuth}},pe=function(e){return Object(c.b)(Oe)((function(t){return t.isAuth?Object(Y.jsx)(e,Object(d.a)({},t)):Object(Y.jsx)(Z.a,{to:"/login"})}))},ge=Object(u.d)(Object(c.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",value:e}}(t))}}})),pe)(de),fe=n(25),me=n(128),xe=n.n(me);var ve=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var a=Math.ceil(t/e.portionSize),i=Object(s.useState)(1),c=Object(fe.a)(i,2),o=c[0],u=c[1],l=(o-1)*e.portionSize+1,j=o*e.portionSize;return Object(Y.jsxs)("div",{children:[o>1&&Object(Y.jsx)("button",{onClick:function(){u(o-1)},children:"prev"}),n.filter((function(e){return e>=l&&e<=j})).map((function(t,n){return Object(Y.jsx)("span",{className:e.currentPage===t?xe.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t},n)})),a>o&&Object(Y.jsx)("button",{onClick:function(){u(o+1)},children:"next"})]})},Se=n(129),_e=n.n(Se),Ce=n.p+"static/media/user.96e310a6.png";var Pe=function(e){return Object(Y.jsx)("div",{children:e.users.map((function(t){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("span",{children:Object(Y.jsxs)("div",{children:[Object(Y.jsx)(o.b,{to:"/profile/"+t.id,children:Object(Y.jsx)("img",{alt:"photo",src:null!==t.photos.small?t.photos.small:Ce,className:_e.a.usersPhoto})}),Object(Y.jsx)("div",{children:t.followed?Object(Y.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.unFolluwThunk(t.id)},children:"unfollow"}):Object(Y.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.FolluwThunk(t.id)},children:"follow"})})]})}),Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("span",{children:[Object(Y.jsx)("div",{children:t.name}),Object(Y.jsx)("div",{children:t.status})]}),Object(Y.jsx)("span",{children:Object(Y.jsx)("div",{children:t.location&&t.location})})]})]},t.id)}))})};var ke=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(ve,{onPageChanged:e.onPageChanged,currentPage:e.currentPage,pageSize:e.pageSize,totalCount:e.totalCount,users:e.users,portionSize:10}),Object(Y.jsx)(Pe,{users:e.users,FolluwThunk:e.FolluwThunk,folowingInProgres:e.folowingInProgres,unFolluwThunk:e.unFolluwThunk})]})},we=n.p+"static/media/loader.a1a99674.gif",Te=function(){return Object(Y.jsx)("div",{children:Object(Y.jsx)("img",{src:we})})},Ne=function(e){return e.usersPeges.users},ye=function(e){return e.usersPeges.pageSize},Ee=function(e){return e.usersPeges.totalCount},Ae=function(e){return e.usersPeges.currentPage},Fe=function(e){return e.usersPeges.isFetching},Ie=function(e){return e.usersPeges.folowingInProgress},Ue=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(H.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunk(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[this.props.isFetching?Object(Y.jsx)(Te,{}):null,Object(Y.jsx)(ke,{folowingInProgres:this.props.folowingInProgress,unFolluwThunk:this.props.unFolluwThunk,FolluwThunk:this.props.FolluwThunk,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,setTotalUsersCount:this.props.setTotalUsersCount,onPageChanged:this.onPageChanged,users:this.props.users})]})}}]),n}(r.a.Component),Le=Object(u.d)(Object(c.b)((function(e){return{users:Ne(e),pageSize:ye(e),totalCount:Ee(e),currentPage:Ae(e),isFetching:Fe(e),folowingInProgress:Ie(e)}}),{setCurrentPage:y,setTotalUsersCount:E,toglIsFetching:A,getUsersThunk:function(e,t){return function(n){n(A(!0)),n(y(e)),f(e,t).then((function(e){n(A(!1)),n({type:"SETUSERS",users:e.data.items}),n(E(e.data.totalCount))}))}},unFolluwThunk:function(e){return function(t){t(F(!0,e)),m(+e).then((function(n){0===n.data.resultCode&&t({type:"UN-FOLLOW",userid:e}),t(F(!1,e))}))}},FolluwThunk:function(e){return function(t){t(F(!0,e)),x(+e).then((function(n){0===n.data.resultCode&&t({type:"FOLLOW",userid:e}),t(F(!1,e))}))}}}))(Ue),De=n(130),ze=n.n(De),Me=function(e){var t=Object(s.useState)(!1),n=Object(fe.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)(e.status),c=Object(fe.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(Y.jsxs)("div",{children:[!r&&Object(Y.jsx)("div",{children:Object(Y.jsx)("span",{onDoubleClick:function(){return a(!0)},children:e.status||"-------"})}),r&&Object(Y.jsx)("div",{children:Object(Y.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(o)},value:o})})]})},Re=function(e){return e.profile?Object(Y.jsx)("div",{children:Object(Y.jsxs)("div",{className:ze.a.discriptionBlock,children:[Object(Y.jsx)("div",{children:e.profile.fullName}),Object(Y.jsx)("img",{src:e.profile.photos.large}),Object(Y.jsx)(Me,{status:e.status,updateStatus:e.updateStatus})]})}):Object(Y.jsx)(Te,{})},Be=n(88),Ge=n.n(Be),We=n(131),He=n.n(We),Ve=function(e){return Object(Y.jsxs)("div",{className:He.a.item,children:[Object(Y.jsx)("img",{alt:"post",src:"https://vignette.wikia.nocookie.net/castle-rock/images/9/9d/Stephen_King._Art_by_CoalRye.jpg/revision/latest?cb=20180716011208&path-prefix=ru"}),e.message,Object(Y.jsx)("div",{children:Object(Y.jsxs)("span",{children:[e.likekounts," like"]})})]})},Je=function(e){var t=e.posts.map((function(e){return Object(Y.jsx)(Ve,{message:e.message,likekounts:e.likekounts,id:e.id},e.id)}));return Object(Y.jsxs)("div",{className:Ge.a.postsBlock,children:[Object(Y.jsx)("h3",{children:"My posts"}),Object(Y.jsx)("div",{children:Object(Y.jsx)(Qe,{onSubmit:function(t){e.addPost(t.newPostBody)}})}),Object(Y.jsx)("div",{className:Ge.a.posts,children:t})]})},Ke=ie(20),Qe=Object(re.a)({form:"AddNewPostForm"})((function(e){return Object(Y.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{placeholder:"Enter new post",validate:[Ke,ae],name:"newPostBody",component:je})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"Add post"})})]})})),qe=Object(c.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",value:e}}(t))}}}))(Je),Ye=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(Re,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(Y.jsx)(qe,{})]})},Xe=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorisedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(Y.jsx)("div",{children:Object(Y.jsx)(Ye,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(r.a.Component),Ze=Object(u.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){v(+e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){S.getStatus(+e).then((function(e){t({type:"SET_STATUS",status:e.data})}))}},updateStatus:function(e){return function(t){S.updateStatus(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"UPDATE_STATUS",status:e}}(e))}))}}}),pe,Z.f)(Xe),$e=n(89),et=n.n($e),tt=function(e){return Object(Y.jsxs)("header",{className:et.a.header,children:[Object(Y.jsx)("img",{alt:"header",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),Object(Y.jsx)("div",{className:et.a.loginBlock,children:e.isAuth?Object(Y.jsxs)("div",{children:[e.login," --- ",Object(Y.jsx)("button",{onClick:e.logoutTC,children:"Logout"})]}):Object(Y.jsx)(o.b,{to:"/login",children:"Login"})})]})},nt=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(Y.jsx)(tt,Object(d.a)({},this.props))}}]),n}(r.a.Component),st=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:function(){return function(e){P().then((function(t){0===t.data.resultCode&&e(U({login:null,id:null,email:null,isAuth:!1}))}))}}})(nt),rt=Object(re.a)({form:"login"})((function(e){return Object(Y.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{placeholder:"email",validate:[ae],name:"email",component:le})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{placeholder:"password",validate:[ae],name:"password",component:le})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{type:"checkbox",name:"rememberMe",component:le})}),e.error&&Object(Y.jsx)("div",{className:ue.a.FormsControl,children:e.error}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"Login"})})]})}));var at=Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n){return function(s){C(e,t,n).then((function(e){if(0===e.data.resultCode)s(z());else{var t=e.data.messages.length>0?e.data.messages[0]:"some error";s(Object(I.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(Y.jsx)(Z.a,{to:"/profile"}):Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:"Login"}),Object(Y.jsx)(rt,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe)}})]})})),it=n(38),ct=n.n(it),ot=function(){var e=Object(c.c)((function(e){return e.auth.id})),t=Object(s.useState)(""),n=Object(fe.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)([]),o=Object(fe.a)(i,2),u=o[0],l=o[1],d=Object(s.useState)(),b=Object(fe.a)(d,2),h=b[0],O=b[1],p=Object(s.useRef)(null);h&&(h.onmessage=function(e){var t=JSON.parse(e.data);l([].concat(Object(j.a)(u),Object(j.a)(t))),p&&p.current&&p.current.scrollTo(0,p.current.scrollHeight)}),Object(s.useEffect)((function(){var e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");e&&O(e)}),[]);return Object(Y.jsxs)("div",{className:ct.a.chat,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("div",{ref:p,className:ct.a.messanges,children:u.map((function(t,n){return Object(Y.jsxs)("div",{className:ct.a.messange,children:[Object(Y.jsx)("img",{className:ct.a.usersPhoto,src:t.photo}),Object(Y.jsx)("b",{children:Object(Y.jsx)("span",{className:t.userId===e?ct.a.span2:ct.a.span,children:t.userName})}),Object(Y.jsx)("span",{children:t.message})]},n)}))})}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("textarea",{value:r,onChange:function(e){a(e.currentTarget.value)}}),Object(Y.jsx)("button",{onClick:function(){h&&(h.send(r),a(""))},children:"Send"})]})]})},ut=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(Y.jsxs)("div",{className:"app-wrapper",children:[Object(Y.jsx)(st,{}),Object(Y.jsx)(X,{}),Object(Y.jsxs)("div",{className:"app-wrapper-content",children:[Object(Y.jsx)(Z.b,{path:"/profile/:userId?",render:function(){return Object(Y.jsx)(Ze,{})}}),Object(Y.jsx)(Z.b,{path:"/dialogs",render:function(){return Object(Y.jsx)(ge,{})}}),Object(Y.jsx)(Z.b,{path:"/users",render:function(){return Object(Y.jsx)(Le,{})}}),Object(Y.jsx)(Z.b,{path:"/login",render:function(){return Object(Y.jsx)(at,{})}}),Object(Y.jsx)(Z.b,{path:"/chat",render:function(){return Object(Y.jsx)(ot,{})}})]})]}):Object(Y.jsx)(Te,{})}}]),n}(r.a.Component),lt=Object(u.d)(Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(z());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ut);i.a.render(Object(Y.jsxs)(o.a,{children:[Object(Y.jsx)(c.a,{store:W,children:Object(Y.jsx)(lt,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){e.exports={formControl:"FormsControl_formControl__P0OFh",error:"FormsControl_error__1g0kt",FormsControl:"FormsControl_FormsControl__3L67z"}},38:function(e,t,n){e.exports={usersPhoto:"Chat_usersPhoto__1XzaW",messanges:"Chat_messanges__cYBo0",chat:"Chat_chat__fhiBV",messange:"Chat_messange__10FAU",span:"Chat_span__21kzV",span2:"Chat_span2__3ztus"}},88:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1aryQ",posts:"MyPosts_posts__1q9rU"}},89:function(e,t,n){e.exports={header:"Header_header__1MOL-",loginBlock:"Header_loginBlock__1z7oD"}}},[[285,1,2]]]);
//# sourceMappingURL=main.14f559a1.chunk.js.map