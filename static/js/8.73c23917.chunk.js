"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{3360:function(a,e,s){var i=s(1413),r=s(9439),o=s(5987),t=s(1418),n=s.n(t),l=s(2791),c=s(5341),d=s(162),f=s(184),v=["as","bsPrefix","variant","size","active","disabled","className"],m=l.forwardRef((function(a,e){var s=a.as,t=a.bsPrefix,l=a.variant,m=void 0===l?"primary":l,u=a.size,p=a.active,Z=void 0!==p&&p,b=a.disabled,x=void 0!==b&&b,N=a.className,y=(0,o.Z)(a,v),h=(0,d.vE)(t,"btn"),P=(0,c.FT)((0,i.Z)({tagName:s,disabled:x},y)),w=(0,r.Z)(P,2),j=w[0],F=w[1].tagName;return(0,f.jsx)(F,(0,i.Z)((0,i.Z)((0,i.Z)({},j),y),{},{ref:e,disabled:x,className:n()(N,h,Z&&"active",m&&"".concat(h,"-").concat(m),u&&"".concat(h,"-").concat(u),y.href&&x&&"disabled")}))}));m.displayName="Button",e.Z=m},2677:function(a,e,s){var i=s(9439),r=s(1413),o=s(5987),t=s(1418),n=s.n(t),l=s(2791),c=s(162),d=s(184),f=["as","bsPrefix","className"],v=["className"];var m=l.forwardRef((function(a,e){var s=function(a){var e=a.as,s=a.bsPrefix,i=a.className,t=(0,o.Z)(a,f);s=(0,c.vE)(s,"col");var l=(0,c.pi)(),d=(0,c.zG)(),v=[],m=[];return l.forEach((function(a){var e,i,r,o=t[a];delete t[a],"object"===typeof o&&null!=o?(e=o.span,i=o.offset,r=o.order):e=o;var n=a!==d?"-".concat(a):"";e&&v.push(!0===e?"".concat(s).concat(n):"".concat(s).concat(n,"-").concat(e)),null!=r&&m.push("order".concat(n,"-").concat(r)),null!=i&&m.push("offset".concat(n,"-").concat(i))})),[(0,r.Z)((0,r.Z)({},t),{},{className:n().apply(void 0,[i].concat(v,m))}),{as:e,bsPrefix:s,spans:v}]}(a),t=(0,i.Z)(s,2),l=t[0],m=l.className,u=(0,o.Z)(l,v),p=t[1],Z=p.as,b=void 0===Z?"div":Z,x=p.bsPrefix,N=p.spans;return(0,d.jsx)(b,(0,r.Z)((0,r.Z)({},u),{},{ref:e,className:n()(m,!N.length&&x)}))}));m.displayName="Col",e.Z=m},7022:function(a,e,s){var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2791),l=s(162),c=s(184),d=["bsPrefix","fluid","as","className"],f=n.forwardRef((function(a,e){var s=a.bsPrefix,o=a.fluid,n=void 0!==o&&o,f=a.as,v=void 0===f?"div":f,m=a.className,u=(0,r.Z)(a,d),p=(0,l.vE)(s,"container"),Z="string"===typeof n?"-".concat(n):"-fluid";return(0,c.jsx)(v,(0,i.Z)((0,i.Z)({ref:e},u),{},{className:t()(m,n?"".concat(p).concat(Z):p)}))}));f.displayName="Container",e.Z=f},783:function(a,e,s){var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2791),l=s(2007),c=s.n(l),d=s(184),f=["as","className","type","tooltip"],v={type:c().string,tooltip:c().bool,as:c().elementType},m=n.forwardRef((function(a,e){var s=a.as,o=void 0===s?"div":s,n=a.className,l=a.type,c=void 0===l?"valid":l,v=a.tooltip,m=void 0!==v&&v,u=(0,r.Z)(a,f);return(0,d.jsx)(o,(0,i.Z)((0,i.Z)({},u),{},{ref:e,className:t()(n,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v,e.Z=m},6516:function(a,e,s){s.d(e,{Z:function(){return U}});var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2007),l=s.n(n),c=s(2791),d=s(783),f=s(6882),v=s(4934),m=s(162),u=s(184),p=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(a,e){var s=a.bsPrefix,o=a.className,n=a.htmlFor,l=(0,r.Z)(a,p),d=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-check-label"),(0,u.jsx)("label",(0,i.Z)((0,i.Z)({},l),{},{ref:e,htmlFor:n||d,className:t()(o,s)}))}));Z.displayName="FormCheckLabel";var b=Z;var x=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],N=c.forwardRef((function(a,e){var s=a.id,o=a.bsPrefix,n=a.bsSwitchPrefix,l=a.inline,p=void 0!==l&&l,Z=a.reverse,N=void 0!==Z&&Z,y=a.disabled,h=void 0!==y&&y,P=a.isValid,w=void 0!==P&&P,j=a.isInvalid,F=void 0!==j&&j,I=a.feedbackTooltip,k=void 0!==I&&I,g=a.feedback,R=a.feedbackType,C=a.className,E=a.style,z=a.title,T=void 0===z?"":z,S=a.type,V=void 0===S?"checkbox":S,L=a.label,O=a.children,_=a.as,G=void 0===_?"input":_,H=(0,r.Z)(a,x);o=(0,m.vE)(o,"form-check"),n=(0,m.vE)(n,"form-switch");var M=(0,c.useContext)(v.Z).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),B=!O&&null!=L&&!1!==L||function(a,e){return c.Children.toArray(a).some((function(a){return c.isValidElement(a)&&a.type===e}))}(O,b),q=(0,u.jsx)(f.Z,(0,i.Z)((0,i.Z)({},H),{},{type:"switch"===V?"checkbox":V,ref:e,isValid:w,isInvalid:F,disabled:h,as:G}));return(0,u.jsx)(v.Z.Provider,{value:A,children:(0,u.jsx)("div",{style:E,className:t()(C,B&&o,p&&"".concat(o,"-inline"),N&&"".concat(o,"-reverse"),"switch"===V&&n),children:O||(0,u.jsxs)(u.Fragment,{children:[q,B&&(0,u.jsx)(b,{title:T,children:L}),g&&(0,u.jsx)(d.Z,{type:R,tooltip:k,children:g})]})})})}));N.displayName="FormCheck";var y=Object.assign(N,{Input:f.Z,Label:b}),h=s(4292),P=["className","bsPrefix","as"],w=c.forwardRef((function(a,e){var s=a.className,o=a.bsPrefix,n=a.as,l=void 0===n?"div":n,c=(0,r.Z)(a,P);return o=(0,m.vE)(o,"form-floating"),(0,u.jsx)(l,(0,i.Z)({ref:e,className:t()(s,o)},c))}));w.displayName="FormFloating";var j=w,F=["controlId","as"],I=c.forwardRef((function(a,e){var s=a.controlId,o=a.as,t=void 0===o?"div":o,n=(0,r.Z)(a,F),l=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,u.jsx)(v.Z.Provider,{value:l,children:(0,u.jsx)(t,(0,i.Z)((0,i.Z)({},n),{},{ref:e}))})}));I.displayName="FormGroup";var k=I,g=(s(2391),s(2677)),R=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],C=c.forwardRef((function(a,e){var s=a.as,o=void 0===s?"label":s,n=a.bsPrefix,l=a.column,d=void 0!==l&&l,f=a.visuallyHidden,p=void 0!==f&&f,Z=a.className,b=a.htmlFor,x=(0,r.Z)(a,R),N=(0,c.useContext)(v.Z).controlId;n=(0,m.vE)(n,"form-label");var y="col-form-label";"string"===typeof d&&(y="".concat(y," ").concat(y,"-").concat(d));var h=t()(Z,n,p&&"visually-hidden",d&&y);return b=b||N,d?(0,u.jsx)(g.Z,(0,i.Z)({ref:e,as:"label",className:h,htmlFor:b},x)):(0,u.jsx)(o,(0,i.Z)({ref:e,className:h,htmlFor:b},x))}));C.displayName="FormLabel";var E=C,z=["bsPrefix","className","id"],T=c.forwardRef((function(a,e){var s=a.bsPrefix,o=a.className,n=a.id,l=(0,r.Z)(a,z),d=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-range"),(0,u.jsx)("input",(0,i.Z)((0,i.Z)({},l),{},{type:"range",ref:e,className:t()(o,s),id:n||d}))}));T.displayName="FormRange";var S=T,V=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],L=c.forwardRef((function(a,e){var s=a.bsPrefix,o=a.size,n=a.htmlSize,l=a.className,d=a.isValid,f=void 0!==d&&d,p=a.isInvalid,Z=void 0!==p&&p,b=a.id,x=(0,r.Z)(a,V),N=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-select"),(0,u.jsx)("select",(0,i.Z)((0,i.Z)({},x),{},{size:n,ref:e,className:t()(l,s,o&&"".concat(s,"-").concat(o),f&&"is-valid",Z&&"is-invalid"),id:b||N}))}));L.displayName="FormSelect";var O=L,_=["bsPrefix","className","as","muted"],G=c.forwardRef((function(a,e){var s=a.bsPrefix,o=a.className,n=a.as,l=void 0===n?"small":n,c=a.muted,d=(0,r.Z)(a,_);return s=(0,m.vE)(s,"form-text"),(0,u.jsx)(l,(0,i.Z)((0,i.Z)({},d),{},{ref:e,className:t()(o,s,c&&"text-muted")}))}));G.displayName="FormText";var H=G,M=c.forwardRef((function(a,e){return(0,u.jsx)(y,(0,i.Z)((0,i.Z)({},a),{},{ref:e,type:"switch"}))}));M.displayName="Switch";var A=Object.assign(M,{Input:y.Input,Label:y.Label}),B=["bsPrefix","className","children","controlId","label"],q=c.forwardRef((function(a,e){var s=a.bsPrefix,o=a.className,n=a.children,l=a.controlId,c=a.label,d=(0,r.Z)(a,B);return s=(0,m.vE)(s,"form-floating"),(0,u.jsxs)(k,(0,i.Z)((0,i.Z)({ref:e,className:t()(o,s),controlId:l},d),{},{children:[n,(0,u.jsx)("label",{htmlFor:l,children:c})]}))}));q.displayName="FloatingLabel";var D=q,J=["className","validated","as"],K={_ref:l().any,validated:l().bool,as:l().elementType},Q=c.forwardRef((function(a,e){var s=a.className,o=a.validated,n=a.as,l=void 0===n?"form":n,c=(0,r.Z)(a,J);return(0,u.jsx)(l,(0,i.Z)((0,i.Z)({},c),{},{ref:e,className:t()(s,o&&"was-validated")}))}));Q.displayName="Form",Q.propTypes=K;var U=Object.assign(Q,{Group:k,Control:h.Z,Floating:j,Check:y,Switch:A,Label:E,Text:H,Range:S,Select:O,FloatingLabel:D})},6882:function(a,e,s){var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2791),l=s(4934),c=s(162),d=s(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=n.forwardRef((function(a,e){var s=a.id,o=a.bsPrefix,v=a.className,m=a.type,u=void 0===m?"checkbox":m,p=a.isValid,Z=void 0!==p&&p,b=a.isInvalid,x=void 0!==b&&b,N=a.as,y=void 0===N?"input":N,h=(0,r.Z)(a,f),P=(0,n.useContext)(l.Z).controlId;return o=(0,c.vE)(o,"form-check-input"),(0,d.jsx)(y,(0,i.Z)((0,i.Z)({},h),{},{ref:e,type:u,id:s||P,className:t()(v,o,Z&&"is-valid",x&&"is-invalid")}))}));v.displayName="FormCheckInput",e.Z=v},4934:function(a,e,s){var i=s(2791).createContext({});e.Z=i},4292:function(a,e,s){var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2791),l=(s(2391),s(783)),c=s(4934),d=s(162),f=s(184),v=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],m=n.forwardRef((function(a,e){var s=a.bsPrefix,o=a.type,l=a.size,m=a.htmlSize,u=a.id,p=a.className,Z=a.isValid,b=void 0!==Z&&Z,x=a.isInvalid,N=void 0!==x&&x,y=a.plaintext,h=a.readOnly,P=a.as,w=void 0===P?"input":P,j=(0,r.Z)(a,v),F=(0,n.useContext)(c.Z).controlId;return s=(0,d.vE)(s,"form-control"),(0,f.jsx)(w,(0,i.Z)((0,i.Z)({},j),{},{type:o,size:m,ref:e,readOnly:h,id:u||F,className:t()(p,y?"".concat(s,"-plaintext"):s,l&&"".concat(s,"-").concat(l),"color"===o&&"".concat(s,"-color"),b&&"is-valid",N&&"is-invalid")}))}));m.displayName="FormControl",e.Z=Object.assign(m,{Feedback:l.Z})},9743:function(a,e,s){var i=s(1413),r=s(5987),o=s(1418),t=s.n(o),n=s(2791),l=s(162),c=s(184),d=["bsPrefix","className","as"],f=n.forwardRef((function(a,e){var s=a.bsPrefix,o=a.className,n=a.as,f=void 0===n?"div":n,v=(0,r.Z)(a,d),m=(0,l.vE)(s,"row"),u=(0,l.pi)(),p=(0,l.zG)(),Z="".concat(m,"-cols"),b=[];return u.forEach((function(a){var e,s=v[a];delete v[a],e=null!=s&&"object"===typeof s?s.cols:s;var i=a!==p?"-".concat(a):"";null!=e&&b.push("".concat(Z).concat(i,"-").concat(e))})),(0,c.jsx)(f,(0,i.Z)((0,i.Z)({ref:e},v),{},{className:t().apply(void 0,[o,m].concat(b))}))}));f.displayName="Row",e.Z=f},2391:function(a){var e=function(){};a.exports=e}}]);
//# sourceMappingURL=8.73c23917.chunk.js.map