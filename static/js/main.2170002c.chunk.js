(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),s=n.n(c),a=(n(13),n(3)),o=n(0),i=function(e){var t=e.name,n=e.email,r=e.id;return Object(o.jsxs)("div",{className:"card tc gray dib br3 pa3 ma2 grow ba b--light-silver bw1 shadow-5",children:[Object(o.jsx)("img",{className:"bg-black ba b--light-silver bw1 shadow-1",alt:"robots",src:"https://robohash.org/".concat(r,'?200x200"')}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},l=function(e){e.searchfield;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 white bn bg-black shadow-5 o-70 glow",type:"search",placeholder:"Search Robots",onChange:t})})},b=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",height:"1000px"},children:e.children})},d=n(5),j=n(6),u=n(8),O=n(7),f=function(e){Object(u.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(j.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(r.Component),m=(n(15),function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(a.a)(s,2),d=i[0],j=i[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f-subheadline lh-title dib pa3 shadow-5",children:"Robot Friends"}),Object(o.jsx)(l,{searchChange:function(e){return j(e.target.value)}}),Object(o.jsxs)(b,{children:[Object(o.jsx)(f,{children:Object(o.jsx)(h,{robots:u})}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{className:"no-underline",href:"https://github.com/captain-rocket",children:"Websited Designed by Roger Brown"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{className:"no-underline pb4",href:"http://www.freepik.com",children:"Background Image Designed by Kotkoa \u2044 Freepik"})]})]}):Object(o.jsx)("h1",{children:"Loading"})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);s.a.render(Object(o.jsx)(m,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2170002c.chunk.js.map