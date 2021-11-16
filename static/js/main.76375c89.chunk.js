(this["webpackJsonpconditional-questionnaire"]=this["webpackJsonpconditional-questionnaire"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),o=t(5),s=t.n(o),a=(t(17),t(3)),l=(t(18),t(0)),r=function(e){var n=Object(c.useState)(""),t=Object(a.a)(n,2),i=t[0],o=t[1];return Object(l.jsxs)("div",{className:"block block__sub",children:[Object(l.jsx)("h3",{children:"JSON input"}),Object(l.jsxs)("div",{className:"m-form-field",children:[Object(l.jsx)("label",{className:"a-label a-label__heading",htmlFor:"json-input",children:"Add JSON"}),Object(l.jsx)("textarea",{id:"json-input",className:"a-text-input a-text-input__full",value:i,onChange:function(e){o(e.target.value)},children:"Paste JSON here"})]}),Object(l.jsx)("button",{className:"a-btn",onClick:function(){var n=JSON.parse(i);e.resetState(n),o("")},children:"Upload JSON"})]})},u=t(2),d=t(38),b=function(e,n,t){var c=n[e.question],i=e.type,o=e.answer;return"exists"===i?void 0!==c:"equals"===e.type?Array.isArray(c)?c.includes(o):c===o:"not_equals"===e.type?Array.isArray(c)?!c.includes(o):c!==o:void 0},j=function(e,n,t){var c=e.type,i=e.conditions;return"all"===c?i.every((function(e){return!0===b(e,n)})):"any"===c?(i.forEach((function(e){return console.log(b(e,n))})),i.some((function(e){return!0===b(e,n)}))):void 0},h=function(e,n){var t=e.condition_block||{};return!(t&&t.conditions&&t.conditions.length)||function(e,n){var t=j(e,n),c=e.condition_groups;if(c&&c.length>0){var i=[];return c.forEach((function(e){i.push(j(e,n))})),"any"===e.type?i.some((function(e){return!0===e})):i.every((function(e){return!0===e}))}return t}(t,n)},x=function(e,n){return e.filter((function(e){return h(e,n)}))},f=function(){return Object(d.a)()},O=t(4),p=t(12),_={control:function(e){return Object(O.a)(Object(O.a)({},e),{},{borderColor:"#919395",borderRadius:0})},dropdownIndicator:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"#e7e8e9",color:"#101820 !important"})},indicatorSeparator:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"#919395",margin:0})},placeholder:function(e){return Object(O.a)(Object(O.a)({},e),{},{color:"#585d61"})}},m=function(e){var n,t;return Object(l.jsxs)("div",{className:"m-form-field",children:[Object(l.jsx)("label",{className:"a-label a-label__heading",htmlFor:e.id,children:e.label}),Object(l.jsx)(p.a,{"aria-label":e.label,className:e.className,classNamePrefix:"react-select",inputId:e.id,isClearable:!1,onChange:function(n){e.onChange(n?n.value:n)},options:e.options,placeholder:e.placeholder,styles:_,value:(n=e.options,t=e.value,n.find((function(e){return e.value===t}))||0)})]})},v=function(e){var n=e.condition,t=e.questions,c=e.questionToExclude,i=e.handleDelete,o=e.handleUpdate,s=n.question||"",a=[];t.forEach((function(e,n){e.id!==c&&a.push({label:n+1,value:e.id})}));var r=s&&["equals","not_equals"].includes(n.type);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsx)("h4",{children:"Condition"}),Object(l.jsx)("button",{className:"a-btn  a-btn__link a-btn__warning delete-button",onClick:function(){return i(n.id)},type:"button",children:"Delete condition"})]}),Object(l.jsxs)("div",{className:"condition-row",children:[Object(l.jsx)("span",{children:"Display if answer to question "}),Object(l.jsx)(m,{id:"condition_".concat(n.id,"_question"),options:a,value:s,onChange:function(e){return o(n.id,"question",e)},placeholder:"question"}),Object(l.jsx)(m,{id:"condition_".concat(n.id,"_type"),options:[{label:"exists",value:"exists"},{label:"is",value:"equals"},{label:"is not",value:"not_equals"}],value:n.type,onChange:function(e){return o(n.id,"type",e)},placeholder:"match type"}),r&&Object(l.jsx)(m,{id:"condition_".concat(n.id,"_answer"),options:function(){var e;return(e=s,t.find((function(n){return n.id===e}))).answers.map((function(e){return{label:e.text,value:e.id}}))}(),value:n.answer,onChange:function(e){return o(n.id,"answer",e)},placeholder:"answer"})]})]})},k=function(e){var n=e.conditionBlock,t=e.handler,c=e.questions,i=e.questionToExclude,o=n.condition_groups||[],s=function(e){var c=Object.assign({},n),i=Object(u.a)(o),s=i.findIndex((function(n){return n.id===e.id}));i[s]=e,c.condition_groups=i,t(c)},a=function(e){var c=Object.assign({},n),i=Object(u.a)(o),s=i.findIndex((function(n){return n.id===e}));i.splice(s,1),c.condition_groups=i,t(c)};return Object(l.jsxs)("div",{children:[o.length>0&&o.map((function(e,n){return Object(l.jsx)(g,{conditionGroup:e,onUpdate:s,onDelete:a,questions:c,questionToExclude:i,type:"group"},e.id)})),Object(l.jsx)("button",{className:"a-btn a-btn__link u-mt15",type:"button",onClick:function(){var e=Object.assign({},n);e.condition_groups=[].concat(Object(u.a)(o),[{id:f(),type:"all",conditions:[]}]),t(e)},children:"Add ".concat(o.length?"another":"a"," condition group")})]})},g=function(e){var n=e.conditionGroup,t=e.onUpdate,c=e.onDelete,i=e.questions,o=e.questionToExclude,s=e.type,a=void 0===s?"block":s,r=n.conditions||[],d=function(e,c){var i=Object.assign({},n);i[e]=c,t(i)},b=function(e,n,t){var c=Object(u.a)(r),i=c.findIndex((function(n){return n.id===e}));c[i][n]=t,d("conditions",c)},j=function(e){var n=Object(u.a)(r),t=n.findIndex((function(n){return n.id===e}));n.splice(t,1),d("conditions",n)};return Object(l.jsxs)("div",{className:"block  block__sub",children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsxs)("h4",{children:["Condition ",a]}),Object(l.jsxs)("button",{className:"a-btn a-btn__link a-btn__warning delete-button",type:"button",onClick:function(){return c(n.id)},children:["Delete condition ",a]})]}),Object(l.jsxs)("div",{className:"o-well",children:[Object(l.jsxs)("div",{className:"condition-type-row",children:[Object(l.jsx)("span",{children:"Display if "}),Object(l.jsx)(m,{options:[{label:"any",value:"any"},{label:"all",value:"all"}],value:n.type,onChange:function(e){return d("type",e)}}),Object(l.jsx)("span",{children:"of the following conditions are met:"})]}),Object(l.jsx)("div",{className:"block block__sub block__flush-bottom",children:r.length>0&&r.map((function(e,n){return Object(l.jsx)(v,{handleUpdate:b,handleDelete:j,questions:i,questionToExclude:o,condition:e},e.id)}))}),Object(l.jsx)("button",{className:"a-btn a-btn__link",type:"button",onClick:function(){var e=[].concat(Object(u.a)(r),[{id:f(),type:"exists",question:"",answer:""}]);d("conditions",e)},children:"Add ".concat(r.length?"another":"a"," condition")}),"block"===a&&Object(l.jsx)(k,{conditionBlock:n,handler:t,questions:i,questionToExclude:o})]})]})},q=function(e){var n=e.conditionBlock,t=e.handler,c=e.questions,i=e.questionToExclude;return Object(l.jsx)("div",{children:Object(l.jsx)(g,{conditionGroup:n,onUpdate:t,onDelete:function(){return t(null)},questions:c,questionToExclude:i})})},N=function(e){var n=e.conditionBlock,t=e.handler,c=e.questions,i=e.questionToExclude;return Object(l.jsx)("div",{children:n?Object(l.jsx)(q,{conditionBlock:n,handler:t,questions:c,questionToExclude:i}):Object(l.jsx)("button",{className:"a-btn a-btn__link",type:"button",onClick:function(){t({type:"all",conditions:[],condition_groups:[]})},children:"Add conditional display logic (optional)"})})},y=function(e){var n=e.result,t=e.handleUpdate,c=e.handleDelete,i=e.questions,o=e.index,s=n.id;return Object(l.jsx)("form",{className:"block  block__sub block__border-bottom block__border-left block__border-right block__border-top u-clearfix decision-tree-node-item  block__padded-bottom content-row",children:Object(l.jsxs)("div",{className:"m-form-field",children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsxs)("h4",{children:["Result block ",o+1]}),Object(l.jsx)("button",{className:"a-btn  a-btn__link a-btn__warning delete-button",type:"button",onClick:function(){return c(s)},children:"Delete result block"})]}),Object(l.jsx)("div",{className:"question-type",children:Object(l.jsx)(m,{id:"result".concat(n.id,"_type"),options:[{label:"text",value:"text"},{label:"expandable group",value:"expandable"}],value:n.type,onChange:function(e){return t(n.id,"type",e)},label:"Type"})}),Object(l.jsx)(N,{conditionBlock:n.condition_block,handler:function(e){t(s,"condition_block",e)},questions:i}),Object(l.jsxs)("div",{className:"block block__sub",children:[Object(l.jsx)("label",{className:"a-label a-label__heading",htmlFor:"resultField_".concat(s),children:"Result block text"}),Object(l.jsx)("textarea",{id:"resultField_".concat(s),name:"textField",type:"text",value:n.text,onChange:function(e){t(s,"text",e.target.value)},placeholder:"Result text",className:"a-text-input a-text-input__full"})]})]})})},C=function(e){var n=e.questions,t=e.results,c=e.setResults,i=function(e){var n=Object(u.a)(t),i=n.findIndex((function(n){return n.id===e}));n.splice(i,1),c(n)},o=function(e,n,i){var o=Object(u.a)(t),s=o.findIndex((function(n){return n.id===e}));o[s][n]=i,c(o)};return Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{children:"Result blocks"}),t.length>0&&Object(l.jsx)("div",{className:"block block__sub",children:t.map((function(e,t){return Object(l.jsx)(y,{handleUpdate:o,handleDelete:i,result:e,questions:n,index:t},e.id)}))}),Object(l.jsx)("button",{className:"a-btn",onClick:function(){var e=[].concat(Object(u.a)(t),[{id:f(),type:"text",text:""}]);c(e)},children:"Add ".concat(t.length?"another":"a"," result block")})]})},w=function(e){var n=e.answer,t=e.handleUpdate,c=e.handleDelete,i=e.questions,o=e.questionToExclude,s=e.index;return Object(l.jsxs)("div",{className:"o-well ",children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsxs)("h4",{children:["Answer ",s+1]}),Object(l.jsx)("button",{className:"a-btn a-btn__link a-btn__warning delete-button",type:"button",onClick:function(){return c(n.id)},children:"Delete answer"})]}),Object(l.jsx)(N,{conditionBlock:n.condition_block,handler:function(e){return t(n.id,"condition_block",e)},questions:i,questionToExclude:o}),Object(l.jsxs)("div",{className:"m-form-field block block__sub",children:[Object(l.jsx)("label",{className:"a-label a-label__heading",htmlFor:"answer-text-field-".concat(n.id),children:"Answer text"}),Object(l.jsx)("input",{id:"answer-text-field-".concat(n.id),name:"answerTextField",type:"text",value:n.text,onChange:function(e){return t(n.id,"text",e.target.value)},placeholder:"Answer text",className:"a-text-input a-text-input__full"})]})]})},T=function(e){var n=e.question,t=e.updateQuestion,c=e.questions,i=n.answers,o=function(e,c,o){var s=Object(u.a)(i),a=s.findIndex((function(n){return n.id===e})),l=s[a];l[c]=o,s[a]=l,t(n.id,"answers",s)},s=function(e){var c=Object(u.a)(i),o=c.findIndex((function(n){return n.id===e}));c.splice(o,1),t(n.id,"answers",c)};return Object(l.jsxs)("div",{className:"answer-section block block__sub",children:[Object(l.jsx)("h4",{children:"Answers"}),i.length>0&&i.map((function(e,t){return Object(l.jsx)(w,{answer:e,questionToExclude:n.id,questions:c,handleUpdate:o,handleDelete:s,index:t},e.id)})),Object(l.jsx)("button",{className:"a-btn",onClick:function(){var e=i.length?Object(u.a)(i):[];e.push({id:f(),text:""}),t(n.id,"answers",e)},type:"button",children:"Add ".concat(i.length?"another":"an"," answer")})]})},S=function(e){var n=e.block,t=e.handleUpdate,c=e.handleDelete,i=e.questions,o=e.questionToExclude,s=e.index;return Object(l.jsxs)("div",{className:"o-well ",children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsxs)("h4",{children:["Content block ",s+1]}),Object(l.jsx)("button",{className:"a-btn  a-btn__link a-btn__warning delete-button",type:"button",onClick:function(){return c(n.id)},children:"Delete content block"})]}),Object(l.jsx)(N,{conditionBlock:n.condition_block,handler:function(e){return t(n.id,"condition_block",e)},questions:i,questionToExclude:o}),Object(l.jsxs)("div",{className:"m-form-field block block__sub",children:[Object(l.jsx)("label",{className:"a-label a-label__heading",htmlFor:"contentBlockText_".concat(n.id),children:"Content block text"}),Object(l.jsx)("textarea",{className:"a-text-input a-text-input__full",id:"contentBlockText_".concat(n.id),onChange:function(e){return t(n.id,"text",e.target.value)},placeholder:"Content block text",type:"text",value:n.text})]})]})},D=function(e){var n=e.question,t=e.updateQuestion,c=e.questions,i=n.content_blocks,o=function(e,c,o){var s=Object(u.a)(i),a=s.findIndex((function(n){return n.id===e})),l=s[a];l[c]=o,s[a]=l,t(n.id,"content_blocks",s)},s=function(e){var c=Object(u.a)(i),o=c.findIndex((function(n){return n.id===e}));c.splice(o,1),t(n.id,"content_blocks",c)};return Object(l.jsxs)("div",{className:"answer-section block block__sub",children:[Object(l.jsx)("h4",{children:"Content blocks"}),i.length>0&&i.map((function(e,t){return Object(l.jsx)(S,{block:e,questionToExclude:n.id,questions:c,handleUpdate:o,handleDelete:s,index:t},e.id)})),Object(l.jsx)("button",{className:"a-btn",type:"button",onClick:function(){var e=i.length?Object(u.a)(i):[];e.push({id:f(),text:""}),t(n.id,"content_blocks",e)},children:"Add ".concat(i.length?"another":"a"," content block")})]})},I=function(e){var n=e.question,t=e.updateQuestion,c=e.handleDelete,i=e.questions,o=e.index,s=n.type||"radio",a=n.required;return Object(l.jsxs)("form",{className:"block block__sub  block__border-bottom block__border-left block__border-right block__border-top u-clearfix decision-tree-node-item",children:[Object(l.jsxs)("div",{className:"u-clearfix action-row",children:[Object(l.jsxs)("h3",{children:["Question ",o+1]}),Object(l.jsx)("button",{className:"a-btn a-btn__link a-btn__warning delete-button",type:"button",onClick:function(){return c(n.id)},children:"Delete question"})]}),Object(l.jsx)("div",{className:"question-type",children:Object(l.jsx)(m,{id:"question_".concat(n.id,"_type"),options:[{label:"radio",value:"radio"},{label:"checkbox",value:"checkbox"}],value:s,onChange:function(e){return t(n.id,"type",e)},label:"Type"})}),Object(l.jsxs)("div",{className:"m-form-field m-form-field__checkbox u-mb15 required-row",children:[Object(l.jsx)("input",{className:"a-checkbox hover",id:"required_".concat(n.id),type:"checkbox",checked:!!a,onChange:function(e){return t(n.id,"required",e.target.checked)}}),Object(l.jsx)("label",{className:"a-label",htmlFor:"required_".concat(n.id),children:"Required"})]}),Object(l.jsx)(N,{conditionBlock:n.condition_block,handler:function(e){return t(n.id,"condition_block",e)},questions:i,questionToExclude:n.id}),Object(l.jsx)(D,{question:n,updateQuestion:t,questions:i}),Object(l.jsx)(T,{question:n,updateQuestion:t,questions:i})]})},F=function(e){var n=e.questions,t=e.updateQuestions,c=function(e){var c=Object(u.a)(n),i=c.findIndex((function(n){return n.id===e}));c.splice(i,1),t(c)},i=function(e,c,i){console.log("updating",e,c,i);var o=Object(u.a)(n),s=o.findIndex((function(n){return n.id===e}));o[s][c]=i,t(o)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Questions"}),n.length>0&&n.map((function(e,t){return Object(l.jsx)(I,{question:e,updateQuestion:i,handleDelete:c,questions:n,index:t},e.id)})),Object(l.jsx)("button",{className:"a-btn",onClick:function(e){var c=[].concat(Object(u.a)(n),[{id:f(),answers:[],text:"",condition_block:null,content_blocks:[],type:"radio",required:!0}]);t(c)},children:"Add ".concat(n.length?"another":"a"," question")})]})},E=function(e){var n=e.contentBlock;return Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:n.text}})},A=function(e){return Object(l.jsxs)("div",{className:"m-form-field m-form-field__radio m-form-field__lg-target\n                       ".concat(e.containerClass?e.containerClass:""),children:[Object(l.jsx)("input",{className:"a-radio",type:"radio",value:e.value,id:e.id,name:e.name,checked:e.checked,disabled:e.disabled,onChange:function(n){e.onChange(e.value)}}),Object(l.jsx)("label",{className:"a-label",htmlFor:e.id,children:Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.label}})})]})},B=function(e){var n=e.questionID,t=e.selection,c=e.answers,i=e.onChange;return console.log("radio group",t),Object(l.jsx)("fieldset",{className:"o-form_fieldset",children:c.map((function(e,c){return Object(l.jsx)(A,{label:e.text,value:e.id,checked:t===e.id,id:"q_".concat(n,"_a_").concat(e.id),onChange:i},e.id)}))})},Q=function(e){return Object(l.jsxs)("div",{className:"m-form-field m-form-field__checkbox m-form-field__lg-target\n                       ".concat(e.containerClass?e.containerClass:""),children:[Object(l.jsx)("input",{className:"a-checkbox",type:"checkbox",value:e.value,id:e.id,name:e.name,checked:e.checked,disabled:e.disabled,onChange:function(n){e.onChange(e.value,n.target.checked)}}),Object(l.jsx)("label",{className:"a-label",htmlFor:e.id,children:Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.label}})})]})},U=function(e){var n=e.questionID,t=e.selection,c=e.answers,i=e.onChange,o=t||[],s=function(e,n){var t=Object(u.a)(o);n?!t.includes(e)&&t.push(e):t=t.filter((function(n){return n!==e})),i(t)};return Object(l.jsx)("fieldset",{className:"o-form_fieldset",children:c.map((function(e,t){return Object(l.jsx)(Q,{label:e.text,value:e.id,checked:o.includes(e.id),id:"q_".concat(n,"_a_").concat(e.id),onChange:s},e.id)}))})},J=function(e){var n=e.question,t=e.selections,c=(e.content,e.handleChange),i=x(n.answers,t),o=x(n.content_blocks,t),s=n.id,a="radio"===n.type?B:U;return console.log("questionnaire question",s,t,t[s]),Object(l.jsxs)("div",{className:"question-item block",children:[o.length>0&&o.map((function(e,n){return Object(l.jsx)(E,{contentBlock:e},e.id)})),Object(l.jsx)(a,{questionID:s,selection:t[s],answers:i,onChange:function(e){return c(s,e)}})]})},R=function(e){var n=e.questions,t=e.selections,c=e.content,i=e.handleChange;return console.log(n),Object(l.jsx)("div",{className:"question-list",children:n.length>0&&n.map((function(e,n){return Object(l.jsx)(J,{question:e,selections:t,content:c,handleChange:i},e.id)}))})},L=function(e){var n=e.result;return Object(l.jsx)("div",{className:"block block__sub",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:n.text}})})},M=function(e){var n=e.isFinished,t=e.isSubmitted,c=(e.questions,e.selections),i=e.results,o=x(i,c);return Object(l.jsx)("div",{children:n&&t?Object(l.jsx)("div",{className:"results-list",children:o.length>0&&o.map((function(e,n){return Object(l.jsx)(L,{result:e},e.id)}))}):null})},H=function(e){var n=e.isFinished,t=e.submitForm;return Object(l.jsx)("button",{className:"a-btn ".concat(n?"":"a-btn__disabled"),type:"button",onClick:function(){n&&t()},title:"".concat(n?"":"disabled"),children:"View results"})};var P=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)([]),s=Object(a.a)(o,2),u=s[0],d=s[1],b=Object(c.useState)({}),j=Object(a.a)(b,2),h=j[0],f=j[1],O=Object(c.useState)([]),p=Object(a.a)(O,2),_=p[0],m=p[1],v=Object(c.useState)(!1),k=Object(a.a)(v,2),g=k[0],q=k[1],N=Object(c.useState)(!1),y=Object(a.a)(N,2),w=y[0],T=y[1],S=function(e,n){var t=x(e,n),c=t.map((function(e){return e.id})),i=Object.keys(n).filter((function(e){return!c.includes(+e)})),o=Object.assign({},n);console.log("copy",o),console.log("leftovers",i);var s=function(e,n){return e.every((function(e){return e.id in n}))}(t.filter((function(e){return e.required})),o);m(t),f(o),q(s),s||T(!1)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"Builders",children:[Object(l.jsx)(F,{questions:u,updateQuestions:function(e){d(e),S(e,h)}}),Object(l.jsx)(C,{questions:u,results:t,setResults:i})]}),Object(l.jsxs)("div",{className:"Questionnaire block",children:[Object(l.jsx)("h2",{children:"Questionnaire"}),Object(l.jsx)(R,{questions:_,selections:h,handleChange:function(e,n){console.log("updating state",e,n);var t=Object.assign({},h);t[e]=n,console.log("selections copy",t),S(u,t)}}),Object(l.jsx)(H,{isFinished:g,submitForm:function(){w||T(!0)}}),Object(l.jsx)(M,{isFinished:g,isSubmitted:w,questions:u,selections:h,results:t})]}),Object(l.jsxs)("div",{className:"JSON block",children:[Object(l.jsx)("h2",{children:"JSON"}),Object(l.jsx)(r,{resetState:function(e){e&&(d(e.questions||[]),i(e.results||[]),S(e.questions||[],[]))}}),Object(l.jsxs)("div",{className:"block block__sub",children:[Object(l.jsx)("h3",{children:"JSON output"}),Object(l.jsx)("p",{children:JSON.stringify({results:t,questions:u})})]})]})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),G()}},[[36,1,2]]]);
//# sourceMappingURL=main.76375c89.chunk.js.map