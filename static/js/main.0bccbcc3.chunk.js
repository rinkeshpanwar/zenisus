(this["webpackJsonpthamza-react"]=this["webpackJsonpthamza-react"]||[]).push([[0],{97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(24),i=a.n(n),l=a(9),r=a(10),o=a(12),j=a(13),d=a(7),m=a(100),b=a(101),h=a(102),u=a(103),O=a(104),x=a(105),p=a(106),v=a(107),g=a.p+"static/media/logo-dark.c9b55c81.png",f=a.p+"static/media/logo-light.7b7ee084.png",N=a(1),y=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).scrollSection=function(){var e;s.scrollTargetIds.forEach((function(t,a){e=document.getElementById(t).offsetTop-(s.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t)):(s.getNavLinkElement(t).classList.remove(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.remove(s.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&a===s.scrollTargetIds.length-1&&(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t))}))},s.props=e,s.scrollTargetIds=s.props.scrollTargetIds,s.activeNavClass=s.props.activeNavClass,s.scrollDuration=Number(s.props.scrollDuration)||1e3,s.headerBackground="true"===s.props.headerBackground,s.props.router&&"HashRouter"===s.props.router?(s.homeDefaultLink="#/",s.hashIdentifier="#/#"):(s.homeDefaultLink="/",s.hashIdentifier="#"),s.scrollSection.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"easeInOutQuad",value:function(e,t,a,s){return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,a){var s=this,c=t-e,n=0;!function t(){n+=10;var i=s.easeInOutQuad(n,e,c,a);window.scrollTo(0,i),n<a&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(a){a.preventDefault();var s=e.getNavToSectionID(t.getAttribute("href"));if(s){var c=document.getElementById(s).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,c,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(a,s){a!==e&&(t.getNavLinkElement(a).classList.remove(t.activeNavClass),t.getNavLinkElement(a).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return Object(N.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}]),a}(s.Component),k=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).toggle=function(){s.setState({isOpenMenu:!s.state.isOpenMenu})},s.state={isOpenMenu:!1},s.toggle=s.toggle.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.navItems.map((function(e){return e.idnm}));return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)(m.a,{expand:"lg",fixed:!0===this.props.top?"top":"",className:this.props.navClass+" navbar-custom sticky sticky-dark",id:"navbar",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(h.a,{className:"navbar-brand logo text-uppercase",href:"/",children:!0===this.props.imglight?Object(N.jsx)("img",{src:f,alt:"",height:"22"}):Object(N.jsx)("img",{src:g,alt:"",height:"22"})}),Object(N.jsx)(u.a,{onClick:this.toggle,children:Object(N.jsx)("i",{className:"mdi mdi-menu"})}),Object(N.jsxs)(O.a,{id:"navbarCollapse",isOpen:this.state.isOpenMenu,className:" navbar-collapse",children:[Object(N.jsx)(y,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"true",activeNavClass:"active",className:"navbar-collapse",children:Object(N.jsx)(x.a,{className:"navbar-nav ml-auto navbar-center",id:"navbar-navlist",children:this.props.navItems.map((function(e,t){return Object(N.jsx)(p.a,{className:"Home"===e.navheading?"active":"",children:Object(N.jsx)(v.a,{className:"Home"===e.navheading?"active":"",href:"#"+e.idnm,children:e.navheading})},t)}))})}),Object(N.jsx)("ul",{className:"navbar-nav navbar-center",children:Object(N.jsx)("li",{className:"nav-item d-inline-block d-lg-none",children:Object(N.jsx)("span",{to:"/SignUp",className:"nav-link",children:"Know More"})})}),Object(N.jsx)("div",{className:"navbar-button d-none d-lg-inline-block",children:Object(N.jsx)("span",{to:"/SignUp",className:"btn btn-sm btn-soft-primary btn-round",children:"Know More"})})]})]})})})}}]),a}(s.Component),w=a(28),A=a(15),C=a(25),I=a.n(C),S=a(108),D=a(109),E=a(110),M=a(120),T=a(111),B=a(112),z=a(113),R=a(114),Y=a(119),L=a(115),F=a(116),W=a(117),Q=a(29),G=a.n(Q),Z=a(53),U=a(34),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAAAVCAYAAAA5KB4cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2RkY1QjcxRDBDNjExRUE5ODJBQzQ0MkUzQTM0MkQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2RkY1QjcyRDBDNjExRUE5ODJBQzQ0MkUzQTM0MkQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDZGRjVCNkZEMEM2MTFFQTk4MkFDNDQyRTNBMzQyRDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDZGRjVCNzBEMEM2MTFFQTk4MkFDNDQyRTNBMzQyRDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DqrlvAAAGjElEQVR42uyay47kNBSG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",J=function(){var e=c.a.useState({isOpen:!1}),t=Object(A.a)(e,2),a=t[0],s=t[1],n=c.a.useState(!1),i=Object(A.a)(n,2),l=i[0],r=i[1],o=c.a.useState(null),j=Object(A.a)(o,2),d=j[0],m=j[1],h=c.a.useState(""),u=Object(A.a)(h,2),O=u[0],x=u[1],p=c.a.useState(!1),v=Object(A.a)(p,2),g=v[0],f=v[1],y=c.a.useState(null),k=Object(A.a)(y,2),C=k[0],Q=k[1],J=c.a.useState(""),P=Object(A.a)(J,2),X=P[0],q=P[1],V=c.a.useState(""),K=Object(A.a)(V,2),_=(K[0],K[1]),$=c.a.useRef(null),ee=c.a.useState(""),te=Object(A.a)(ee,2),ae=te[0],se=te[1],ce=c.a.useState(!1),ne=Object(A.a)(ce,2),ie=ne[0],le=ne[1];function re(){s({isOpen:!1})}function oe(){return(oe=Object(w.a)(I.a.mark((function e(){var t,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),e.prev=1,!1!==l){e.next=4;break}return e.abrupt("return");case 4:return(t=new FormData).append("contact",d),O.length>5&&t.append("message",O),null!==C&&t.append("image",C),e.next=10,G.a.post("https://dsackekbo34dfgs.ml/file",t,{headers:{"Content-Type":"multipart/form-data"}});case 10:a=e.sent,0==(s=a.data).err?(le(!0),se(s.data),Date.now(),setTimeout((function(){le(!1)}),6e4)):le(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),le(!1);case 18:return e.prev=18,f(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))).apply(this,arguments)}function je(){le(!ie)}return console.log("i re render",C),Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)("section",{className:"bg-home bg-light",id:"home",children:Object(N.jsx)("div",{className:"home-center",children:Object(N.jsxs)("div",{className:"home-desc-center",children:[Object(N.jsx)(b.a,{children:Object(N.jsxs)(S.a,{className:"align-items-center",children:[Object(N.jsx)(D.a,{lg:6,children:Object(N.jsxs)("div",{className:"home-content",children:[Object(N.jsx)("p",{className:"mb-0",children:"Automate Your Task"}),Object(N.jsx)("img",{src:H,height:"15",alt:""}),Object(N.jsxs)("h1",{className:"home-title mt-4",children:["Grow Your ",Object(N.jsx)("br",{})," Business with our hassle free, service."," "]}),Object(N.jsxs)("p",{className:"text-muted mt-4 f-20",children:[" ","With automate anywhere automation becomes convenient and time saving with just 3 step."]}),Object(N.jsx)("div",{className:"mt-4 pt-2",children:Object(N.jsx)("span",{to:"#",className:"btn btn-primary mr-3",onClick:function(){s({isOpen:!0})},children:"Tutorial"})})]})}),Object(N.jsx)(D.a,{lg:5,className:"offset-lg-1",children:Object(N.jsxs)("div",{className:"home-registration-form bg-white p-5 mt-4",children:[Object(N.jsx)("h5",{className:"form-title mb-4 text-center font-weight-bold",children:"Send your message in one click."}),Object(N.jsxs)("div",{className:"registration-form",children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(M.a,{style:{cursor:"pointer"},type:"file",id:"exampleCustomFileBrowser",name:"customFile",label:"Upload Excel Sheet",onChange:function(e){var t=e.target.files[0].type;if(["application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(t)){var a=new FileReader;a.onload=function(t){var a=t.target.result,s=U.a(a,{type:"binary"}),c=s.SheetNames[0],n=s.Sheets[c],i=U.b.sheet_to_json(n);i[0].hasOwnProperty("contact")?e.target.files[0].size<=5242880?i.length<=1e4&&i.length>=1?(r(!0),m(e.target.files[0]),q("")):q("File should have less than 10000 records"):q("File size must be less than 5 mb"):q("The file must contain 'contact' column")},a.readAsBinaryString(e.target.files[0])}else q("Please select a valid excel/csv file"),r(!1)},required:!0})}),Object(N.jsx)(E.a,{children:Object(N.jsxs)(S.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[null===C&&Object(N.jsx)(T.a,{className:"text-muted",children:"Image Upload"}),Object(N.jsxs)(D.a,{md:8,children:[Object(N.jsxs)("label",{for:"customImagePicker",style:{cursor:"pointer",border:"2.5px dotted #ccc",borderBlockColor:"#1b897e",borderRadius:"50%",maxWidth:"70px",minHeight:"70px",display:null!==C?"none":"flex",justifyContent:"center",alignItems:"center"},children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-camera-fill",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}),Object(N.jsx)("path",{d:"M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"})]}),Object(N.jsx)("input",{style:{cursor:"pointer",display:"none"},type:"file",ref:$,id:"customImagePicker",name:"imagePicker",label:"select image",accept:"image/*",onChange:function(e){e.target.files[0].size<=5242880?Q(e.target.files[0]):_("Image size must be less than 5 mb")}})]}),C&&Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(N.jsx)(T.a,{children:C.name}),Object(N.jsx)("span",{className:"btn btn-primary mr-3",onClick:function(){$.current.value=null,Q(null)},children:"Reset"})]})]})]})}),Object(N.jsx)(T.a,{className:"text-muted",children:"Message"}),Object(N.jsx)(B.a,{onChange:function(e){x(e.target.value)},type:"textarea",id:"exampleInputName2",className:"form-control mb-4 registration-input-box"}),X&&Object(N.jsx)("span",{className:"text-danger",children:X}),Object(N.jsx)(z.a,{disabled:!1===l||O.length<5===!0&&null===C||!0===g,onClick:function(){return oe.apply(this,arguments)},color:"primary",className:"btn btn-primary w-100",block:!0,children:!0===g?Object(N.jsx)(R.a,{}):"Start"})]})]})})]})}),Object(N.jsxs)(Y.a,{isOpen:a.isOpen,backdrop:!0,centered:!0,toggle:re,children:[Object(N.jsx)(L.a,{toggle:re,children:"Follow this step to start using our service"}),Object(N.jsxs)(F.a,{children:[Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"1. Create excel file and save all your whatsapp number under 'contact' column"})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:'2. Upload your excel file. Make sure your excel/csv file has column name "contact" without quotes'})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"3. Select image you want to send or you can send message only, else you can choose both."})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"4. Open your whatsapp"})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"5. Tap on Linked device"})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"6. Scan qr code from your smartphone "})})]}),Object(N.jsx)(W.a,{children:Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"That's it your message will be send to your contact soon and will be logout from our system shortly."})})})]}),Object(N.jsxs)(Y.a,{isOpen:ie,backdrop:!0,centered:!0,toggle:je,children:[Object(N.jsx)(L.a,{toggle:je,children:"Scan this qr code from your whatsapp to proceed"}),Object(N.jsx)(F.a,{children:Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(N.jsx)(Z.a,{value:ae})})}),Object(N.jsx)(W.a,{children:"If you find any difficulty in sending message you can always write to us."})]})]})})})})},P=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={services:[{id:"service1",icon:"mdi-google",title:"Data cleaning",description:"Is your data messed up?. Don't worry, we can clean it up for you."},{id:"service2",icon:"mdi-instagram",title:"Instagram Ads",description:"With our Instagram Ads services, you can get more followers and likes."},{id:"service3",icon:"mdi-youtube",title:"Youtube Ads",description:"We provide best Youtube Ads services for your business."}]},s}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)("section",{className:"section bg-services",id:"services",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(S.a,{children:Object(N.jsx)(D.a,{lg:"12",children:Object(N.jsxs)("div",{className:"title-box text-center",children:[Object(N.jsx)("h3",{className:"title-heading mt-4",children:"Provide Awesome Services "}),Object(N.jsxs)("p",{className:"text-muted f-17 mt-3",children:[" Have a look at our additional service we provide apart from automation ",Object(N.jsx)("br",{})," "]}),Object(N.jsx)("img",{src:H,height:"15",className:"mt-3",alt:""})]})})}),Object(N.jsx)(S.a,{className:"mt-5 pt-4",children:this.state.services.map((function(e,t){return Object(N.jsx)(D.a,{lg:4,children:Object(N.jsxs)("div",{className:"services-box p-4 mt-4",children:[Object(N.jsx)("div",{className:"services-icon bg-soft-primary",children:Object(N.jsx)("i",{className:"mdi text-primary "+e.icon})}),Object(N.jsx)("h5",{className:"mt-4",children:e.title}),Object(N.jsx)("p",{className:"text-muted mt-3",children:e.description})]})},t)}))})]})})})}}]),a}(s.Component),X=a(19),q=a(118),V=a.p+"static/media/img-3.dc2e6497.png",K=function(){var e=c.a.useState({fname:"",lname:"",email:"",message:""}),t=Object(A.a)(e,2),a=t[0],s=t[1],n=c.a.useState(""),i=Object(A.a)(n,2),l=i[0],r=i[1],o=c.a.useState(!1),j=Object(A.a)(o,2),d=j[0],m=j[1];function h(){return(h=Object(w.a)(I.a.mark((function e(t){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.prev=2,c=a,e.next=6,G.a.post("https://formspree.io/",c);case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("There was some error");case 12:return e.prev=12,m(!1),r("Message sent successfully"),s({fname:"",lname:"",email:"",message:""}),e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[2,9,12,17]])})))).apply(this,arguments)}return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)("section",{className:"section",id:"contact",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(S.a,{children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsxs)("div",{className:"title-box text-center",children:[Object(N.jsx)("h3",{className:"title-heading mt-4",children:"Let's talk about everything!"}),Object(N.jsxs)("p",{className:"text-muted f-17 mt-3",children:["Do you have a question in your head?",Object(N.jsx)("br",{})," Paste it in here we will surely look up for solution"]}),Object(N.jsx)("img",{src:H,height:"15",className:"mt-3",alt:""})]})})}),Object(N.jsxs)(S.a,{className:"mt-5 pt-4",children:[Object(N.jsx)(D.a,{lg:6,children:Object(N.jsxs)("div",{className:"mt-4 home-img text-center",children:[Object(N.jsx)("div",{className:"animation-2"}),Object(N.jsx)("div",{className:"animation-3"}),Object(N.jsx)("img",{src:V,className:"img-fluid",alt:""})]})}),Object(N.jsx)(D.a,{lg:6,children:Object(N.jsxs)("div",{className:"custom-form mt-4",children:[Object(N.jsx)("div",{id:"message"}),Object(N.jsxs)(q.a,{method:"post",name:"contact-form",id:"contact-form",onSubmit:function(e){return h.apply(this,arguments)},children:[Object(N.jsxs)(S.a,{children:[Object(N.jsx)(D.a,{lg:6,children:Object(N.jsxs)(E.a,{className:"mt-3",children:[Object(N.jsx)(T.a,{className:"contact-lable",children:"First Name"}),Object(N.jsx)(B.a,{name:"name",id:"name",className:"form-control",type:"text",onChange:function(e){var t=e.target.value;s((function(e){return Object(X.a)(Object(X.a)({},e),{},{fname:t})}))}})]})}),Object(N.jsx)(D.a,{lg:6,children:Object(N.jsxs)(E.a,{className:"mt-3",children:[Object(N.jsx)(T.a,{className:"contact-lable",children:"Last Name"}),Object(N.jsx)(B.a,{name:"name",id:"lastname",className:"form-control",type:"text",onChange:function(e){var t=e.target.value;s((function(e){return Object(X.a)(Object(X.a)({},e),{},{lname:t})}))}})]})})]}),Object(N.jsx)(S.a,{children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsxs)(E.a,{className:"mt-3",children:[Object(N.jsx)(T.a,{className:"contact-lable",children:"Email Address"}),Object(N.jsx)(B.a,{name:"email",id:"email",className:"form-control",type:"text",onChange:function(e){var t=e.target.value;s((function(e){return Object(X.a)(Object(X.a)({},e),{},{email:t})}))}})]})})}),Object(N.jsx)(S.a,{children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsxs)(E.a,{className:"mt-3",children:[Object(N.jsx)(T.a,{className:"contact-lable",children:"Your Message"}),Object(N.jsx)(B.a,{type:"textarea",name:"comments",id:"comments",rows:"5",className:"form-control",onChange:function(e){var t=e.target.value;s((function(e){return Object(X.a)(Object(X.a)({},e),{},{message:t})}))}})]})})}),Object(N.jsx)(S.a,{children:Object(N.jsxs)(D.a,{lg:12,className:"mt-3 text-right",children:[l?Object(N.jsx)("span",{className:"text-success",style:{marginRight:"10px"},children:l}):"",!0===d?Object(N.jsx)(R.a,{color:"primary"}):Object(N.jsx)(B.a,{id:"submit",name:"send",color:"primary",className:"submitBnt btn btn-primary btn-round",value:"Send Message",type:"submit",style:{width:"auto",color:"#fff"},disabled:0===a.fname.length||0===a.lname.length||0===a.email.length||0===a.message.length})," ",Object(N.jsx)("div",{id:"simple-msg"})]})})]})]})})]})]})})})},_=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"shivsun",value:function(){window.location.href="https://shivsun.tech"}},{key:"render",value:function(){return Object(N.jsx)(S.a,{children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsx)("div",{className:"text-center",children:Object(N.jsxs)("p",{className:"text-muted mb-0",children:[(new Date).getFullYear()," "," \xa9 Zenizus. Develop by ",Object(N.jsx)("span",{style:{cursor:"pointer"},onClick:this.shivsun,children:"Shivsun Technology"})]})})})})}}]),a}(s.Component),$=_,ee=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={links:[{id:1,title:"Services",child:[{title:"Web Design",link:"#"},{title:"Lorem Test",link:"#"},{title:"Credit",link:"#"},{title:"Ui Design",link:"#"}]},{id:2,title:"Company",child:[{title:"Features",link:"#"},{title:"Faq",link:"#"},{title:"Contact us",link:"#"}]}]},s}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)("footer",{className:"section bg-light bg-footer pb-5",children:Object(N.jsx)(b.a,{children:Object(N.jsx)($,{})})})})}}]),a}(s.Component),te=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).scrollNavigation=function(){document.documentElement.scrollTop>s.state.pos?s.setState({navClass:"nav-sticky",imglight:!1}):s.setState({navClass:"",imglight:!1})},s.state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:3,idnm:"services",navheading:"Services"},{id:7,idnm:"contact",navheading:"Contact"}],pos:document.documentElement.scrollTop,imglight:!1,navClass:"",fixTop:!0},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)(k,{navItems:this.state.navItems,navClass:this.state.navClass,imglight:this.state.imglight,top:this.state.fixTop}),Object(N.jsx)(J,{}),Object(N.jsx)(P,{}),Object(N.jsx)(K,{}),Object(N.jsx)(ee,{})]})}}]),a}(s.Component),ae=a(17),se=a.p+"static/media/img-4.3352f7f1.png",ce=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)("div",{className:"account-home-btn d-none d-sm-block",children:Object(N.jsx)(ae.b,{to:"/",className:"text-primary",children:Object(N.jsx)("i",{className:"mdi mdi-home h1"})})}),Object(N.jsx)("section",{className:"bg-account-pages vh-100",children:Object(N.jsx)("div",{className:"display-table",children:Object(N.jsx)("div",{className:"display-table-cell",children:Object(N.jsx)(b.a,{children:Object(N.jsx)(S.a,{className:"no-gutters align-items-center",children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsx)("div",{className:"login-box",children:Object(N.jsxs)(S.a,{className:"align-items-center no-gutters",children:[Object(N.jsx)(D.a,{lg:6,children:Object(N.jsx)("div",{className:"bg-light",children:Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsx)("div",{className:"col-lg-10",children:Object(N.jsxs)("div",{className:"home-img login-img text-center d-none d-lg-inline-block",children:[Object(N.jsx)("div",{className:"animation-2"}),Object(N.jsx)("div",{className:"animation-3"}),Object(N.jsx)("img",{src:se,className:"img-fluid",alt:""})]})})})})}),Object(N.jsx)(D.a,{lg:6,children:Object(N.jsx)(S.a,{className:"justify-content-center",children:Object(N.jsx)(D.a,{lg:11,children:Object(N.jsxs)("div",{className:"p-4",children:[Object(N.jsxs)("div",{className:"text-center mt-3",children:[Object(N.jsx)(ae.b,{to:"#",children:Object(N.jsx)("img",{src:g,alt:"",height:"22"})}),Object(N.jsx)("p",{className:"text-muted mt-3",children:"Sign up for a new Account"})]}),Object(N.jsx)("div",{className:"p-3 custom-form",children:Object(N.jsxs)(q.a,{children:[Object(N.jsxs)(E.a,{children:[Object(N.jsx)(T.a,{for:"firstname",children:"First Name"}),Object(N.jsx)(B.a,{type:"text",className:"form-control",id:"firstname",placeholder:"First Name"})]}),Object(N.jsxs)(E.a,{children:[Object(N.jsx)(T.a,{for:"email",children:"Email"}),Object(N.jsx)(B.a,{type:"password",className:"form-control",id:"email",placeholder:"Enter Email"})]}),Object(N.jsxs)(E.a,{children:[Object(N.jsx)(T.a,{for:"userpassword",children:"Password"}),Object(N.jsx)(B.a,{type:"password",className:"form-control",id:"userpassword",placeholder:"Enter password"})]}),Object(N.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(N.jsx)(B.a,{type:"checkbox",className:"custom-control-input",id:"customControlInline"}),Object(N.jsx)(T.a,{className:"custom-control-label",for:"customControlInline",children:"Remember me"})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)(z.a,{color:"primary",className:"btn btn-primary btn-block",block:!0,children:"Sign in"})}),Object(N.jsx)("div",{className:"mt-4 pt-1 mb-0 text-center",children:Object(N.jsxs)("p",{className:"mb-0",children:["Don't have an account ?",Object(N.jsx)(ae.b,{to:"/Login",className:"text-success",children:" Sign in"})]})})]})})]})})})})]})})})})})})})})]})}}]),a}(s.Component),ne=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)("div",{className:"account-home-btn d-none d-sm-block",children:Object(N.jsx)(ae.b,{to:"/",className:"text-primary",children:Object(N.jsx)("i",{className:"mdi mdi-home h1"})})}),Object(N.jsx)("section",{className:"bg-account-pages vh-100",children:Object(N.jsx)("div",{className:"display-table",children:Object(N.jsx)("div",{className:"display-table-cell",children:Object(N.jsx)(b.a,{children:Object(N.jsx)(S.a,{className:"no-gutters align-items-center",children:Object(N.jsx)(D.a,{lg:12,children:Object(N.jsx)("div",{className:"login-box",children:Object(N.jsxs)(S.a,{className:"align-items-center no-gutters",children:[Object(N.jsx)(D.a,{lg:6,children:Object(N.jsx)("div",{className:"bg-light",children:Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsx)("div",{className:"col-lg-10",children:Object(N.jsxs)("div",{className:"home-img login-img text-center d-none d-lg-inline-block",children:[Object(N.jsx)("div",{className:"animation-2"}),Object(N.jsx)("div",{className:"animation-3"}),Object(N.jsx)("img",{src:se,className:"img-fluid",alt:""})]})})})})}),Object(N.jsx)(D.a,{lg:6,children:Object(N.jsx)(S.a,{className:"justify-content-center",children:Object(N.jsx)(D.a,{lg:11,children:Object(N.jsxs)("div",{className:"p-4",children:[Object(N.jsxs)("div",{className:"text-center mt-3",children:[Object(N.jsx)(ae.b,{to:"#",children:Object(N.jsx)("img",{src:g,alt:"",height:"22"})}),Object(N.jsx)("p",{className:"text-muted mt-3",children:"Reset Password"})]}),Object(N.jsxs)("div",{className:"p-3 custom-form",children:[Object(N.jsx)("div",{className:"alert alert-success bg-soft-primary text-primary border-0 text-center",role:"alert",children:"Enter your email address and we'll send you an email with instructions to reset your password."}),Object(N.jsxs)(q.a,{children:[Object(N.jsxs)(E.a,{children:[Object(N.jsx)(T.a,{for:"email",children:"Email "}),Object(N.jsx)(B.a,{type:"email",className:"form-control",id:"email",placeholder:"Enter Email"})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)(z.a,{className:"btn btn-primary btn-block",children:"Reset your Password"})})]})]})]})})})})]})})})})})})})})]})}}]),a}(s.Component),ie=[{path:"/SignUp",component:ce},{path:"/ForgotPassword",component:ne},{path:"/",component:te}],le=a(11),re=(a(97),a(98),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)(ae.a,{children:Object(N.jsx)(le.c,{children:ie.map((function(e,t){return Object(N.jsx)(le.a,{path:e.path,component:e.component},t)}))})})})}}]),a}(s.Component)),oe=Object(le.f)(re);i.a.render(Object(N.jsx)(ae.a,{children:Object(N.jsx)(oe,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.0bccbcc3.chunk.js.map