"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||l;return n?i.createElement(g,r(r({ref:t},s),{},{components:n})):i.createElement(g,r({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));n(4996);const l={id:"light-client-setup",title:"Run a Light Client",sidebar_label:"Run a Light Client",sidebar_position:1,description:"Learn how to run an Avail Light Client",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"light-client-setup"},r=void 0,o={unversionedId:"join-the-network/run-avail/light-client-setup",id:"join-the-network/run-avail/light-client-setup",title:"Run a Light Client",description:"Learn how to run an Avail Light Client",source:"@site/docs/join-the-network/run-avail/light-client.md",sourceDirName:"join-the-network/run-avail",slug:"/join-the-network/run-avail/light-client-setup",permalink:"/join-the-network/run-avail/light-client-setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"light-client-setup",title:"Run a Light Client",sidebar_label:"Run a Light Client",sidebar_position:1,description:"Learn how to run an Avail Light Client",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"light-client-setup"},sidebar:"defaultSidebar",previous:{title:"Types of Nodes",permalink:"/join-the-network/node-types"},next:{title:"Run a Full Node",permalink:"/join-the-network/run-avail/full-node-setup"}},c={},p=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Building From Source",id:"building-from-source",level:2}],s={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,a.kt)("p",null,"Follow these steps to connect a light client to the Kate testnet."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the client binary and config file for the network you want to join:"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Client Binary"),(0,a.kt)("th",{parentName:"tr",align:null},"Config File"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kate Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail-light/releases/tag/v1.4.3"},"v1.4.3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{target:"_blank",href:"/configs/kate/avail-light-1.4.3/config.yaml",download:!0},"Config")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unpack both files into a folder, and run the client (adjust for\nplatform or version in the downloaded binary name):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"   ./avail-light -c config.yaml\n")),(0,a.kt)("p",{parentName:"li"},"The client output should look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'2023-06-04T02:56:31.871284Z  INFO avail_light::telemetry: Metrics server on http://0.0.0.0:9520/metrics\n2023-06-04T02:56:31.884271Z  INFO avail_light::http: RPC running on http://127.0.0.1:7000\n2023-06-04T02:56:31.884386Z  INFO avail_light::network: Local peer id: PeerId("12D3KooWQ77VEayXfSPWcj6ucAGcjZRTL8ANmtjsuULoyToGSBoo"). Public key: Ed25519(PublicKey(compressed): d44de4113b372855a655f1675325379705aa7a273698194e8e6814dab7791a).\n2023-06-04T02:56:31.884605Z  INFO Server::run{addr=127.0.0.1:7000}: warp::server: listening on http://127.0.0.1:7000\n2023-06-04T02:56:31.892181Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/127.0.0.1/udp/37000/quic-v1"\n2023-06-04T02:56:31.892487Z  INFO avail_light: Bootstraping the DHT with bootstrap nodes...\n2023-06-04T02:56:31.892487Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/192.168.1.146/udp/37000/quic-v1"\n2023-06-04T02:56:31.892540Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/127.0.0.1/tcp/37000"\n2023-06-04T02:56:31.892745Z  INFO avail_light::network::event_loop: Local node is listening on "/ip4/192.168.1.146/tcp/37000"\n2023-06-04T02:56:42.220179Z  INFO avail_light::rpc: Connection established to the node: wss://kate-beta.avail.tools:443/ws <v1.6.0-99b85257d6b/data-avail/9>\n2023-06-04T02:56:42.444576Z  INFO avail_light::light_client: Starting light client...\n2023-06-04T02:56:43.453935Z  INFO avail_light::subscriptions: Received finalized block header header.number=2074\n2023-06-04T02:56:43.455236Z  INFO avail_light::light_client: Processing finalized block block_number=2074 block_delay=0\n2023-06-04T02:56:43.456055Z  INFO avail_light::light_client: Random cells generated: 4 block_number=2074 cells_requested=4\n2023-06-04T02:56:43.617885Z  INFO avail_light::light_client: Number of cells fetched from DHT: 0 block_number=2074 cells_from_dht=0\n2023-06-04T02:56:43.820098Z  INFO avail_light::light_client: Number of cells fetched from RPC: 4 block_number=2074 cells_from_rpc=4\n2023-06-04T02:56:43.889260Z  INFO avail_light::light_client: Completed 4 verification rounds in     433.968ms block_number=2074\n2023-06-04T02:56:43.889395Z  INFO avail_light::light_client: Confidence factor: 93.75 block_number=2074 confidence=93.75\n2023-06-04T02:56:43.889495Z  INFO avail_light::light_client: Partition cells received. Time elapsed:    0ns block_number=2074 partition_retrieve_time_elapsed=0.0 partition_cells_fetched=4\n2023-06-04T02:56:44.050133Z  INFO avail_light::light_client: DHT PUT operation success rate: inf block_number=2074\n2023-06-04T02:56:44.050211Z  INFO avail_light::light_client: 4 cells inserted into DHT. Time elapsed:   160.697ms block_number=2074 partition_dht_insert_time_elapsed=0.160697\n')))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That's it! There is no step 3. You're running the light client \ud83c\udf89"),(0,a.kt)("p",{parentName:"li"},"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-light#config-reference"},"config\nreference"),'\nfor available configuration options. And check out the "Using Avail"\nsection of these docs for guides and examples for how to interact with\nAvail, embed the light client into your application, and more.'))),(0,a.kt)("h2",{id:"building-from-source"},"Building From Source"),(0,a.kt)("p",null,"We recommend the binary download above because it's faster and easier,\nbut if you need to build the client (e.g. for a platform we don't have\nbinaries for), these are the steps to follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure have Rust installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"curl https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustc --version # verify rust is working, print the installed version\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the light client ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-light"},"git repository"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/availproject/avail-light.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Buid and run the light client:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd avail-light\ncargo run\n")),(0,a.kt)("p",{parentName:"li"},"The client will generate a default ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),' file, but it will\nnot be connected to any network. Replace the config with the\nappropriate one from the "Quick Setup" section above, and re-run\nthe client. That\'s it!'))))}h.isMDXComponent=!0}}]);