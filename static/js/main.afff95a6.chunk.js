(this.webpackJsonpClickandMorty=this.webpackJsonpClickandMorty||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rick Sanchez","image":"RickSanchez.jpg","clicked":false},{"id":2,"name":"Doofus Rick","image":"DoofusRick.jpg","clicked":false},{"id":3,"name":"Tiny Rick","image":"TinyRick.png","clicked":false},{"id":4,"name":"Pickle Rick","image":"PickleRick.png","clicked":false},{"id":5,"name":"Toxic Rick","image":"ToxicRick.jpg","clicked":false},{"id":6,"name":"Evil Rick","image":"EvilRick.jpg","clicked":false},{"id":7,"name":"Quantum Rick","image":"QuantumRick.png","clicked":false},{"id":8,"name":"Cop Rick","image":"CopRick.jpg","clicked":false},{"id":9,"name":"Rick D. Sanchez III","image":"RickDSanchez.png","clicked":false}]')},,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),i=a.n(r),o=(a(23),a(9)),s=a(10),l=a(11),m=a(14),u=a(12),d=a(15),k=a(32),p=a(31);a(24);var f=function(e){return e.message,e.score,e.topScore,n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement(k.a,null,n.a.createElement(p.a,{appear:!0,timeout:4e3,classNames:"title"},n.a.createElement("div",null,n.a.createElement("img",{id:"logo",src:"/logo.png",alt:"Logo"}))))))};a(27);var g=function(){return n.a.createElement("div",{className:"content"})};a(28);var h=function(e){return n.a.createElement("div",{className:"card",style:{backgroundImage:"url("+e.image+")"},onClick:function(){e.clickHandler(e.id)}})},v=(a(29),a(13));function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}var O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={ricks:v,tracker:!0,score:0,topScore:0,maxScore:9,message:""},a.clickHandler=function(e){var t=a.state.ricks.map((function(t){return t.id!==e||t.clicked?(t.id,t):(a.handleCorrect(),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{clicked:!0}))}));a.setState({ricks:t})},a.handleCorrect=function(){a.setState({tracker:!0}),a.state.score+1>a.state.topScore&&a.setState({topScore:a.state.score+1}),a.state.score+1>=a.state.maxScore?a.setState({score:a.state.score+1,message:"Congrats, you clicked all the Ricks!"}):a.setState({score:a.state.score+1,message:"Correct!"})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(g,null),n.a.createElement("div",{className:"state"},"Score: ",this.state.score," || Top Score: ",this.state.topScore),n.a.createElement(k.a,null,n.a.createElement(p.a,{appear:!0,timeout:7e3,classNames:"container"},n.a.createElement("div",{className:"card-container"},this.state.ricks.map((function(t){return n.a.createElement(h,Object.assign({key:t.id},t,{clickHandler:e.clickHandler}))}))))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.afff95a6.chunk.js.map