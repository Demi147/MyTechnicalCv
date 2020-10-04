(this["webpackJsonpmy-technical-cv"]=this["webpackJsonpmy-technical-cv"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/Me.ecc59dfc.jpg"},14:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=a(2),i=a(3),m=a(5),u=a(4),s=a(12),p=a.n(s),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"about",className:"flexbox-item flexbox-column"},l.a.createElement("div",{className:"aboutMe"},l.a.createElement("div",null,l.a.createElement("img",{src:p.a,alt:"A long drive"})),l.a.createElement("div",{className:"aboutText"},l.a.createElement("h3",null,"About me"),l.a.createElement("p",null,"I'm an indie game developer that dabbles mainly in AI and backend systems for games."),l.a.createElement("p",null,"I also dabble in c# frameworks like blazor and MVC for personal projects. I like learning new technologies and how to practically apply them in real life. I would like to become a software engineer, creating big complex programs that make life easy."),l.a.createElement("p",null,"One day I would like to add robotics to my hobbies just like I'm making games now."),l.a.createElement("h4",null,"Strengths"),l.a.createElement("ul",null,l.a.createElement("li",null,"Can learn technologies and frameworks easily."),l.a.createElement("li",null,"Can solve complex problems, if I have the necessary knowledge."),l.a.createElement("li",null,"I can plan when developing a program, figuring out a plan of action, and executing that plan dynamically, changing the plan as necessary.")),l.a.createElement("h4",null,"Weaknesses"),l.a.createElement("ul",null,l.a.createElement("li",null,"Gives up easily."),l.a.createElement("li",null,"Procrastinates a lot.")))))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Technical skills"),l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"expertSkills"},l.a.createElement("h4",null,"Things i work with every day. (Primary skills)"),l.a.createElement("ul",null,l.a.createElement("li",null,"Unity",l.a.createElement("ul",null,"I made more than a few prototypes.",l.a.createElement("li",null,"A racing game"),l.a.createElement("li",null,"A small horror game"),l.a.createElement("li",null,"A 2D mobile zombie shooter"),l.a.createElement("li",null,"Im especially focused advanced statemachine AI."))),l.a.createElement("li",null,"C#",l.a.createElement("ul",null,l.a.createElement("li",null,"Xamirin"),l.a.createElement("li",null,"Blazor"),l.a.createElement("li",null,"MVC"))))),l.a.createElement("div",{className:"rookieSkills"},l.a.createElement("h4",null,"Things i have surface level knowladge of."),l.a.createElement("ul",null,l.a.createElement("li",null,"Blender"),l.a.createElement("li",null,"Python",l.a.createElement("ul",null,l.a.createElement("li",null,"Basic machine learning in TensorFlow"))),l.a.createElement("li",null,"Html"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"C# backend tools",l.a.createElement("ul",null,l.a.createElement("li",null,"Dapper"))),l.a.createElement("li",null,"Java script"),l.a.createElement("li",null,"React")))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container flexbox-container flexbox-column centre-bar"},l.a.createElement(h,null),l.a.createElement(E,null))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#news"},"News")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About"))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"loader"})}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.state={item:e,isLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.item.link;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.appnews.newsitems[0],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.item;if(t){var n=this.state.data;return l.a.createElement("div",null,l.a.createElement("a",{href:n.url},a.appName," : ",n.title))}return l.a.createElement(f,null)}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=[["Warframe","https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=230410&count=1&maxlength=300&format=json"],["World Of Warships","https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=552990&count=1&maxlength=300&format=json"],["Rainbow 6 Seige","https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=359550&count=1&maxlength=300&format=json"]],a=[];for(e=0;e<t.length;e++)a.push(l.a.createElement(v,{key:t[e][0],appName:t[e][0],link:t[e][1]}));return l.a.createElement("div",{id:"news",className:"News flexbox-container flexbox-column"},l.a.createElement("h3",null,"News"),a)}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/search/repositories?q=user:Demi147&sort=updated").then((function(e){return e.json()})).then((function(t){t.items.length=4,e.setState({data:t.items,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.data;return e.isLoaded?l.a.createElement("div",{className:"News flexbox-container flexbox-column"},l.a.createElement("h3",null,"Github links"),t.map((function(e){return l.a.createElement("a",{key:e.id,href:e.html_url},e.name)}))):l.a.createElement(f,null)}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"News flexbox-container flexbox-column"},l.a.createElement("h3",null,"Some cool links"),l.a.createElement("a",{href:"https://demi147.github.io/PlatformerForMyWebsites/"},"A WebGL game i made"),l.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.DemiGodProductions.ShootTheZombies"},"My android game project (Beta)"),l.a.createElement("a",{href:"https://dimensiondatacollab.azurewebsites.net/"},"Dimention Data Colab Site"))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cat-fact.herokuapp.com/facts/random").then((function(e){return e.json()})).then((function(t){e.setState({data:t.text,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.data;return t?l.a.createElement("div",{className:"News flexbox-container flexbox-column"},l.a.createElement("h3",null,"Random cat fact"),l.a.createElement("p",null,a)):l.a.createElement(f,null)}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container flexbox-container flexbox-column side-bar"},l.a.createElement(y,null),l.a.createElement("hr",null),l.a.createElement(j,null),l.a.createElement("hr",null),l.a.createElement(x,null),l.a.createElement("hr",null),l.a.createElement(g,null))}}]),a}(n.Component),O=a(7),w=a(6),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"social container flexbox-container flexbox-column"},l.a.createElement("h3",null,"Social"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.facebook.com/carel.haasbroek.5"},l.a.createElement(O.a,{icon:w.a,size:"lg"}),l.a.createElement("span",null," Facebook")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/demi147"},l.a.createElement(O.a,{icon:w.b,size:"lg"}),l.a.createElement("span",null," GitHub")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.instagram.com/carel_haasbroek/"},l.a.createElement(O.a,{icon:w.c,size:"lg"}),l.a.createElement("span",null," Instagram")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCt2VF2PFve1cfD1UgrJ9oyQ"},l.a.createElement(O.a,{icon:w.d,size:"lg"}),l.a.createElement("span",null," Youtube")))}}]),a}(n.Component),C=a(13),S=a.n(C);function I(){return l.a.createElement("div",{id:"contact",className:"contact container flexbox-container flexbox-column"},l.a.createElement("h3",null,"Contact Me"),l.a.createElement("br",null),l.a.createElement("form",{className:"contact-form flexbox-container flexbox-column",onSubmit:function(e){e.preventDefault(),S.a.sendForm("service_fbufa5y","template_iqg563y",e.target,"user_pT2qtagWA5OGDzxoBkYzS").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{placeholder:"Your Name",type:"text",name:"name"}),l.a.createElement("label",null,"Subject"),l.a.createElement("input",{placeholder:"Subject",type:"text",name:"subject"}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{placeholder:"Your Email",type:"email",name:"email"}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{placeholder:"Your Message",name:"message"}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Send"})))}var M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"BottomBar"},l.a.createElement(N,null),l.a.createElement(I,null))}}]),a}(n.Component);a(26);var A=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"main"},l.a.createElement(k,null),l.a.createElement(b,null)),l.a.createElement(M,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.903fe065.chunk.js.map