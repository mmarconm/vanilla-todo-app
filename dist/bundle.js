!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const o=n(1);document.getElementById("set_todos").addEventListener("click",o.setTodos),function(){if(localStorage.todos){const e=document.getElementById("ul"),t=JSON.parse(localStorage.todos);for(const n of t){const l=document.createElement("li"),i=document.createElement("button"),d=document.createElement("input");l.className="list-item",l.textContent=n.title,l.addEventListener("dblclick",o.editTodo.bind(null,l,d,n,t)),d.id="input",d.className="input",d.style.display="none",d.addEventListener("blur",o.cancelTodo.bind(null,l,d)),d.addEventListener("keypress",o.updateTodo.bind(null,l,d,n,t)),d.value=n.title,i.textContent="Remover",i.className="button is-danger is-small is-pulled-right margin",i.addEventListener("click",o.deleteTodo.bind(null,n,t)),l.appendChild(i),e.appendChild(d),e.appendChild(l)}}}()},function(e,t){e.exports={updateTodo:function(e,t,n,o,l){if(13===l.keyCode){const e=n;e.title=t.value,o.splice(o.indexOf(n),1,e),localStorage.todos=JSON.stringify(o),location.reload()}},deleteTodo:function(e,t){t.splice(t.indexOf(e),1),localStorage.todos=JSON.stringify(t),location.reload()},editTodo:function(e,t,n,o){t.value=n.title,t.style.display="",e.style.display="none",n.title=t.value},cancelTodo:function(e,t){e.style.display="",t.style.display="none"},setTodos:function(){fetch("./data.json").then(e=>e.json()).then(e=>{localStorage.todos?localStorage.clear():(localStorage.todos=JSON.stringify(e),location.reload())}).catch(e=>{console.log(e)})}}}]);