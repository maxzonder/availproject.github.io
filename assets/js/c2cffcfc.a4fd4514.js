"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[6441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=i,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(4996);const o={id:"staking",title:"How to Stake Your Validator",sidebar_label:"Stake Your Validator",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,l={unversionedId:"operate/validator/staking",id:"operate/validator/staking",title:"How to Stake Your Validator",description:"Learn about running an Avail validator using binaries.",source:"@site/docs/operate/validator/0030-staking.md",sourceDirName:"operate/validator",slug:"/operate/validator/staking",permalink:"/operate/validator/staking",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0030-staking.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1696365534,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:30,frontMatter:{id:"staking",title:"How to Stake Your Validator",sidebar_label:"Stake Your Validator",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Using Docker",permalink:"/operate/validator/docker"},next:{title:"Backup Your Validator",permalink:"/operate/validator/backup"}},s={},p=[{value:"Step 1: Prepare for Staking",id:"step-1-prepare-for-staking",level:2},{value:"Create Avail Accounts",id:"create-avail-accounts",level:3},{value:"Bond Your Funds",id:"bond-your-funds",level:3},{value:"Step 2: Manage Session Keys",id:"step-2-manage-session-keys",level:2},{value:"Rotating Session Keys",id:"rotating-session-keys",level:3},{value:"Submit Session Keys",id:"submit-session-keys",level:3},{value:"Step 3: Register as a Validator",id:"step-3-register-as-a-validator",level:2},{value:"Step 4: Start Validation",id:"step-4-start-validation",level:2},{value:"Verify Validator Status",id:"verify-validator-status",level:3},{value:"Monitor Validator in Action",id:"monitor-validator-in-action",level:3},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide offers a step-by-step walkthrough on how to stake your Avail validator.\nIt covers essential steps such as bonding your funds, managing session keys, and initiating the validation process."),(0,i.kt)("h2",{id:"step-1-prepare-for-staking"},"Step 1: Prepare for Staking"),(0,i.kt)("p",null,"Before you can become an active validator, you need to bond your funds to your node. This involves creating two separate Avail accounts: a ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")," account for holding your funds and a ",(0,i.kt)("inlineCode",{parentName:"p"},"controller")," account for managing staking actions."),(0,i.kt)("h3",{id:"create-avail-accounts"},"Create Avail Accounts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Kate network explorer at ",(0,i.kt)("a",{parentName:"li",href:"https://kate.avail.tools/"},(0,i.kt)("ins",null,"kate.avail.tools")),"."),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"stash")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"controller")," account. The ",(0,i.kt)("inlineCode",{parentName:"li"},"stash")," account should ideally be a cold wallet, while the ",(0,i.kt)("inlineCode",{parentName:"li"},"controller")," can be a hot wallet.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The controller key is responsible for managing staking activities and executing transactions,\nincluding the payment of transaction fees.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The stash key primarily safeguards your funds and should ideally be stored in a cold wallet or\nkept offline. It is not recommended to use the stash key for routine account activities like submitting\nextrinsics."))))),(0,i.kt)("li",{parentName:"ol"},"Ensure both accounts have sufficient funds to cover transaction fees.")),(0,i.kt)("admonition",{title:"Funding Accounts",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Keep the majority of your funds in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")," account and only a minimal amount in the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller"),"\naccount to cover transaction fees.")),(0,i.kt)("p",null,"For validators participating in our testnet, contact the Avail team to have funds\ntransferred."),(0,i.kt)("img",{src:"img/avail/stash-controller-accounts.png",width:"200%",height:"200%"}),(0,i.kt)("h3",{id:"bond-your-funds"},"Bond Your Funds"),(0,i.kt)("admonition",{title:"Bonding Tips",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Don't bond all your AVL tokens as you'll need some for transaction fees. You can always bond more tokens later.\nNote: Withdrawing any bonded amount is subject to the duration of the unbonding period.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Staking")," tab in the Explorer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Stash")," to initiate the bonding process."),(0,i.kt)("img",{src:"img/avail/staking-bond-1.png",width:"100%",height:"100%"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the bonding preferences."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stash Account:")," This is your designated Stash account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controller Account:")," Choose your Controller account, which only requires a minimal amount of AVL to initiate and cease validation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value Bonded:")," Specify the quantity of AVL tokens you wish to bond from your Stash account. You can stake any amount that exceeds the minimum requirement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Destination:")," This is the account where your validation rewards will be sent. For more details, visit ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-staking#reward-distribution"},"this link"),"."))))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"After filling in the required fields, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Bond"),". You will be prompted to enter your wallet password. Input your password and then click ",(0,i.kt)("strong",{parentName:"li"},"Sign and Submit"),".")),(0,i.kt)("img",{src:"img/avail/staking-bond-3.png",width:"100%",height:"100%"}),(0,i.kt)("p",null,"You should now be ready to generate your session keys. Note the\n",(0,i.kt)("strong",{parentName:"p"},"Session Key"),' button, in the next step we will generate a key to\nsubmit here.  <img src="img/avail/staking-bond-4.png width="100%" height="100%"/>'),(0,i.kt)("h2",{id:"step-2-manage-session-keys"},"Step 2: Manage Session Keys"),(0,i.kt)("p",null,"After your node is fully synced, you'll need to rotate and submit your session keys."),(0,i.kt)("h3",{id:"rotating-session-keys"},"Rotating Session Keys"),(0,i.kt)("p",null,"Run the following command on your node machine:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ensure the node is running with the default HTTP RPC port configured.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,i.kt)("p",null,"The result is the concatenation of the four public keys. Save the hex-encoded\nresult for the next step and ",(0,i.kt)("strong",{parentName:"p"},"restart your node"),"."),(0,i.kt)("h3",{id:"submit-session-keys"},"Submit Session Keys"),(0,i.kt)("p",null,"You must inform the network of your Session keys by signing and submitting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"setKeys")," extrinsic. This action associates your validator with your Controller account."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate back to the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://kate.avail.tools/#/staking/actions"},(0,i.kt)("ins",null,"Staking")))," tab."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Session Key")," and enter the hex-encoded result."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Session Key")," and enter your password when prompted.")),(0,i.kt)("img",{src:"img/avail/set-session-keys.png",width:"100%",height:"100%"}),(0,i.kt)("p",null,"After submitting the extrinsic, you'll observe that ",(0,i.kt)("strong",{parentName:"p"},"Set Session Key")," changes\nto ",(0,i.kt)("strong",{parentName:"p"},"Validate"),". Make sure your node is fully synchronized before proceeding further."),(0,i.kt)("h2",{id:"step-3-register-as-a-validator"},"Step 3: Register as a Validator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Validate")," on the ",(0,i.kt)("strong",{parentName:"li"},"Staking")," tab.")),(0,i.kt)("img",{src:"img/avail/start-validating.png",width:"100%",height:"100%"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Set your validator commission percentage."),(0,i.kt)("li",{parentName:"ol"},"Enter your password and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Validate"),".")),(0,i.kt)("img",{src:"img/avail/set-validate-commission.png",width:"100%",height:"100%"}),(0,i.kt)("h2",{id:"step-4-start-validation"},"Step 4: Start Validation"),(0,i.kt)("p",null,"Your validator is now prepared to begin the validation process. If you wish to discontinue,\nyou can click the stop icon. Please note that the Avail interface doesn't automatically verify\nif your node is synchronized; you'll need to confirm this manually. If your node has sufficient\nstake, the Avail blockchain will likely select it in the next epoch or two."),(0,i.kt)("img",{src:"img/avail/validator-ready.png",width:"100%",height:"100%"}),(0,i.kt)("h3",{id:"verify-validator-status"},"Verify Validator Status"),(0,i.kt)("p",null,"To verify that your node is ready for possible selection at the end of\nthe next era, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://kate.avail.tools/#/staking"},(0,i.kt)("ins",null,"Staking")))," tab and\nselect ",(0,i.kt)("inlineCode",{parentName:"li"},"Waiting")," to see if your account appears."),(0,i.kt)("li",{parentName:"ol"},"If your node has enough stake, it will be elected in the next era or two.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"A new set of validators is chosen every ",(0,i.kt)("strong",{parentName:"p"},"era"),", based on the amount staked.")))),(0,i.kt)("img",{src:"img/avail/validator-waiting-list.png",width:"100%",height:"100%"}),(0,i.kt)("h3",{id:"monitor-validator-in-action"},"Monitor Validator in Action"),(0,i.kt)("p",null,"Once your validator node has accrued enough stake, it will be elected for validation.\nBelow is an example image of an elected validator node actively producing blocks."),(0,i.kt)("p",null,"In addition, please check out the guide on validator monitoring available\n",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/monitor"},(0,i.kt)("ins",null,"here")),"."),(0,i.kt)("img",{src:"img/avail/validator-active-set.png",width:"100%",height:"100%"}),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Congratulations on successfully setting up your Avail Validator node!"),(0,i.kt)("p",null,"As you move forward, here are some essential actions to consider:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Backup Your Validator"),": Ensure you have a secure backup of your validator settings and keys. Refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/backup"},(0,i.kt)("ins",null,"Backup Guide"))," for detailed steps.\n")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Start Monitoring"),": If you haven't already, set up monitoring tools to keep track of your validator's performance. Check out the ",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/monitor"},(0,i.kt)("ins",null,"Monitoring Guide"))," for recommendations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Join the Community"),": Connect with other validators and the Avail team on the official ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/y6fHnxZQX8"},(0,i.kt)("ins",null,"Discord Channel")),". It's a great place to share experiences, ask questions, and get updates."))))}c.isMDXComponent=!0}}]);