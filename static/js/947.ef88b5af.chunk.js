"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[947],{947:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var a,i,r,o,s,d,x,p,c,f=t(885),l=t(2791),u=t(5264),h=t(6431),g=t(168),m=t(921),b=m.Z.div(a||(a=(0,g.Z)(["\n  margin-bottom: 20px;\n  width: 380px;\n"]))),Z=m.Z.h1(i||(i=(0,g.Z)(["\n  margin: 0;\n  font-size: 35px;\n  margin-bottom: 20px;\n"]))),j=m.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]))),v=m.Z.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 600;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),y=m.Z.input(s||(s=(0,g.Z)(["\n  margin-top: 5px;\n  font-size: 22px;\n  border: none;\n  padding: 5px;\n  border-radius: 6px;\n  background: #e0e0e0;\n  box-shadow: inset 5px 5px 13px #5a5a5a, inset -5px -5px 13px #ffffff;\n  &:focus,\n  &:hover {\n    outline: 1px solid aqua;\n  }\n"]))),w=m.Z.button(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 6px;\n  background: linear-gradient(145deg, #cacaca, #f0f0f0);\n  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;\n  &:focus,\n  &:hover {\n    outline: 1px solid aqua;\n  }\n"]))),k=t(3099),z=t(184);function C(){var n=(0,l.useState)(""),e=(0,f.Z)(n,2),t=e[0],a=e[1],i=(0,l.useState)(""),r=(0,f.Z)(i,2),o=r[0],s=r[1],d=(0,k.Tn)(),x=(0,f.Z)(d,2),p=x[0],c=x[1].isLoading,g=(0,k.wY)().data,m=function(n){!function(n){var e=n.name;return g.find((function(n){return n.name===e&&n.number===o}))}(n)?(console.log("data: ",n),p(n)):u.Notify.info("Contact ".concat(n.name," is already in Your Phonebook"))},C=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":a(i);break;case"number":s(i)}},_=function(){a(""),s("")};return(0,z.jsxs)(b,{children:[(0,z.jsx)(Z,{children:"Phonebook"}),(0,z.jsxs)(j,{onSubmit:function(n){n.preventDefault(),m({name:t,number:o}),_()},children:[(0,z.jsxs)(v,{children:["Name",(0,z.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:C})]}),(0,z.jsxs)(v,{children:["Number",(0,z.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:C})]}),(0,z.jsxs)(w,{type:"submit",children:[c&&(0,z.jsx)(h.m,{size:20,style:{paddingRight:10}}),"Add contact"]})]})]})}var _,q,A,F,N,D,L,P,S=m.Z.div(x||(x=(0,g.Z)(["\n  min-width: 420px;\n  background-color: #fff;\n  border-radius: 6px;\n  background: #e0e0e0;\n  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 20px;\n"]))),T=m.Z.h2(p||(p=(0,g.Z)(["\n  margin: 0;\n  font-size: 35px;\n\n  margin-bottom: 20px;\n"]))),Y=m.Z.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),M=t(9135),R=t(5048),B=m.Z.li(_||(_=(0,g.Z)(["\n  font-size: 20px;\n  padding: 5px;\n  &:not(:last-child) {\n    margin-top: 10px;\n  }\n"]))),E=m.Z.div(q||(q=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),I=m.Z.span(A||(A=(0,g.Z)(["\n  margin-left: 10px;\n  font-weight: 800;\n"]))),J=m.Z.button(F||(F=(0,g.Z)(["\n  border: none;\n  font-size: 15px;\n  padding: 5px;\n  margin-left: 20px;\n  border-radius: 6px;\n  background: linear-gradient(145deg, #cacaca, #f0f0f0);\n  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;\n  &:focus,\n  &:hover {\n    outline: 1px solid aqua;\n  }\n"])));function O(n){var e=n.contact,t=(0,k.Nt)(),a=(0,f.Z)(t,2),i=a[0],r=a[1].isLoading;return(0,z.jsx)(z.Fragment,{children:e&&(0,z.jsx)(B,{children:(0,z.jsxs)(E,{children:[e.name," :",(0,z.jsx)(I,{children:e.phone}),(0,z.jsxs)(J,{disabled:r,id:e.id,onClick:function(){return n=e.id,void i(n);var n},type:"button",children:[r&&(0,z.jsx)(h.m,{size:12,style:{paddingRight:5}}),"Delete Contact"]})]})})})}function $(){var n=(0,k.wY)(),e=n.data,t=n.isFetching,a=n.refetch;console.log("contacts: ",e);var i=(0,R.v9)((function(n){return n.filter}));(0,l.useEffect)((function(){a()}),[a]);var r=function(){if(void 0!==e)return e.filter((function(n){return n.name.toLowerCase().includes(i.filter)}))}();return(0,z.jsxs)(S,{children:[(0,z.jsx)(T,{children:"Contacts"}),r&&r.length>0&&(0,z.jsx)(Y,{children:r.map((function(n){return(0,z.jsx)(O,{contact:n},n.id)}))}),t&&!r&&(0,z.jsx)(z.Fragment,{children:(0,z.jsx)("h3",{children:"Contact list is not ready..."})}),r&&0===r.length&&(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("h3",{children:["Contact list is empty ",(0,z.jsx)(M.rs_,{})]})})]})}var G,H,K=m.Z.form(N||(N=(0,g.Z)(["\n  display: flex;\n"]))),Q=m.Z.label(D||(D=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 600;\n"]))),U=m.Z.input(L||(L=(0,g.Z)(["\n  margin-top: 5px;\n  font-size: 22px;\n  border: none;\n  padding: 5px;\n  border-radius: 6px;\n  background: #e0e0e0;\n  box-shadow: inset 5px 5px 13px #5a5a5a, inset -5px -5px 13px #ffffff;\n  &:focus,\n  &:hover {\n    outline: 1px solid aqua;\n  }\n"]))),V=m.Z.button(P||(P=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border: none;\n  font-size: 15px;\n  font-size: 25px;\n  padding: 5px;\n  margin-left: 20px;\n  border-radius: 6px;\n  background: linear-gradient(145deg, #cacaca, #f0f0f0);\n  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;\n  &:focus,\n  &:hover {\n    outline: 1px solid aqua;\n  }\n"]))),W=t(1634);function X(){var n=(0,R.v9)((function(n){return n.filter})),e=(0,R.I0)();return(0,z.jsx)("div",{children:(0,z.jsxs)(K,{children:[(0,z.jsxs)(Q,{children:["Find contact by name",(0,z.jsx)(U,{type:"text",name:"filter",value:n.filter?n.filter:"",onChange:function(n){e((0,W.xO)(n.currentTarget.value))}})]}),(0,z.jsx)(V,{onClick:function(){e((0,W.Dg)())},type:"button",children:(0,z.jsx)(M.AMf,{})})]})})}var nn=m.Z.section(G||(G=(0,g.Z)(["\n  min-height: 100%;\n  width: 100%;\n\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n"]))),en=m.Z.div(H||(H=(0,g.Z)(["\n  border-radius: 6px;\n  background: #e0e0e0;\n  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 20px;\n"])));function tn(){return(0,z.jsxs)(nn,{children:[(0,z.jsxs)(en,{children:[(0,z.jsx)(C,{}),(0,z.jsx)(X,{})]}),(0,z.jsx)($,{})]})}}}]);
//# sourceMappingURL=947.ef88b5af.chunk.js.map