(this["webpackJsonpmy-app-r"]=this["webpackJsonpmy-app-r"]||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(6),o=n.n(a),u=(n(19),n(20),n(12),n(1)),s=n(4),i=Object(s.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),l=i.actions,m=(l.increment,l.decrement,l.incrementByAmount,i.reducer);n(3);var w=Object(s.b)({name:"statistics",initialState:{totalQuestions:0,correctAnswers:0,correctInARow:0},reducers:{recordAnswer:function(e,t){e.totalQuestions+=1,console.log(t),t.payload?(e.correctAnswers+=1,e.correctInARow+=1):e.correctInARow=0}}}),b=w.actions.recordAnswer,v=function(e){return e.statistics.totalQuestions},p=function(e){return e.statistics.correctAnswers},_=function(e){return e.statistics.correctInARow},f=w.reducer;function d(){var e=Object(u.c)(v),t=Object(u.c)(p),n=Object(u.c)(_);return c.a.createElement("div",null,c.a.createElement("p",null,"Questions: ",e,"; Correct: ",t),n>0&&c.a.createElement("p",null,"Correct in a row: ",n),0===n&&c.a.createElement("p",null,"\xa0"))}var A=n(13),E=Object(s.b)({name:"question",initialState:{showAnswer:!1,question:"2 x 2 = ?",correctAnswer:4,userAnswer:0},reducers:{askQuestion:function(e,t){var n=t.payload,r=n.question,c=n.correctAnswer;e.question=r,e.correctAnswer=c,e.showAnswer=!1,e.userAnswer=!1},submitAnswer:function(e,t){var n=t.payload.userAnswer;e.showAnswer=!0,e.userAnswer=n}}}),h=E.actions,x=h.askQuestion,j=h.submitAnswer,q=function(e){return e.question.question},O=function(e){return e.question.correctAnswer},y=function(e){return e.question.showAnswer},C=function(e){return e.question.userAnswer},Q=E.reducer,g=n(27),M=function(e){return Math.floor(Math.random()*Math.floor(e))},N=function(){return Math.random()>.7?function(){var e=M(100)/Math.pow(10,M(2)+1),t=M(100)/Math.pow(10,M(2)+1),n=new g(e),r=new g(t),c=n.mul(r);return{question:"".concat(e," x ").concat(t," = ?"),correctAnswer:"".concat(c)}}():function(){for(;;){var e=M(100)/Math.pow(10,M(2)+1),t=M(100)/Math.pow(10,M(2)+1),n=new g(e),r=new g(t),c=n.div(r);if("".concat(c).length<6)return{question:"".concat(e," : ").concat(t," = ?"),correctAnswer:"".concat(c)}}}()},S=n(5),B=n.n(S);function I(){var e=Object(u.c)(q),t=Object(u.c)(O),n=Object(u.c)(y),a=Object(u.c)(C),o="".concat(t)==="".concat(a),s=Object(u.b)(),i=Object(r.useState)(""),l=Object(A.a)(i,2),m=l[0],w=l[1];return c.a.createElement("div",{className:B.a.value},c.a.createElement("div",null,c.a.createElement("p",null,e)),c.a.createElement("div",null,!n&&c.a.createElement("p",{className:B.a.valuecorrect},"\xa0"),n&&o&&c.a.createElement("p",{className:B.a.valuecorrect},a," is correct!"),n&&!o&&c.a.createElement("p",{className:B.a.valuewrong},"Answer: ",t)),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n){var r=N();s(x(r)),w("")}else{var c=m;s(b("".concat(t)==="".concat(c))),s(j({userAnswer:c}))}}},c.a.createElement("input",{className:B.a.textbox,value:m,onChange:function(e){return w(e.target.value)}}),!n&&c.a.createElement("div",null,c.a.createElement("button",{type:"submit",className:B.a.button},"Submit answer")),n&&c.a.createElement("div",null,c.a.createElement("button",{type:"submit",className:B.a.button},"Next question"))))}n(28);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(I,null),c.a.createElement(d,null)))},R=Object(s.a)({reducer:{counter:m,statistics:f,question:Q}}),D=N();R.dispatch(x(D)),o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:R},c.a.createElement(k,null))),document.getElementById("root"))},3:function(e,t,n){e.exports={row:"Counter_row__37kVR",value:"Counter_value__17iO9",button:"Counter_button__bqx_m",textbox:"Counter_textbox__2wz74",asyncButton:"Counter_asyncButton___D-9M Counter_button__bqx_m"}},5:function(e,t,n){e.exports={row:"Question_row__3Cso0",value:"Question_value__2Cnoj",valuecorrect:"Question_valuecorrect__2Lfjx",valuewrong:"Question_valuewrong__1CpsB",button:"Question_button__3HoZI",textbox:"Question_textbox__1jUw8"}}},[[14,1,2]]]);
//# sourceMappingURL=main.d29635a4.chunk.js.map