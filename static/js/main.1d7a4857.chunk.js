(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{110:function(e,t,s){e.exports={status:"ProfileInfo_status__31wvJ"}},111:function(e,t,s){e.exports={item:"Post_item__2KsXO"}},118:function(e,t,s){},125:function(e,t,s){},19:function(e,t,s){e.exports={nav:"Navbar_nav__hqimj",item:"Navbar_item__1rYmE",activeClassLink:"Navbar_activeClassLink__1kCFK"}},22:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},241:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a);s(118),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=s(51),c=s.n(r),o=s(10),u=(s(125),s(19)),l=s.n(u),d=s(12),j=function(){return Object(n.jsxs)("nav",{className:l.a.nav,children:[Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)(d.b,{to:"/profile",activeClassName:l.a.activeClassLink,children:"Profile"})}),Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)(d.b,{to:"/dialogs",activeClassName:l.a.activeClassLink,children:"Messages"})}),Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)(d.b,{to:"/users",activeClassName:l.a.activeClassLink,children:"Users"})}),Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)("a",{children:"News"})}),Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)("a",{children:"Music"})}),Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsx)("a",{children:"Settings"})})]})},g=s(9),b=s(36),h=s(4),p=s(244),O={dialogs:[{id:Object(p.a)(),name:"Nastya"},{id:Object(p.a)(),name:"Vlad"},{id:Object(p.a)(),name:"Vika"},{id:Object(p.a)(),name:"Andrey"},{id:Object(p.a)(),name:"Vasia"}],messagesForMessages:"",messages:[{id:Object(p.a)(),message:"hi how is your programmnig"},{id:Object(p.a)(),message:'hi, its ok"'},{id:Object(p.a)(),message:"Good"},{id:Object(p.a)(),message:"ok"},{id:Object(p.a)(),message:"yo"}]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var s=e.messagesForMessages;return Object(h.a)(Object(h.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[{id:Object(p.a)(),message:s}]),messagesForMessages:""});case"UPDATE-NEW-MESSAGE-TEXT":return Object(h.a)(Object(h.a)({},e),{},{messagesForMessages:t.newText});default:return e}},m=s(22),x=s.n(m),v=function(e){return Object(n.jsx)("div",{className:x.a.dialog+" "+x.a.active,children:Object(n.jsx)(d.b,{to:"dialogs/"+e.id,children:e.name})})},P=function(e){return Object(n.jsx)("div",{className:x.a.dialog,children:e.message})},S=function(e){var t=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(P,{message:e.message},e.id)})),s=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(v,{id:e.id,name:e.name},e.id)}));return Object(n.jsxs)("div",{className:x.a.dialogs,children:[Object(n.jsx)("div",{className:x.a.dialogsItems,children:s}),Object(n.jsxs)("div",{className:x.a.messages,children:[Object(n.jsxs)("div",{children:[" ",t]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("textarea",{placeholder:"Enter your message",onChange:function(t){var s=t.currentTarget.value;e.changeHandler(s)},value:e.dialogsPage.messagesForMessages})]}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("button",{onClick:function(){e.addMessage()},children:"add message"})," "]})]})]})]})},T=function(e){return{isAuth:e.auth.isAuth}},k=function(e){return Object(o.b)(T)((function(t){return t.isAuth?Object(n.jsx)(e,Object(h.a)({},t)):Object(n.jsx)(g.a,{to:"/login"})}))},w=s(8),_=Object(w.d)(Object(o.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},changeHandler:function(t){e({type:"UPDATE-NEW-MESSAGE-TEXT",newText:t})}}})),k)(S),E=s(24),C=s(25),y=s(28),N=s(27),A=s(109),F=s.n(A).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7866738e-c5bf-440e-864d-4cc467150876"}}),U=function(e,t){return F.get("users?page=".concat(e,"&count=").concat(t))},I=function(e){return F.delete("follow/".concat(e))},D=function(e){return F.post("follow/".concat(e))},L=function(e){return console.warn("Obsolete method"),M.getProfile(e)},M={getProfile:function(e){return F.get("profile/"+e)},getStatus:function(e){return F.get("profile/status/"+e)},updateStatus:function(e){return F.put("profile/status",{status:e})}},R=function(){return F.get("auth/me")},G={users:[],pageSize:10,totalCount:100,currentPage:1,isFetching:!1,folowingInProgress:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case"SETUSERS":return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalCount:t.totalCount});case"TOGL-IDFETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"TOGL-IS-FOLLOWING-PROGRESS":return Object(h.a)(Object(h.a)({},e),{},{folowingInProgress:t.isFetching?[].concat(Object(b.a)(e.folowingInProgress),[t.userId]):e.folowingInProgress.filter((function(e){return e!=t.userId}))})}return e},B=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},z=function(e){return{type:"TOGL-IDFETCHING",isFetching:e}},H=function(e,t){return{type:"TOGL-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},X=s(73),K=s.n(X),Y=s.p+"static/media/user.ab6315c9.png";var J=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:s.map((function(t){return Object(n.jsx)("span",{className:e.currentPage===t?K.a.selectedPage:"",onClick:function(s){e.onPageChanged(t)},children:t},t)}))}),e.users.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(d.b,{to:"/profile/"+t.id,children:Object(n.jsx)("img",{alt:"photo",src:null!==t.photos.small?t.photos.small:Y,className:K.a.usersPhoto})}),Object(n.jsx)("div",{children:t.followed?Object(n.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.unFolluwThunk(t.id)},children:"unfollow"}):Object(n.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.FolluwThunk(t.id)},children:"follow"})})]})}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:t.status})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"u.location.contry"}),Object(n.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},Q=s.p+"static/media/loader.a1a99674.gif",V=function(){return Object(n.jsx)("img",{src:Q,alt:""})},q=function(e){Object(y.a)(s,e);var t=Object(N.a)(s);function s(){var e;Object(E.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsersThunk(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(C.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(V,{}):null,Object(n.jsx)(J,{folowingInProgres:this.props.folowingInProgress,unFolluwThunk:this.props.unFolluwThunk,FolluwThunk:this.props.FolluwThunk,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,setTotalUsersCount:this.props.setTotalUsersCount,onPageChanged:this.onPageChanged,users:this.props.users})]})}}]),s}(i.a.Component),$=Object(w.d)(k,Object(o.b)((function(e){return{users:e.usersPeges.users,pageSize:e.usersPeges.pageSize,totalCount:e.usersPeges.totalCount,currentPage:e.usersPeges.currentPage,isFetching:e.usersPeges.isFetching,folowingInProgress:e.usersPeges.folowingInProgress}}),{setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},setTotalUsersCount:B,toglIsFetching:z,getUsersThunk:function(e,t){return function(s){s(z(!0)),U(e,t).then((function(e){s(z(!1)),s({type:"SETUSERS",users:e.data.items}),s(B(e.data.totalCount))}))}},unFolluwThunk:function(e){return function(t){t(H(!0,e)),I(+e).then((function(s){0===s.data.resultCode&&t({type:"UN-FOLLOW",userid:e}),t(H(!1,e))}))}},FolluwThunk:function(e){return function(t){t(H(!0,e)),D(+e).then((function(s){0===s.data.resultCode&&t({type:"FOLLOW",userid:e}),t(H(!1,e))}))}}}))(q),Z=s(110),ee=s.n(Z),te=function(e){Object(y.a)(s,e);var t=Object(N.a)(s);function s(){var e;Object(E.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(C.a)(s,[{key:"deactivateEditMode",value:function(){this.setState({editMode:!1}),this.props.updateStatus(this.state.status)}},{key:"componentDidUpdate",value:function(e,t,s){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[!this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"-------"})}),this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode.bind(this),value:this.state.status})})]})}}]),s}(i.a.Component),se=function(e){return e.profile?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{}),Object(n.jsxs)("div",{className:ee.a.discriptionBlock,children:["ava + discriphon",Object(n.jsx)("div",{children:e.profile.fullName}),Object(n.jsx)("img",{src:e.profile.photos.large}),Object(n.jsx)(te,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(n.jsx)(V,{})},ne=s(74),ae=s.n(ne),ie=s(111),re=s.n(ie),ce=function(e){return Object(n.jsxs)("div",{className:re.a.item,children:[Object(n.jsx)("img",{alt:"post",src:"https://vignette.wikia.nocookie.net/castle-rock/images/9/9d/Stephen_King._Art_by_CoalRye.jpg/revision/latest?cb=20180716011208&path-prefix=ru"}),e.message,Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:[e.likekounts," like"]})})]})},oe=function(e){var t=e.posts.map((function(e){return Object(n.jsx)(ce,{message:e.message,likekounts:e.likekounts,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:ae.a.postsBlock,children:[Object(n.jsx)("h3",{children:"My posts"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.changeHandler(s)},value:e.messageForNewPost})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(n.jsx)("div",{className:ae.a.posts,children:t})]})},ue={profile:null,messageForNewPost:"",status:"",posts:[{id:Object(p.a)(),message:"Hi, how are you*?",likekounts:12},{id:Object(p.a)(),message:"its my first post",likekounts:33},{id:Object(p.a)(),message:"go in iron",likekounts:333},{id:Object(p.a)(),message:"its my life",likekounts:333}]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s=e.messageForNewPost,n={id:Object(p.a)(),likekounts:0,message:s};return Object(h.a)(Object(h.a)({},e),{},{posts:[].concat(Object(b.a)(e.posts),[n]),messageForNewPost:""});case"UPDATE-NEW-POST-TEXT":return Object(h.a)(Object(h.a)({},e),{},{messageForNewPost:t.newText});case"SET_USER_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:t.profile});case"SET_STATUS":case"UPDATE_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.status});default:return e}},de=Object(o.b)((function(e){return{messageForNewPost:e.profilePage.messageForNewPost,posts:e.profilePage.posts}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},changeHandler:function(t){e({type:"UPDATE-NEW-POST-TEXT",newText:t})}}}))(oe),je=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(se,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(n.jsx)(de,{})]})},ge=function(e){Object(y.a)(s,e);var t=Object(N.a)(s);function s(){return Object(E.a)(this,s),t.apply(this,arguments)}return Object(C.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="13055"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(je,Object(h.a)(Object(h.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),s}(i.a.Component),be=Object(w.d)(Object(o.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){L(+e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){M.getStatus(+e).then((function(e){t({type:"SET_STATUS",status:e.data})}))}},updateStatus:function(e){return function(t){M.updateStatus(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:"UPDATE_STATUS",status:e}}(e))}))}}}),k,g.f)(ge),he=s(75),pe=s.n(he),Oe=function(e){return Object(n.jsxs)("header",{className:pe.a.header,children:[Object(n.jsx)("img",{alt:"header",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),Object(n.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?e.login:Object(n.jsx)(d.b,{to:"/login",children:"Login"})})]})},fe={id:null,email:null,login:null,isAuth:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.data),{},{isAuth:!0})}return e},xe=function(e){Object(y.a)(s,e);var t=Object(N.a)(s);function s(){return Object(E.a)(this,s),t.apply(this,arguments)}return Object(C.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(n.jsx)(Oe,Object(h.a)({},this.props))}}]),s}(i.a.Component),ve=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){R().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,i=s.login;e(function(e,t,s){return{type:"SET-USER-DATA",data:{id:e,email:t,login:s}}}(n,a,i))}}))}}})(xe),Pe=s(243),Se=s(242),Te=Object(Se.a)({form:"login"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(Pe.a,{placeholder:"Login",name:"login",component:"input"})}),Object(n.jsx)("div",{children:Object(n.jsx)(Pe.a,{placeholder:"password",name:"password",component:"input"})}),Object(n.jsx)("div",{children:Object(n.jsx)(Pe.a,{type:"checkbox",name:"rememberMe",component:"input"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Login"})})]})}));var ke=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:"Login"}),Object(n.jsx)(Te,{onSubmit:function(e){console.log(e)}})]})};var we=function(){return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(ve,{}),Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(be,{})}}),Object(n.jsx)(g.b,{path:"/dialogs",render:function(){return Object(n.jsx)(_,{})}}),Object(n.jsx)(g.b,{path:"/users",render:function(){return Object(n.jsx)($,{})}}),Object(n.jsx)(g.b,{path:"/login",render:function(){return Object(n.jsx)(ke,{})}})]})]})},_e=s(245),Ee=s(113),Ce=Object(w.c)({dialogsPage:f,profilePage:le,usersPeges:W,auth:me,form:_e.a}),ye=Object(w.e)(Ce,Object(w.a)(Ee.a));c.a.render(Object(n.jsxs)(d.a,{children:[Object(n.jsx)(o.a,{store:ye,children:Object(n.jsx)(we,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,s){e.exports={usersPhoto:"Users_usersPhoto__1Yu6Q",selectedPage:"Users_selectedPage__3sYe4"}},74:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__1aryQ",posts:"MyPosts_posts__1q9rU"}},75:function(e,t,s){e.exports={header:"Header_header__1MOL-",loginBlock:"Header_loginBlock__1z7oD"}}},[[241,1,2]]]);
//# sourceMappingURL=main.1d7a4857.chunk.js.map