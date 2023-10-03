"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[8820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),v=r,h=u["".concat(c,".").concat(v)]||u[v]||d[v]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},5892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4996);const o={id:"explorer",title:"How to Use the Kate Testnet Explorer",sidebar_label:"Use the Explorer",description:"A comprehensive guide on using the Avail Explorer to interact with the Avail network.",keywords:["docs","avail","explorer","accounts"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"about/explorer",id:"about/explorer",title:"How to Use the Kate Testnet Explorer",description:"A comprehensive guide on using the Avail Explorer to interact with the Avail network.",source:"@site/docs/about/explorer.md",sourceDirName:"about",slug:"/about/explorer",permalink:"/about/explorer",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/explorer.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1696365534,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{id:"explorer",title:"How to Use the Kate Testnet Explorer",sidebar_label:"Use the Explorer",description:"A comprehensive guide on using the Avail Explorer to interact with the Avail network.",keywords:["docs","avail","explorer","accounts"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Create an Account",permalink:"/about/accounts"},next:{title:"Get Testnet Tokens",permalink:"/about/faucet"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Navigation",id:"quick-navigation",level:3},{value:"Inspect Network Data",id:"inspect-network-data",level:2},{value:"Recent Blocks Overview",id:"recent-blocks-overview",level:3},{value:"Block Details",id:"block-details",level:3},{value:"Manage Accounts",id:"manage-accounts",level:2},{value:"Participate in Governance",id:"participate-in-governance",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Manual Transactions and RPC Calls",id:"manual-transactions-and-rpc-calls",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://kate.avail.tools/"},(0,r.kt)("ins",null,"Kate Testnet Explorer"))," serves as a powerful interface for interacting with the Avail network. Whether you're a developer, a validator, or an end-user, the explorer provides you with the tools to inspect network activities, manage accounts, and participate in governance. This guide will walk you through its key features."),(0,r.kt)("h3",{id:"quick-navigation"},"Quick Navigation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inspect-network-data"},"Inspect Network Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manage-accounts"},"Manage Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#participate-in-governance"},"Participate in Governance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#advanced-features"},"Advanced Features"))),(0,r.kt)("h2",{id:"inspect-network-data"},"Inspect Network Data"),(0,r.kt)("h3",{id:"recent-blocks-overview"},"Recent Blocks Overview"),(0,r.kt)("p",null,"The default page of the explorer displays the most recently produced blocks, allowing you to monitor network activity in real-time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Avail Explorer",src:a(2776).Z,width:"1774",height:"856"})),(0,r.kt)("h3",{id:"block-details"},"Block Details"),(0,r.kt)("p",null,'Clicking on a block number (or block "height") will open a detailed view of that block, including transactions, validators, and more.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Avail Explorer Block Detail",src:a(9748).Z,width:"1988",height:"904"})),(0,r.kt)("h2",{id:"manage-accounts"},"Manage Accounts"),(0,r.kt)("p",null,"The explorer allows you to create, manage, and recover accounts. You can also initiate transactions, stake tokens, and more. To learn how to create an account, check out the ",(0,r.kt)("a",{parentName:"p",href:"/about/accounts"},(0,r.kt)("ins",null,"Create and Manage Accounts guide")),"."),(0,r.kt)("h2",{id:"participate-in-governance"},"Participate in Governance"),(0,r.kt)("p",null,"From proposals to referenda, the explorer provides you with the tools to actively participate in network governance."),(0,r.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,r.kt)("h3",{id:"manual-transactions-and-rpc-calls"},"Manual Transactions and RPC Calls"),(0,r.kt)("p",null,"For developers and advanced users, the explorer offers features like manually submitting ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"transactions"),", making RPC calls, and other debugging tasks."),(0,r.kt)("admonition",{title:"Confidence",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The explorer hosts a light client that performs Data Availability Sampling (DAS) to verify data availability. The very latest blocks may not display a confidence score until this process is complete.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The Avail Explorer is a versatile tool for anyone involved in the Avail network. Whether you're inspecting blocks, managing accounts, or participating in governance, the explorer offers a comprehensive set of features to meet your needs."))}d.isMDXComponent=!0},9748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/explorer-block-detail-041b2790b360742cc6e79fcf7960df94.png"},2776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/explorer-a32d5226febad91a35cc2bdd1b2e44a5.png"}}]);