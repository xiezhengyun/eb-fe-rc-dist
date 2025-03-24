"use strict";(self.webpackChunkebaoferc=self.webpackChunkebaoferc||[]).push([[232],{46555:function(O,c,e){e.r(c),e.d(c,{demos:function(){return D}});var I=e(15009),d=e.n(I),x=e(99289),_=e.n(x),u=e(67294),R=e(10294),i=e(58148),o=e(13138),D={"src-utils-bi-demo-0":{component:u.memo(u.lazy(_()(d()().mark(function p(){var f,v,s,t,a;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return f=l.sent,v=f.openFullscreen,s=f.closeFullscreen,l.next=7,Promise.resolve().then(e.bind(e,13138));case 7:return t=l.sent,a=t.Button,l.abrupt("return",{default:function(){return u.createElement(u.Fragment,null,u.createElement(a,{onClick:v}," \u8FDB\u5165\u5168\u5C4F "),u.createElement(a,{onClick:s}," \u9000\u51FA\u5168\u5C4F "))}});case 10:case"end":return l.stop()}},p)})))),asset:{type:"BLOCK",id:"src-utils-bi-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { openFullscreen, closeFullscreen } from 'ebaoferc';\r
import { Button } from 'antd';\r
export default () => {\r
  return (\r
    <>\r
      <Button onClick={openFullscreen}> \u8FDB\u5165\u5168\u5C4F </Button>\r
      <Button onClick={closeFullscreen}> \u9000\u51FA\u5168\u5C4F </Button>\r
    </>\r
  );\r
};`},ebaoferc:{type:"NPM",value:"0.3.4"},antd:{type:"NPM",value:"5.22.4"}},entry:"index.tsx"},context:{ebaoferc:i,antd:o},renderOpts:{compile:function(){var p=_()(d()().mark(function v(){var s,t=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},v)}));function f(){return p.apply(this,arguments)}return f}()}}}},93356:function(O,c,e){e.r(c),e.d(c,{demos:function(){return D}});var I=e(15009),d=e.n(I),x=e(99289),_=e.n(x),u=e(67294),R=e(79663),i=e(13138),o=e(58148),D={"src-utils-file-demo-0":{component:u.memo(u.lazy(_()(d()().mark(function p(){var f,v,s,t;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13138));case 2:return f=n.sent,v=f.Button,n.next=6,Promise.resolve().then(e.bind(e,58148));case 6:return s=n.sent,t=s.downloadFileByLink,n.abrupt("return",{default:function(){return u.createElement(v,{onClick:function(){return t("https://picsum.photos/300/150")}},"\u4E0B\u8F7D\u4E00\u4E2A\u56FE\u7247")}});case 9:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"src-utils-file-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';\r
import { downloadFileByLink } from 'ebaoferc';\r
\r
export default () => {\r
  return (\r
    <Button onClick={() => downloadFileByLink('https://picsum.photos/300/150')}>\r
      \u4E0B\u8F7D\u4E00\u4E2A\u56FE\u7247\r
    </Button>\r
  );\r
};`},antd:{type:"NPM",value:"5.22.4"},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{antd:i,ebaoferc:o},renderOpts:{compile:function(){var p=_()(d()().mark(function v(){var s,t=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},v)}));function f(){return p.apply(this,arguments)}return f}()}},"src-utils-file-demo-1":{component:u.memo(u.lazy(_()(d()().mark(function p(){var f,v,s,t,a;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,13138));case 2:return f=l.sent,v=f.Button,s=f.Space,l.next=7,Promise.resolve().then(e.bind(e,58148));case 7:return t=l.sent,a=t.downloadFileByBlob,l.abrupt("return",{default:function(){var r="hello ebaoferc";return u.createElement(s,null,u.createElement(v,{onClick:function(){return a(r,"".concat(r,".txt"))}},"\u4E0B\u8F7D\u4E00\u4E2Atxt"),u.createElement(v,{onClick:function(){return a(r,"".concat(r,".md"))}},"\u4E0B\u8F7D\u4E00\u4E2Amarkdown"))}});case 10:case"end":return l.stop()}},p)})))),asset:{type:"BLOCK",id:"src-utils-file-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Space } from 'antd';\r
import { downloadFileByBlob } from 'ebaoferc';\r
\r
export default () => {\r
  const fileContent = 'hello ebaoferc';\r
  return (\r
    <Space>\r
      <Button\r
        onClick={() => downloadFileByBlob(fileContent, \`\${fileContent}.txt\`)}\r
      >\r
        \u4E0B\u8F7D\u4E00\u4E2Atxt\r
      </Button>\r
      <Button\r
        onClick={() => downloadFileByBlob(fileContent, \`\${fileContent}.md\`)}\r
      >\r
        \u4E0B\u8F7D\u4E00\u4E2Amarkdown\r
      </Button>\r
    </Space>\r
  );\r
};`},antd:{type:"NPM",value:"5.22.4"},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{antd:i,ebaoferc:o},renderOpts:{compile:function(){var p=_()(d()().mark(function v(){var s,t=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},v)}));function f(){return p.apply(this,arguments)}return f}()}}}},59e3:function(O,c,e){e.r(c),e.d(c,{demos:function(){return v}});var I=e(15009),d=e.n(I),x=e(97857),_=e.n(x),u=e(99289),R=e.n(u),i=e(67294),o=e(10556),D=e(20388),p=e(13138),f=e(58148),v={"src-utils-form-demo-0":{component:i.memo(i.lazy(R()(d()().mark(function s(){var t,a,n,l,m,r,y,M,E,b,g,h,B,T;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,20388));case 2:return t=P.sent,a=t.ProForm,n=t.ProFormText,P.next=7,Promise.resolve().then(e.bind(e,13138));case 7:return l=P.sent,m=l.message,P.next=11,Promise.resolve().then(e.bind(e,58148));case 11:return r=P.sent,y=r.AmountRule,M=r.IdRule,E=r.NaturalnumRule,b=r.PhoneRule,g=r.PositiveIntegerRule,h=r.RequiredRules,B=r.LandlineRule,T=r.PhoneAndLandlineRule,P.abrupt("return",{default:function(){var C=function(K){m.success("\u901A\u8FC7\u6821\u9A8C")};return i.createElement(a,{onFinish:C},i.createElement(n,_()({name:"RequiredRules",label:"\u5FC5\u586B"},h)),i.createElement(n,{label:"\u624B\u673A\u7535\u8BDD",name:"legalPhone",rules:[b,h.rules[0]]}),i.createElement(n,{label:"\u5EA7\u673A\u7535\u8BDD",name:"landline",rules:[B,h.rules[0]]}),i.createElement(n,{label:"\u624B\u673A/\u5EA7\u673A\u7535\u8BDD(\u975E\u5FC5\u586B)",name:"telephone",rules:[T]}),i.createElement(n,{label:"\u624B\u673A/\u5EA7\u673A\u7535\u8BDD(\u5FC5\u586B: getPhoneAndLandlineRule({ required: true }))",name:"requiredTelephone",rules:[T,h.rules[0]]}),i.createElement(n,{label:"\u8EAB\u4EFD\u8BC1",name:"id",rules:[M,h.rules[0]]}),i.createElement(n,{label:"\u81EA\u7136\u6570\uFF0C0\uFF0C1\uFF0C2...",name:"NaturalnumRule",rules:[E,h.rules[0]]}),i.createElement(n,{label:"\u6B63\u6574\u65701\uFF0C2\uFF0C3...",name:"PositiveIntegerRule",rules:[g,h.rules[0]]}),i.createElement(n,{label:"\u91D1\u989D\uFF0C\u5927\u4E8E\u7B49\u4E8E0\uFF0C\u6700\u591A2\u4F4D\u5C0F\u6570",name:"AmountRule",rules:[y,h.rules[0]]}))}});case 21:case"end":return P.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-form-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm, ProFormText } from '@ant-design/pro-components';\r
import { message } from 'antd';\r
import {\r
  AmountRule,\r
  IdRule,\r
  NaturalnumRule,\r
  PhoneRule,\r
  PositiveIntegerRule,\r
  RequiredRules,\r
  LandlineRule,\r
  PhoneAndLandlineRule,\r
} from 'ebaoferc';\r
export default () => {\r
  const formFinish = (parmas) => {\r
    message.success('\u901A\u8FC7\u6821\u9A8C');\r
  };\r
  return (\r
    <ProForm onFinish={formFinish}>\r
      <ProFormText name="RequiredRules" label="\u5FC5\u586B" {...RequiredRules} />\r
      <ProFormText\r
        label="\u624B\u673A\u7535\u8BDD"\r
        name="legalPhone"\r
        rules={[PhoneRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u5EA7\u673A\u7535\u8BDD"\r
        name="landline"\r
        rules={[LandlineRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u624B\u673A/\u5EA7\u673A\u7535\u8BDD(\u975E\u5FC5\u586B)"\r
        name="telephone"\r
        rules={[PhoneAndLandlineRule]}\r
      />\r
      <ProFormText\r
        label="\u624B\u673A/\u5EA7\u673A\u7535\u8BDD(\u5FC5\u586B: getPhoneAndLandlineRule({ required: true }))"\r
        name="requiredTelephone"\r
        rules={[PhoneAndLandlineRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u8EAB\u4EFD\u8BC1"\r
        name="id"\r
        rules={[IdRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u81EA\u7136\u6570\uFF0C0\uFF0C1\uFF0C2..."\r
        name="NaturalnumRule"\r
        rules={[NaturalnumRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u6B63\u6574\u65701\uFF0C2\uFF0C3..."\r
        name="PositiveIntegerRule"\r
        rules={[PositiveIntegerRule, RequiredRules.rules[0]]}\r
      />\r
      <ProFormText\r
        label="\u91D1\u989D\uFF0C\u5927\u4E8E\u7B49\u4E8E0\uFF0C\u6700\u591A2\u4F4D\u5C0F\u6570"\r
        name="AmountRule"\r
        rules={[AmountRule, RequiredRules.rules[0]]}\r
      />\r
    </ProForm>\r
  );\r
};`},"@ant-design/pro-components":{type:"NPM",value:"2.8.2"},antd:{type:"NPM",value:"5.22.4"},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{"@ant-design/pro-components":D,antd:p,ebaoferc:f},renderOpts:{compile:function(){var s=R()(d()().mark(function a(){var n,l=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}}}},60589:function(O,c,e){var I;e.r(c),e.d(c,{demos:function(){return v}});var d=e(5574),x=e.n(d),_=e(15009),u=e.n(_),R=e(99289),i=e.n(R),o=e(67294),D=e(10504),p=e(58148),f=e(13138),v={"src-utils-format-demo-0":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n,l;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return t=r.sent,a=t.resolveAlias,n={name:"abc",value:"123"},l=a(n,{value:"key"}),r.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement("p",null,"\u539F\u6570\u636E\uFF1A",JSON.stringify(n)),o.createElement("p",null,"\u8F6C\u5316\u540E\uFF1A",JSON.stringify(l)))}});case 7:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { resolveAlias } from 'ebaoferc';\r
const map = { name: 'abc', value: '123' };\r
const newMap = resolveAlias(map, { value: 'key' });\r
\r
export default () => (\r
  <div>\r
    <p>\u539F\u6570\u636E\uFF1A{JSON.stringify(map)}</p>\r
    <p>\u8F6C\u5316\u540E\uFF1A{JSON.stringify(newMap)}</p>\r
  </div>\r
);`},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{ebaoferc:p},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}},"src-utils-format-demo-1":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n,l;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return t=r.sent,a=t.isNullOrUndefined,n=a(1),l=a(null),r.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement("p",null,"1: ",n+""),o.createElement("p",null,"null: ",l+""))}});case 7:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { isNullOrUndefined } from 'ebaoferc';\r
const flag = isNullOrUndefined(1);\r
const flag2 = isNullOrUndefined(null);\r
export default () => (\r
  <div>\r
    <p>1: {flag + ''}</p>\r
    <p>null: {flag2 + ''}</p>\r
  </div>\r
);`},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{ebaoferc:p},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}},"src-utils-format-demo-2":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n,l,m,r,y;return u()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,13138));case 2:return t=E.sent,a=t.Checkbox,n=t.Table,E.next=7,Promise.resolve().then(e.bind(e,58148));case 7:return l=E.sent,m=l.computedTableRowSerialNo,E.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return r=E.sent,y=r.useState,E.abrupt("return",{default:function(){var g=y(!1),h=x()(g,2),B=h[0],T=h[1],L=function(){T(!B)},P={total:5,current:1,pageSize:10},A=[{title:"\u5E8F\u53F7",key:"index",render:function(j,K,F){return m({pagination:P,index:F,isReverseOrder:B})}}];return o.createElement(o.Fragment,null,o.createElement(a,{onChange:L},"Order"),o.createElement(n,{columns:A,dataSource:[1,2,3,4,5]}))}});case 14:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Table } from 'antd';\r
import { computedTableRowSerialNo } from 'ebaoferc';\r
import { useState } from 'react';\r
export default () => {\r
  const [order, setOrder] = useState(false);\r
  const onChange = () => {\r
    setOrder(!order);\r
  };\r
  const pagination = {\r
    total: 5,\r
    current: 1,\r
    pageSize: 10,\r
  };\r
  const columns = [\r
    {\r
      title: '\u5E8F\u53F7',\r
      key: 'index',\r
      render: (text, record, index) =>\r
        computedTableRowSerialNo({ pagination, index, isReverseOrder: order }),\r
    },\r
  ];\r
  return (\r
    <>\r
      <Checkbox onChange={onChange}>Order</Checkbox>\r
      <Table columns={columns} dataSource={[1, 2, 3, 4, 5]}></Table>\r
    </>\r
  );\r
};`},antd:{type:"NPM",value:"5.22.4"},ebaoferc:{type:"NPM",value:"0.3.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:f,ebaoferc:p,react:I||(I=e.t(o,2))},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}},"src-utils-format-demo-3":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return t=m.sent,a=t.encryptPhoneNumber,n=18155982440,m.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement("p",null,"phone: ",n),o.createElement("p",null,"encryptPhone: ",a(n)))}});case 6:case"end":return m.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { encryptPhoneNumber } from 'ebaoferc';\r
const phone = 18155982440;\r
export default () => (\r
  <div>\r
    <p>phone: {phone}</p>\r
    <p>encryptPhone: {encryptPhoneNumber(phone)}</p>\r
  </div>\r
);`},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{ebaoferc:p},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}},"src-utils-format-demo-4":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n,l,m,r,y,M;return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return t=b.sent,a=t.encryptPhoneNumber,n=t.showEmptyText,l="text1",m=null,r=void 0,y=0,M=18155982440,b.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement("p",null,"text1: ",n(l)),o.createElement("p",null,"text2: ",n(m)),o.createElement("p",null,"text3: ",n(r)),o.createElement("p",null,"text4: ",n(y)),o.createElement("p",null,"text5: ",n(M,a)))}});case 11:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { encryptPhoneNumber, showEmptyText } from 'ebaoferc';\r
const text1 = 'text1';\r
const text2 = null;\r
const text3 = undefined;\r
const text4 = 0;\r
const text5 = 18155982440;\r
export default () => (\r
  <div>\r
    <p>text1: {showEmptyText(text1)}</p>\r
    <p>text2: {showEmptyText(text2)}</p>\r
    <p>text3: {showEmptyText(text3)}</p>\r
    <p>text4: {showEmptyText(text4)}</p>\r
    <p>text5: {showEmptyText(text5, encryptPhoneNumber)}</p>\r
  </div>\r
);`},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{ebaoferc:p},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}},"src-utils-format-demo-5":{component:o.memo(o.lazy(i()(u()().mark(function s(){var t,a,n;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,58148));case 2:return t=m.sent,a=t.typeOfData,n={},m.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement("p",null,"typeOfData(1) ---> ",a(1)),o.createElement("p",null,"typeOfData(true) ---> ",a(!0)),o.createElement("p",null,"typeOfData(object) ---> ",a(n)),o.createElement("p",null,"typeOfData(Symbol(1)) ---> ",a(Symbol(1))),o.createElement("p",null,"typeOfData(new Date()) ---> ",a(new Date)))}});case 6:case"end":return m.stop()}},s)})))),asset:{type:"BLOCK",id:"src-utils-format-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { typeOfData } from 'ebaoferc';\r
const object = {}\r
export default () => (\r
  <div>\r
    <p>typeOfData(1) ---> {typeOfData(1)}</p>\r
    <p>typeOfData(true) ---> {typeOfData(true)}</p>\r
    <p>typeOfData(object) ---> {typeOfData(object)}</p>\r
    <p>typeOfData(Symbol(1)) ---> {typeOfData(Symbol(1))}</p>\r
    <p>typeOfData(new Date()) ---> {typeOfData(new Date())}</p>\r
    {/* {\r
      // \u6D4B\u8BD5\r
      console.log(typeOfData(1)); // Number\r
      console.log(typeOfData("1")); // String\r
      console.log(typeOfData(true)); // Boolean\r
      console.log(typeOfData(null)); // Null\r
      console.log(typeOfData(undefined)); // Undefined\r
      console.log(typeOfData(Symbol(1))); // Symbol\r
      console.log(typeOfData({})); // Object\r
      console.log(typeOfData([])); // Array\r
      console.log(typeOfData(function () {})); // Function\r
      console.log(typeOfData(new Date())); // Date\r
      console.log(typeOfData(new RegExp())); // RegExp\r
    } */}\r
  </div>\r
);`},ebaoferc:{type:"NPM",value:"0.3.4"}},entry:"index.tsx"},context:{ebaoferc:p},renderOpts:{compile:function(){var s=i()(u()().mark(function a(){var n,l=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(19).then(e.bind(e,4019));case 2:return r.abrupt("return",(n=r.sent).default.apply(n,l));case 3:case"end":return r.stop()}},a)}));function t(){return s.apply(this,arguments)}return t}()}}}},15584:function(O,c,e){e.r(c),e.d(c,{demos:function(){return i}});var I=e(15009),d=e.n(I),x=e(99289),_=e.n(x),u=e(67294),R=e(61517),i={"src-utils-demo-0":{component:u.memo(u.lazy(_()(d()().mark(function o(){return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",{default:function(){return u.createElement("span",null,"1")}});case 1:case"end":return p.stop()}},o)})))),asset:{type:"BLOCK",id:"src-utils-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`// import { Foo22 } from 'ebaoferc';\r
\r
export default () => <span>1</span>;`}},entry:"index.jsx"},context:{},renderOpts:{compile:function(){var o=_()(d()().mark(function p(){var f,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(19).then(e.bind(e,4019));case 2:return t.abrupt("return",(f=t.sent).default.apply(f,v));case 3:case"end":return t.stop()}},p)}));function D(){return o.apply(this,arguments)}return D}()}}}},91097:function(O,c,e){e.r(c),e.d(c,{texts:function(){return d}});var I=e(10294);const d=[{value:"\u6B64\u6587\u4EF6\u4E3A BI \u76F8\u5173\u65B9\u6CD5",paraId:0,tocIndex:0},{value:"\u5BFC\u5165\u5BF9\u5E94 utils",paraId:1,tocIndex:1},{value:`import { openFullscreen, closeFullscreen } from 'ebaoferc';
`,paraId:2,tocIndex:1}]},68716:function(O,c,e){e.r(c),e.d(c,{texts:function(){return d}});var I=e(79663);const d=[{value:"\u6C47\u603B\u4E00\u4E9B\u64CD\u4F5C\u6587\u4EF6\u7684\u5E38\u7528\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:"\u6839\u636E\u6587\u4EF6\u5730\u5740\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u7528\u4E8E\u5904\u7406\u540E\u7AEF\u76F4\u63A5\u8FD4\u56DE\u6587\u4EF6 url \u7684\u7B80\u5355\u4E1A\u52A1\u573A\u666F",paraId:1,tocIndex:2},{value:"\u6839\u636E\u6587\u4EF6\u7684 Blob \u4FE1\u606F\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u7528\u4E8E\u5904\u7406\u540E\u7AEF\u76F4\u63A5\u8FD4\u56DE\u6587\u4EF6\u5185\u5BB9\u7684\u4E1A\u52A1\u573A\u666F",paraId:2,tocIndex:3}]},84746:function(O,c,e){e.r(c),e.d(c,{texts:function(){return d}});var I=e(10556);const d=[{value:"\u6B64\u6587\u4EF6\u4E3A\u8868\u5355\u6821\u9A8C\u6B63\u5219",paraId:0,tocIndex:0},{value:"\u5BFC\u5165\u5BF9\u5E94 utils",paraId:1,tocIndex:1},{value:`import {\r
  AmountRule,\r
  IdRule,\r
  NaturalnumRule,\r
  PhoneRule,\r
  PositiveIntegerRule,\r
  RequiredRules,\r
  LandlineRule,\r
  PhoneAndLandlineRule,\r
} from 'ebaoferc';
`,paraId:2,tocIndex:1}]},74423:function(O,c,e){e.r(c),e.d(c,{texts:function(){return d}});var I=e(10504);const d=[{value:"\u6B64\u6587\u4EF6\u65B9\u6CD5\u4E3A\u683C\u5F0F\u5316\uFF0C\u8F6C\u5316\u6570\u636E",paraId:0,tocIndex:0},{value:"\u5BFC\u5165\u5BF9\u5E94 utils",paraId:1,tocIndex:2},{value:`import { resolveAlias } from 'ebaoferc';
`,paraId:2,tocIndex:2},{value:"\u6839\u636E\u4F20\u5165\u53C2\u6570 aliasMap\uFF0C\u6784\u5EFA\u4E00\u4E2A\u65B0 map \u8FD4\u56DE",paraId:3,tocIndex:2},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"obj",paraId:4,tocIndex:4},{value:"\u539F\u6570\u636E map",paraId:4,tocIndex:4},{value:"Object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"aliasMap",paraId:4,tocIndex:4},{value:"\u4E92\u76F8\u8F6C\u5316\u7684\u952E\u503C { value: 'key' } \u628A value \u8F6C\u4E3A key",paraId:4,tocIndex:4},{value:"Object",paraId:4,tocIndex:4},{value:"default",paraId:4,tocIndex:4},{value:"\u5224\u65AD\u662F\u5426\u662F null \u6216\u8005 Undefined\u3002\u8FD4\u56DE Boolean",paraId:5,tocIndex:5},{value:"\u5BFC\u5165\u5BF9\u5E94 utils",paraId:6,tocIndex:6},{value:`import { isNullOrUndefined } from 'ebaoferc';
`,paraId:7,tocIndex:6},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:8},{value:"target",paraId:8,tocIndex:8},{value:"\u6570\u636E",paraId:8,tocIndex:8},{value:"any",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"\u5355\u503C\u8F6C\u4E3A\u6570\u7EC4",paraId:9,tocIndex:9},{value:"\u8FB9\u754C\u60C5\u51B5\u7279\u6B8A\u68B3\u7406",paraId:10,tocIndex:9},{value:"\u4F20\u5165 null \u6216 undefined\uFF0C\u8FD4\u56DE\u7A7A\u6570\u7EC4",paraId:11,tocIndex:9},{value:"\u4F20\u5165\u7684\u503C\u672C\u8EAB\u4E3A\u6570\u7EC4\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE",paraId:11,tocIndex:9},{value:"\u6570\u7EC4\u8F6C\u4E3A\u5355\u503C\uFF08\u8FD4\u56DE\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF09",paraId:12,tocIndex:10},{value:"\u8FB9\u754C\u60C5\u51B5\u7279\u6B8A\u68B3\u7406",paraId:13,tocIndex:10},{value:"\u82E5\u4F20\u5165\u7684\u503C\u4E0D\u662F\u6570\u7EC4\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE",paraId:14,tocIndex:10},{value:"\u8868\u683C\u5E8F\u53F7\uFF0C\u652F\u6301\u7FFB\u9875\uFF0C\u652F\u6301\u5012\u5E8F",paraId:15,tocIndex:11},{value:`import { computedTableRowSerialNo } from 'ebaoferc';
`,paraId:16,tocIndex:11},{value:"\u53C2\u6570",paraId:17,tocIndex:13},{value:"\u8BF4\u660E",paraId:17,tocIndex:13},{value:"\u7C7B\u578B",paraId:17,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:13},{value:"pagination",paraId:17,tocIndex:13},{value:"\u8868\u683C\u7684\u5206\u9875\u6570\u636E",paraId:17,tocIndex:13},{value:"Pagination",paraId:17,tocIndex:13},{value:"-",paraId:17,tocIndex:13},{value:"index",paraId:17,tocIndex:13},{value:"\u8868\u683C\u7684 index",paraId:17,tocIndex:13},{value:"number",paraId:17,tocIndex:13},{value:"-",paraId:17,tocIndex:13},{value:"isReverseOrder",paraId:17,tocIndex:13},{value:"\u987A\u5E8F",paraId:17,tocIndex:13},{value:"Boolean",paraId:17,tocIndex:13},{value:"false",paraId:17,tocIndex:13},{value:"\u624B\u673A\u53F7\u4E2D\u95F4 4 \u4F4D\u52A0\u5BC6\uFF0C*",paraId:18,tocIndex:14},{value:`import { encryptPhoneNumber } from 'ebaoferc';
`,paraId:19,tocIndex:14},{value:"\u53C2\u6570",paraId:20,tocIndex:16},{value:"\u8BF4\u660E",paraId:20,tocIndex:16},{value:"\u7C7B\u578B",paraId:20,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:20,tocIndex:16},{value:"phone",paraId:20,tocIndex:16},{value:"\u624B\u673A\u53F7",paraId:20,tocIndex:16},{value:"string",paraId:20,tocIndex:16},{value:"-",paraId:20,tocIndex:16},{value:"\u7EDF\u4E00\u5C55\u793A\u6570\u636E\u3002\u5982\u679C\u662F null \u6216\u8005 undefined\uFF0C\u5C55\u793A\u4E3A -\u3002\u53EF\u4EE5\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u5904\u7406\u6570\u636E\u5E76\u5C55\u793A\u3002",paraId:21,tocIndex:17},{value:`import { showEmptyText } from 'ebaoferc';
`,paraId:22,tocIndex:17},{value:"\u53C2\u6570",paraId:23,tocIndex:19},{value:"\u8BF4\u660E",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"\u9ED8\u8BA4\u503C",paraId:23,tocIndex:19},{value:"txt",paraId:23,tocIndex:19},{value:"\u5C55\u793A\u7684\u6587\u5B57",paraId:23,tocIndex:19},{value:"string",paraId:23,tocIndex:19},{value:"-",paraId:23,tocIndex:19},{value:"computedShow",paraId:23,tocIndex:19},{value:"\u5904\u7406\u6587\u5B57\u7684\u65B9\u6CD5",paraId:23,tocIndex:19},{value:"string",paraId:23,tocIndex:19},{value:"-",paraId:23,tocIndex:19},{value:`\u5224\u65AD\u6570\u636E\u7C7B\u578B\r
Number/String/Boolean/Null/Undefined/Array/Object/Symbol/Date/RegExp/FormData`,paraId:24,tocIndex:20},{value:`import { typeOfData } from 'ebaoferc';
`,paraId:25,tocIndex:20},{value:"\u53C2\u6570",paraId:26,tocIndex:22},{value:"\u8BF4\u660E",paraId:26,tocIndex:22},{value:"\u7C7B\u578B",paraId:26,tocIndex:22},{value:"\u9ED8\u8BA4\u503C",paraId:26,tocIndex:22},{value:"data",paraId:26,tocIndex:22},{value:"\u8BF4\u4E00\u53E5",paraId:26,tocIndex:22},{value:"any",paraId:26,tocIndex:22},{value:"-",paraId:26,tocIndex:22}]},41205:function(O,c,e){e.r(c),e.d(c,{texts:function(){return d}});var I=e(61517);const d=[{value:`todo\r
1`,paraId:0,tocIndex:0},{value:`$ npm i ebaoferc
`,paraId:1,tocIndex:2}]}}]);
