"use strict";(self.webpackChunkCSP451=self.webpackChunkCSP451||[]).push([[770],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=i,p=h["".concat(l,".").concat(u)]||h[u]||m[u]||r;return o?n.createElement(p,a(a({ref:t},d),{},{components:o})):n.createElement(p,a({ref:t},d))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6988:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(3117),i=(o(7294),o(3905));const r={id:"version-control",title:"Introduction to Version Control",sidebar_position:1,description:"TBD"},a=void 0,s={unversionedId:"tutorials/version-control",id:"tutorials/version-control",title:"Introduction to Version Control",description:"TBD",source:"@site/docs/tutorials/10-version-control.md",sourceDirName:"tutorials",slug:"/tutorials/version-control",permalink:"/CSP451/tutorials/version-control",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/CSP451/tree/main/docs/tutorials/10-version-control.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"version-control",title:"Introduction to Version Control",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Course Collaboration",permalink:"/CSP451/course-info/collaboration"},next:{title:"Getting started with GitHub",permalink:"/CSP451/tutorials/getting-started-github"}},l={},c=[{value:"What is version control?",id:"what-is-version-control",level:2},{value:"Tutorial Video: What is Version Control?",id:"tutorial-video-what-is-version-control",level:3},{value:"What is Git?",id:"what-is-git",level:2},{value:"Source code management best practices",id:"source-code-management-best-practices",level:2},{value:"Commit often",id:"commit-often",level:3},{value:"Ensure you&#39;re working from latest version",id:"ensure-youre-working-from-latest-version",level:3},{value:"Make detailed notes",id:"make-detailed-notes",level:3},{value:"Review changes before committing",id:"review-changes-before-committing",level:3},{value:"Use Branches",id:"use-branches",level:3},{value:"Agree on a Workflow",id:"agree-on-a-workflow",level:3}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-version-control"},"What is version control?"),(0,i.kt)("p",null,"Version control systems (VCS) are software tools that help manage changes to source code and other files over time. They enable developers to track modifications, collaborate with others, and maintain a history of revisions. The primary functions of version control systems include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Tracking Changes:")," VCS records every change made to files, including additions, deletions, and modifications. This allows developers to see the evolution of the codebase over time and revert to previous versions if needed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Collaboration:")," VCS enables multiple developers to work on the same project simultaneously without interfering with each other's work. Developers can create branches to work on new features or fixes independently and merge their changes back into the main codebase when ready."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Conflict Resolution:")," In cases where two or more developers make conflicting changes to the same file, VCS helps identify and resolve conflicts by highlighting the differences and allowing developers to choose which changes to keep."),(0,i.kt)("li",{parentName:"ol"},"**Backup and Recovery: VCS serves as a backup mechanism by storing multiple copies of files and their history. This helps prevent data loss in case of accidental deletions or system failures and facilitates recovery by providing access to previous versions of files."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Auditing and Compliance:")," VCS maintains a detailed history of changes, including information about who made each change and when. This audit trail is useful for tracking contributions, conducting code reviews, and ensuring compliance with regulations and standards."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Branching and Merging:")," VCS supports branching, allowing developers to create separate lines of development for new features or experiments. Branches can be merged back into the main codebase once the changes are complete, enabling a structured and controlled development process.")),(0,i.kt)("h3",{id:"tutorial-video-what-is-version-control"},"Tutorial Video: What is Version Control?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=xQujH0ElTUg"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/xQujH0ElTUg/0.jpg",alt:"What is Version Control?"}))),(0,i.kt)("h2",{id:"what-is-git"},"What is Git?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-icon",src:o(4770).Z,width:"200",height:"102"})),(0,i.kt)("p",null,"Git is a distributed version control system (DVCS) designed to track changes in source code during software development. Created by ",(0,i.kt)("strong",{parentName:"p"},"Linus Torvalds")," in 2005, Git has become one of the most widely used version control systems in the world. Git differs from other version control systems in many ways, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Distributed Architecture:")," Git is distributed, meaning that every user has a complete copy of the repository, including its full history. This allows developers to work offline, commit changes locally, and synchronize with remote repositories when they have internet access. Other version control systems, such as Subversion (SVN), typically use a centralized architecture, where there is a single central repository that users interact with."),(0,i.kt)("li",{parentName:"ul"},"Branching and Merging:** Git makes branching and merging fast and lightweight. Developers can create branches to work on new features or experiments independently of the main codebase. Branches can be created, merged, and deleted easily, allowing for flexible and parallel development workflows. Git's branching model is more powerful and user-friendly compared to some other version control systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance:")," Git is known for its speed and efficiency, even with large repositories and extensive histories. This is partly due to its distributed nature, which reduces the need for network communication. Git also uses techniques such as delta compression and shallow cloning to optimize performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Integrity:")," Git uses cryptographic hashes to ensure the integrity of data. Every file and commit in a Git repository is identified by a unique SHA-1 hash, which makes it virtually impossible to accidentally modify or corrupt data without detection. This ensures the reliability and trustworthiness of the version history."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexibility:")," Git is highly flexible and customizable, allowing users to tailor their workflows and configurations to suit their specific needs. It supports various collaboration models, branching strategies, and workflows, making it suitable for a wide range of projects and teams.")),(0,i.kt)("p",null,"Git's distributed architecture, efficient branching and merging, performance, data integrity, and flexibility set it apart from other version control systems and contribute to its widespread adoption and popularity in the software development community."),(0,i.kt)("h2",{id:"source-code-management-best-practices"},"Source code management best practices"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source code management (SCM) is used to track modifications to a source code repository. SCM tracks a running history of changes to a code base and helps resolve conflicts when merging updates from multiple contributors. SCM is also synonymous with Version control."),(0,i.kt)("p",{parentName:"blockquote"},"As software projects grow in lines of code and contributor head count, the costs of communication overhead and management complexity also grow. SCM is a critical tool to alleviate the organizational strain of growing development costs.\n-- ",(0,i.kt)("cite",null,(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/source-code-management"},"Source code management")))),(0,i.kt)("h3",{id:"commit-often"},"Commit often"),(0,i.kt)("p",null,"Commits are cheap and easy to make. They should be made frequently to capture updates to a code base. Each commit is a snapshot that the codebase can be reverted to if needed. Frequent commits give many opportunities to revert or undo work. A group of commits can be combined into a single commit using a rebase to clarify the development log."),(0,i.kt)("h3",{id:"ensure-youre-working-from-latest-version"},"Ensure you're working from latest version"),(0,i.kt)("p",null,"SCM enables rapid updates from multiple developers. It\u2019s easy to have a local copy of the codebase fall behind the global copy. Make sure to ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," the latest code before making updates. This will help avoid conflicts at merge time."),(0,i.kt)("h3",{id:"make-detailed-notes"},"Make detailed notes"),(0,i.kt)("p",null,"Each commit has a corresponding log entry. At the time of commit creation, this log entry is populated with a message. It is important to leave descriptive explanatory commit log messages. These commit log messages should explain the \u201cwhy\u201d and \u201cwhat\u201d that encompass the commits content. These log messages become the canonical history of the project\u2019s development and leave a trail for future contributors to review."),(0,i.kt)("h3",{id:"review-changes-before-committing"},"Review changes before committing"),(0,i.kt)("p",null,"SCM\u2019s offer a \u2018staging area\u2019. The staging area can be used to collect a group of edits before writing them to a commit. The staging area can be used to manage and review changes before creating the commit snapshot. Utilizing the staging area in this manner provides a buffer area to help refine the contents of the commit."),(0,i.kt)("h3",{id:"use-branches"},"Use Branches"),(0,i.kt)("p",null,"Branching is a powerful SCM mechanism that allows developers to create a separate line of development. Branches should be used frequently as they are quick and inexpensive. Branches enable multiple developers to work in parallel on separate lines of development. These lines of development are generally different product features. When development is complete on a branch it is then merged into the main line of development."),(0,i.kt)("h3",{id:"agree-on-a-workflow"},"Agree on a Workflow"),(0,i.kt)("p",null,"By default SCMs offer very free form methods of contribution. It is important that teams establish shared patterns of collaboration. SCM workflows establish patterns and processes for merging branches. If a team doesn't agree on a shared workflow it can lead to inefficient communication overhead when it comes time to merge branches."))}m.isMDXComponent=!0},4770:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);