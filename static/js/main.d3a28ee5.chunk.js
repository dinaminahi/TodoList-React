(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(1),o=a.n(c),s=a(16),d=a.n(s),r=(a(74),a(75),a(53)),i=a(54),l=a(60),u=a(59),h=(a(76),a(77),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),b=function(){var e=new Date,t=h[e.getDay()],a=e.toDateString().slice(4);return Object(n.jsxs)("div",{className:"current-date",children:[Object(n.jsx)("h1",{className:"primary-data",children:t}),Object(n.jsx)("p",{className:"secondary-data",children:a})]})},j=(a(78),a(7)),f=a(129),p=Object(j.a)({root:{"& input:valid + fieldset":{borderColor:"#525252",borderWidth:1},"& input:valid:hover + fieldset":{borderColor:"#525252",borderWidth:1},"& label":{color:"#525252"}}})(f.a);var v=function(e){var t=e.handleEnter,a=e.value,c=e.handleValue;return Object(n.jsx)("div",{className:"AddNewTask",children:Object(n.jsx)(p,{color:"secondary",value:a,onChange:c,onKeyPress:t,id:"outlined-basic",label:"Add a task...",variant:"outlined"})})},k=a(61),x=(a(84),a(128)),O=a(131),m=a(130),y=a(56),g=a.n(y),T=Object(j.a)({root:{color:x.a[400],"&$checked":{color:x.a[500]}},checked:{}})((function(e){return Object(n.jsx)(m.a,Object(k.a)({color:"default"},e))}));var C=function(e){var t=e.task,a=e.onDelete,c=e.checkTheBox,o=Object(n.jsx)("p",{className:"task-text ".concat(t.done?"completed":""),children:t.text});return Object(n.jsxs)("div",{className:"Task",children:[Object(n.jsx)(O.a,{control:Object(n.jsx)(T,{checked:t.done,onChange:function(e){c(e,t.id)},name:"checkedC"}),label:o}),Object(n.jsx)("div",{className:"deleteIcon",onClick:function(){a(t)},children:Object(n.jsx)(g.a,{style:{marginLeft:10},color:"secondary"})})]})},S=a(57),L=a.n(S),I=a(41),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={tasks:[],todoListInputValue:""},e.addNewTaskToList=function(t){if("Enter"===t.key){var a=I.a.database().ref("tasks"),n={id:L()(),text:t.target.value,done:!1};a.push(n),e.setState({todoListInputValue:""})}},e.handleValueChange=function(t){e.setState({todoListInputValue:t.target.value})},e.handleDelete=function(e){I.a.database().ref("/tasks/".concat(e.id)).remove()},e.checkTheBox=function(e,t){I.a.database().ref("/tasks").child(t).update({done:e.target.checked})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.a.database().ref("tasks").on("value",(function(t){var a=t.val(),n=[];for(var c in a)n.push({id:c,text:a[c].text,done:a[c].done});e.setState({tasks:n})}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"TodoList",children:[Object(n.jsx)(b,{}),Object(n.jsx)(v,{handleEnter:this.addNewTaskToList,handleValue:this.handleValueChange,value:this.state.todoListInputValue}),Object(n.jsx)("div",{children:this.state.tasks.map((function(t){return Object(n.jsx)(C,{task:t,onDelete:e.handleDelete,checkTheBox:e.checkTheBox},t.id)}))})]})}}]),a}(c.Component);var D=function(){return Object(n.jsx)(N,{})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};a(58).a.initializeApp({apiKey:"AIzaSyAzbP_fCnQqYm5ySd5Sk1Ec71mnrSncjLU",authDomain:"todolist-8947f.firebaseapp.com",databaseURL:"https://todolist-8947f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"todolist-8947f",storageBucket:"todolist-8947f.appspot.com",messagingSenderId:"658656224852",appId:"1:658656224852:web:48d2b27adb75637b46efc1"}),d.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),w()}},[[92,1,2]]]);
//# sourceMappingURL=main.d3a28ee5.chunk.js.map