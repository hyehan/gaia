(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{662:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cosmos-hub-parameter-change-best-practices-wiki"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-parameter-change-best-practices-wiki"}},[e._v("#")]),e._v(" Cosmos Hub Parameter-Change Best Practices & Wiki")]),e._v(" "),a("p",[e._v("This Cosmos Hub educational documentation aims to outline the "),a("a",{attrs:{href:"#params-wiki"}},[e._v("Hub's parameters")]),e._v(", describe their functions, and describe the potential implications of modifying each parameter. This documentation also aims to provide "),a("a",{attrs:{href:"#drafting-a-parameter-change-proposal"}},[e._v("guidelines for creating and assessing parameter-change proposals")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("This documentation has not had adequate review from experts or testing from participants, so please be cautious when using it.")]),e._v(" "),a("a",{attrs:{href:"https://forum.cosmos.network/t/gwg-cosmos-hub-parameters-wiki/3170",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discuss its development here"),a("OutboundLink")],1),e._v(" and please provide feedback either in the forum or by opening a Github issue. If you are technically inclined, this is the full "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of modules"),a("OutboundLink")],1),e._v(" in the Cosmos SDK.")]),e._v(" "),a("h2",{attrs:{id:"drafting-a-parameter-change-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drafting-a-parameter-change-proposal"}},[e._v("#")]),e._v(" Drafting a Parameter Change Proposal")]),e._v(" "),a("p",[e._v("Drafting and submitting a parameter-change governance proposal involves two kinds of risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way. The objective of this documentation is to reduce these risks by preparing participants for what to pay attention to and for what information to consider in a proposal. Ideally, a proposal should only fail to pass because the voters 1) are aware and engaged and 2) are able to make an informed decision to vote down the proposal.")]),e._v(" "),a("p",[e._v("If you are considering drafting a proposal, you should review the general\nbackground on drafting and submitting a proposal:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/governance/overview.html"}},[e._v("How the voting process and governance mechanism works")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/best_practices.html"}},[e._v("How to draft your proposal and engage with the Cosmos community about it")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/submitting.html"}},[e._v("How to submit your proposal")])],1)]),e._v(" "),a("p",[e._v("You should also review details specific to Parameter Change proposals:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#params-wiki"}},[e._v("Params Wiki")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/best_practices.html"}},[e._v("Best practices for a Parameter Change Proposal")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/formatting.html"}},[e._v("How to format Parameter Change Proposals")])],1)]),e._v(" "),a("h2",{attrs:{id:"params-wiki"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params-wiki"}},[e._v("#")]),e._v(" Params Wiki")]),e._v(" "),a("p",[e._v("The complete parameters of the Cosmos Hub are split up into different modules.\nEach module has its own set of parameters. Any of them can be updated with a\nParams Change Proposal.")]),e._v(" "),a("p",[e._v("There are currently 8 modules active in the Cosmos Hub with parameters that may be altered via governance proposal:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Auth.html"}},[e._v("auth")]),e._v(" - Authentication of accounts and transactions")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Bank.html"}},[e._v("bank")]),e._v(" - Token transfer functionalities")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Governance.html"}},[e._v("gov")]),e._v(" - On-chain governance proposals and voting")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Staking.html"}},[e._v("staking")]),e._v(" - Proof-of-stake layer")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Slashing.html"}},[e._v("slashing")]),e._v(" - Validator punishment mechanisms")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Distribution.html"}},[e._v("distribution")]),e._v(" - Fee distribution and staking token provision distribution")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Crisis.html"}},[e._v("crisis")]),e._v(" - Halting the blockchain under certain circumstances (ie. if an invariant is broken)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/governance/params-change/Mint.html"}},[e._v("mint")]),e._v(" - Creation of new units of staking token")],1)]),e._v(" "),a("p",[e._v("There is an "),a("RouterLink",{attrs:{to:"/governance/params-change/param_index.html"}},[e._v("index of these parameters here")]),e._v(".")],1),e._v(" "),a("p",[e._v("The value or setting for each parameter may be verified in the chain's genesis file, "),a("a",{attrs:{href:"https://raw.githubusercontent.com/cosmos/launch/master/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("found here"),a("OutboundLink")],1),e._v(". These are the parameter settings that the latest Cosmos Hub chain launched with, and will remain so unless a governance proposal or software upgrade changes them.")]),e._v(" "),a("p",[e._v("There are also ways to query the current settings for each module's parameter(s). Some can be queried with the command line program "),a("a",{attrs:{href:"./gaiad"}},[a("code",[e._v("gaiad")])]),e._v(", but I'm still exploring the ways that these settings can be queried. Want to help? I've opened this up as an issue "),a("a",{attrs:{href:"https://github.com/gavinly/CosmosParametersWiki/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". You can begin by using the command "),a("code",[e._v("gaia q [module] -h")]),e._v(" to get help about the subcommands for the module you want to query. For example, "),a("code",[e._v("gaiad q staking params --chain-id cosmoshub-3 --node http://51.79.82.228:26657")]),e._v(" returns the settings of four parameters:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dW5ib25kaW5nX3RpbWU6IDUwNGgwbTBzCm1heF92YWxpZGF0b3JzOiAxMjUKbWF4X2VudHJpZXM6IDcKYm9uZF9kZW5vbTogdWF0b20K"}}),e._v(" "),a("h2",{attrs:{id:"the-voting-process-governance-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-voting-process-governance-mechanism"}},[e._v("#")]),e._v(" The Voting Process & Governance Mechanism")]),e._v(" "),a("p",[e._v("The criteria for submitting a parameter-change proposal and the subsequent voting conditions are the same as those for signalling (text-based) proposals and community-spend proposals. Details about the deposit period can be found "),a("RouterLink",{attrs:{to:"/governance/overview.html#_1-deposit-period"}},[e._v("here")]),e._v(", and voting period "),a("RouterLink",{attrs:{to:"/governance/overview.html#what-determines-whether-or-not-a-governance-proposal-passes"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("If a paramater-change proposal is successful, the change takes effect immediately upon completion of the voting period.")]),e._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("ul",[a("li",[e._v("You cannot currently query the "),a("code",[e._v("bank")]),e._v(" module's parameter, which is "),a("code",[e._v("sendenabled")]),e._v(". You also cannot query the "),a("code",[e._v("crisis")]),e._v(" module's parameters.")]),e._v(" "),a("li",[e._v("You will need to compile "),a("a",{attrs:{href:"./gaiad"}},[a("code",[e._v("gaiad")])]),e._v(" from source into a binary file executable by your operating system eg. MacOS, Windows, Linux")]),e._v(" "),a("li",[e._v("You will need to indicate which chain you are querying, and currently this is "),a("code",[e._v("--chain-id cosmoshub-3")])]),e._v(" "),a("li",[e._v("You will need to connect to a full node. If gaiad isn't already configured for this, you can use this tag in your command "),a("code",[e._v("--node [address]:26657")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"full-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-nodes"}},[e._v("#")]),e._v(" Full nodes")]),e._v(" "),a("p",[e._v("Running a full node can be difficult for those not technically-inclined, so you may choose to use a third-party's full node. In this case, the primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored.")]),e._v(" "),a("ul",[a("li",[e._v("http://51.79.82.228:26657 ("),a("a",{attrs:{href:"https://figment.network/networks/cosmos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figment Networks"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),a("p",[e._v("This documentation was created by Gavin Birch ("),a("a",{attrs:{href:"https://figment.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figment Networks"),a("OutboundLink")],1),e._v("). Its development was supported by community funding that was approved on January 29, 2020 by the Cosmos Hub via community-spend proposal "),a("a",{attrs:{href:"https://hubble.figment.network/cosmos/chains/cosmoshub-3/governance/proposals/23",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prop23"),a("OutboundLink")],1),e._v(". You can read the "),a("a",{attrs:{href:"https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY",target:"_blank",rel:"noopener noreferrer"}},[e._v("full proposal PDF here"),a("OutboundLink")],1),e._v(". You can also create an issue or pull request to participate in its development at any time!")]),e._v(" "),a("p",[a("strong",[e._v("Special thanks")]),e._v(" to the following for helping to provide credible information that contributed to this wiki's development:")]),e._v(" "),a("ul",[a("li",[e._v("Aleks (All in Bits; Fission Labs) for answering countless questions about these parameters")]),e._v(" "),a("li",[e._v("Alessio (All in Bits) for explaining how "),a("RouterLink",{attrs:{to:"/governance/params-change/Auth.html#4-sigverifycosted25519"}},[a("code",[e._v("SigVerifyCostED25519")])]),e._v(" & "),a("RouterLink",{attrs:{to:"/governance/params-change/Auth.html#5-sigverifycostsecp256k1"}},[a("code",[e._v("SigVerifyCostSecp256k1")])]),e._v(" work, and detailed answers to my many questions")],1),e._v(" "),a("li",[e._v("Vidor for volunteering to explain "),a("RouterLink",{attrs:{to:"/governance/params-change/Crisis.html#1-constantfee"}},[a("code",[e._v("ConstantFee")])]),e._v(" and answering my many questions in detail")],1),e._v(" "),a("li",[e._v("Hyung (B-Harvest) for volunteering how "),a("RouterLink",{attrs:{to:"/governance/params-change/Mint.html#2-inflationratechange"}},[a("code",[e._v("InflationRateChange")])]),e._v(" works")],1),e._v(" "),a("li",[e._v("Joe (Chorus One) for explaining the security details involved with using full nodes for transactions")]),e._v(" "),a("li",[e._v("Sunny (All in Bits; Sikka) for volunteering an explanation of the purpose of "),a("RouterLink",{attrs:{to:"/governance/params-change/Distribution.html#4-withdrawaddrenabled"}},[a("code",[e._v("withdrawaddrenabled")])])],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);