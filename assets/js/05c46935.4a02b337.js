"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[3510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"balance-transfers",title:"How to Perform Balance Transfers on Avail",sidebar_label:"Balance Transfers",description:"Learn how to perform balance transfers on the Goldberg testnet.",keywords:["docs","avail","explorer","balance","transfers","send","receive","transaction"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,s={unversionedId:"about/balance-transfers",id:"about/balance-transfers",title:"How to Perform Balance Transfers on Avail",description:"Learn how to perform balance transfers on the Goldberg testnet.",source:"@site/docs/about/balance-transfers.md",sourceDirName:"about",slug:"/about/balance-transfers",permalink:"/about/balance-transfers",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/balance-transfers.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1701484879,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{id:"balance-transfers",title:"How to Perform Balance Transfers on Avail",sidebar_label:"Balance Transfers",description:"Learn how to perform balance transfers on the Goldberg testnet.",keywords:["docs","avail","explorer","balance","transfers","send","receive","transaction"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Set Your Identity",permalink:"/about/identity"},next:{title:"Nomination Pools",permalink:"/about/nomination-pools"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Transferring Funds Using Avail-JS",id:"transferring-funds-using-avail-js",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Balance transfers are a method for transferring funds from one account to another. This guide will walk you through the process using ",(0,r.kt)("a",{parentName:"p",href:"https://goldberg.avail.tools/"},(0,r.kt)("ins",null,"Avail-JS UI")),". Before you begin, ensure you have ",(0,r.kt)("a",{parentName:"p",href:"/about/accounts"},(0,r.kt)("ins",null,"created an account"))," and have ",(0,r.kt)("a",{parentName:"p",href:"/about/faucet"},(0,r.kt)("ins",null,"funds available"))," for transfer."),(0,r.kt)("admonition",{title:"Clash of Nodes",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the balance transfer challenge part of ",(0,r.kt)("a",{parentName:"p",href:"/category/clash-of-nodes/"},(0,r.kt)("ins",null,"Clash of Nodes")),", participants must follow these guidelines:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Token Acquisition"),": To participate in balance transfers, tokens must be acquired through the designated ",(0,r.kt)("a",{parentName:"li",href:"/about/faucet"},(0,r.kt)("ins",null,"faucet")),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Faucet Transfer Limit"),": Participants can obtain tokens from the ",(0,r.kt)("a",{parentName:"li",href:"/about/faucet"},(0,r.kt)("ins",null,"faucet"))," only once per day."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Regular Engagement"),": Participants are encouraged to engage with the challenge daily. The daily acquisition of tokens from the faucet and subsequent transfers cultivate consistent participation."))),(0,r.kt)("admonition",{title:"Using SubWallet",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.subwallet.app/"},(0,r.kt)("ins",null,"SubWallet"))," currently supports the Goldberg testnet and can be used for balance transfers.")),(0,r.kt)("p",null,"These third-party wallets have integrated or are integrating Avail and support a variety of features. You should do your own due diligence before using them. The official Avail core team cannot provide assistance for issues with these wallets or other non-native wallets."),(0,r.kt)("p",null,"Please view the third-party content disclaimer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/availproject/availproject.github.io/blob/main/CONTENT_DISCLAIMER.md"},(0,r.kt)("ins",null,"here")),"."),(0,r.kt)("h2",{id:"transferring-funds-using-avail-js"},"Transferring Funds Using Avail-JS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To withdraw test AVL and send funds from your account, select "Transfer" in the Accounts menu, or click the "Send" button on the Accounts page adjacent to the account you wish to send from.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Both options lead to a pop-up window where you can specify the recipient\'s account and the amount to be sent. If accessed via the "Send" button, the "Send from account" is pre-selected. For the recipient\'s account, choose from the drop-down menu, which includes your accounts and those in your Address Book, or paste an address directly. The recipient\'s account is not required to be in your Address Book.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'After entering all necessary details, click on the "Make Transfer" button. This action opens a pop-up window displaying the expected transaction fees.'))),(0,r.kt)("admonition",{title:"Minimum Balance",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On Avail, similar to other Substrate-based chains, an account must hold a minimum balance to stay active. This minimum, known as the Existential Deposit (ED), is set at ",(0,r.kt)("strong",{parentName:"p"},"0.00001 AVL on the Goldberg testnet"),". The ED helps prevent blockchain bloat from accounts with tiny or zero balances, thereby maintaining network efficiency and low fees. If an account's balance falls below this threshold, it gets deactivated, and the remaining balance is removed. Reactivating the account requires a deposit larger than the ED, but this won't restore the lost funds.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'When you are ready to execute your transaction, enter your password and click on the "Sign and Submit" button.')))}d.isMDXComponent=!0}}]);