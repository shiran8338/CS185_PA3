(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(9),r=c.n(a),s=(c(14),c(2)),l=c(3),o=c(5),d=c(4),j=(c(15),c(7),c(0)),b=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(s.a)(this,c),(e=t.call(this)).state={hovered:[{id:0,hover:!1},{id:1,hover:!1},{id:2,hover:!1},{id:3,hover:!1},{id:4,hover:!1},{id:5,hover:!1}]},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=function(t){return e.props.active_tab===t.id?{textDecoration:"underline"}:!0===e.state.hovered[t.id].hover?{textDecoration:"hover"}:{textDecoration:"none"}},c=function(t){e.props.changeTabs(t.id)};return Object(j.jsx)("div",{className:"navbar",children:this.props.tabs.map((function(i){return 1===i.id?Object(j.jsx)("h1",{onClick:c.bind(e,i),style:t(i),className:"navbar-entry entry1",children:i.title}):Object(j.jsx)("h1",{onClick:c.bind(e,i),style:t(i),className:"navbar-entry entry",children:i.title})}))})}}]),c}(i.Component),u=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{for:"firstname",children:"First name:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",id:"firstname",name:"firstname"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"lastname",children:"Last name:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",id:"lastname",name:"lastname"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{for:"travelplace",children:"The Next Place You Would Like to Travle"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",name:"travelplace",value:"island"}),Object(j.jsx)("label",{for:"travelplace",children:"Island"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",name:"travelplace",value:"forest"}),Object(j.jsx)("label",{for:"travelplace",children:"Forest"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",name:"travelplace",value:"home"}),Object(j.jsx)("label",{for:"travelplace",children:"Stay at Home"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Done"})]})})})}}]),c}(i.Component),m=c(6),h=c.p+"static/media/1.84739b4d.JPG",O=c.p+"static/media/2.69b1c490.JPG",p=c.p+"static/media/3.2f31c8a9.JPG",v=c.p+"static/media/4.1b4196c8.JPG",x=c.p+"static/media/5.b4c21a4f.jpg",f=c.p+"static/media/6.dd87a350.JPG",g=c.p+"static/media/7.04a76ecf.JPG";var y=function(){var e=Object(i.useState)(h),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(m.a)(a,2),s=r[0],l=r[1],o=Object(i.useState)(!1),d=Object(m.a)(o,2),b=d[0],u=d[1];function y(e){n(e),l(!0)}return window.onscroll=function(){return function(){var e=window.scrollY,t=document.body.offsetHeight,c=window.innerHeight;u(100*e/(t-c)>25)}()},Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"grid_container",children:[Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:h,alt:"",onClick:function(){return y(h)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:O,alt:"",onClick:function(){return y(O)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:p,alt:"",onClick:function(){return y(p)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:v,alt:"",onClick:function(){return y(v)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:x,alt:"",onClick:function(){return y(x)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:f,alt:"",onClick:function(){return y(f)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:p,alt:"",onClick:function(){return y(v)}})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:g,alt:"",onClick:function(){return y(g)}})})]}),Object(j.jsx)("div",{className:"modal",onClick:function(){l(!1)},style:{display:s?"block":"none"},children:Object(j.jsx)("img",{className:"modal_image",alt:"",src:c})}),Object(j.jsx)("button",{onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},id:"top_button",title:"To Top",style:{display:b?"block":"none"},children:"Top"})]})},w=c.p+"static/media/video1.53e89b5c.mp4",k=c.p+"static/media/video2.83a55567.mp4",_=c.p+"static/media/video3.3c85ab6c.mp4",C=c.p+"static/media/video4.ddcbbc55.mp4",N=c.p+"static/media/video5.4349ef5b.mp4";var T=function(){var e=Object(i.useState)(1),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(m.a)(a,2),s=r[0],l=r[1],o=Object(i.useState)(!1),d=Object(m.a)(o,2),b=d[0],u=d[1];function h(e){n(e),l(!0)}function O(){l(!1)}return window.onscroll=function(){return function(){var e=window.scrollY,t=document.body.offsetHeight,c=window.innerHeight;u(100*e/(t-c)>25)}()},Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"grid_container",children:[Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{src:w,alt:"",onClick:function(){return h(1)}})}),Object(j.jsx)("div",{className:"modal",alt:"",onClick:function(){return O()},style:{display:s&&1===c?"block":"none"},children:Object(j.jsx)("div",{className:"modal_video",children:Object(j.jsx)("iframe",{width:"100%",height:"700px",src:w,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{className:"video_thumbnail",alt:"",src:k,onClick:function(){return h(2)}})}),Object(j.jsx)("div",{className:"modal",alt:"",onClick:function(){return O()},style:{display:s&&2===c?"block":"none"},children:Object(j.jsx)("div",{className:"modal_video",children:Object(j.jsx)("iframe",{width:"100%",height:"700px",src:k,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{className:"video_thumbnail",alt:"",src:_,onClick:function(){return h(3)}})}),Object(j.jsx)("div",{className:"modal",alt:"",onClick:function(){return O()},style:{display:s&&3===c?"block":"none"},children:Object(j.jsx)("div",{className:"modal_video",children:Object(j.jsx)("iframe",{width:"100%",height:"700px",src:_,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{className:"video_thumbnail",alt:"",src:C,onClick:function(){return h(4)}})}),Object(j.jsx)("div",{className:"modal",alt:"",onClick:function(){return O()},style:{display:s&&4===c?"block":"none"},children:Object(j.jsx)("div",{className:"modal_video",children:Object(j.jsx)("iframe",{width:"100%",height:"700px",src:C,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})}),Object(j.jsx)("div",{className:"grid_item",children:Object(j.jsx)("img",{className:"video_thumbnail",alt:"",src:N,onClick:function(){return h(5)}})}),Object(j.jsx)("div",{className:"modal",alt:"",onClick:function(){return O()},style:{display:s&&5===c?"block":"none"},children:Object(j.jsx)("div",{className:"modal_video",children:Object(j.jsx)("iframe",{width:"100%",height:"700px",src:N,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})]}),Object(j.jsx)("button",{onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},id:"top_button",title:"To Top",style:{display:b?"block":"none"},children:"Top"})]})};var S=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),c=t[0],n=t[1];return window.onscroll=function(){return function(){var e=window.scrollY,t=document.body.offsetHeight,c=window.innerHeight;n(100*e/(t-c)>25)}()},Object(j.jsxs)("div",{children:[Object(j.jsx)("section",{id:"table",children:Object(j.jsxs)("table",{class:"border-solid",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Place"}),Object(j.jsx)("th",{children:"Details"}),Object(j.jsx)("th",{children:"Year"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"https://en.wikipedia.org/wiki/Zanzibar",class:"inblack",children:"Zanzibar Island, Tanzania"})}),Object(j.jsx)("td",{children:"The video was taken in a restaurant while we were having our brunch, and the cat passed by and stayed here."}),Object(j.jsx)("td",{children:"2018"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"https://en.wikipedia.org/wiki/Dodoma",class:"inblack",children:"Dodoma, Tanzania"})}),Object(j.jsx)("td",{children:"This was also in a restaurant, and this adorable pug was living with the couple who owned that restaurant."}),Object(j.jsx)("td",{children:"2018"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"https://en.wikipedia.org/wiki/Camarillo,_California",class:"inblack",children:"Camarillo, U.S."})}),Object(j.jsx)("td",{children:"It happened when my friend was driving, and I saw this view."}),Object(j.jsx)("td",{children:"2018"})]})]})}),Object(j.jsx)("button",{onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},id:"top_button",title:"To Top",style:{display:c?"block":"none"},children:"Top"})]})},E=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onSubmit=function(){var e=document.getElementById("email"),t=document.getElementById("result");console.log(e.value),(e.value.endsWith(".edu")||e.value.endsWith(".com")||e.value.endsWith(".EDU")||e.value.endsWith(".COM"))&&e.value.includes("@")?t.innerHTML="Email successfully recorded":t.innerHTML="Email is invalid"},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("label",{for:"fname",children:"Email Address:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",id:"email",name:"email"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return e.onSubmit()},id:"sub",children:"Submit"}),Object(j.jsx)("p",{id:"result"})]})})}}]),c}(i.Component),P=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return 1===e.props.active_tab?Object(j.jsx)(u,{}):2===e.props.active_tab?Object(j.jsx)(y,{}):3===e.props.active_tab?Object(j.jsx)(T,{}):4===e.props.active_tab?Object(j.jsx)(S,{}):5===e.props.active_tab?Object(j.jsx)(E,{}):void 0}}]),c}(i.Component),D=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(s.a)(this,c),(e=t.call(this)).changeTabs=function(t){e.setState({active_tab:t})},e.state={active_tab:1},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{tabs:[{id:1,title:"Text"},{id:2,title:"Image"},{id:3,title:"Video"},{id:4,title:"Table"},{id:5,title:"Email"}],active_tab:this.state.active_tab,changeTabs:this.changeTabs}),Object(j.jsx)(P,{active_tab:this.state.active_tab})]})}}]),c}(i.Component),H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),H()},7:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.5a85af4a.chunk.js.map