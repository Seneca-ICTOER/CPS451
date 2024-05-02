"use strict";(self.webpackChunkCSP451=self.webpackChunkCSP451||[]).push([[723],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=r,p=h["".concat(l,".").concat(u)]||h[u]||m[u]||i;return o?n.createElement(p,a(a({ref:t},d),{},{components:o})):n.createElement(p,a({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2217:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(3117),r=(o(7294),o(3905));const i={id:"version-control",title:"Version Control",sidebar_position:1,description:"TBD"},a=void 0,s={unversionedId:"tutorials-github/version-control",id:"tutorials-github/version-control",title:"Version Control",description:"TBD",source:"@site/docs/tutorials-github/10-version-control.md",sourceDirName:"tutorials-github",slug:"/tutorials-github/version-control",permalink:"/CSP451/tutorials-github/version-control",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/CSP451/tree/main/docs/tutorials-github/10-version-control.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"version-control",title:"Version Control",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Course Collaboration",permalink:"/CSP451/course-info/collaboration"},next:{title:"GitHub Getting Started",permalink:"/CSP451/tutorials-github/getting-started"}},l={},c=[{value:"What is version control?",id:"what-is-version-control",level:2},{value:"What is Git?",id:"what-is-git",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Commit often",id:"commit-often",level:3},{value:"Ensure you&#39;re working from latest version",id:"ensure-youre-working-from-latest-version",level:3},{value:"Make detailed notes",id:"make-detailed-notes",level:3},{value:"Review changes before committing",id:"review-changes-before-committing",level:3},{value:"Use Branches",id:"use-branches",level:3},{value:"Agree on a Workflow",id:"agree-on-a-workflow",level:3},{value:"Sources",id:"sources",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-version-control"},"What is version control?"),(0,r.kt)("p",null,"Version control systems (VCS) are software tools that help manage changes to source code and other files over time. They enable developers to track modifications, collaborate with others, and maintain a history of revisions. The primary functions of version control systems include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Tracking Changes:")," VCS records every change made to files, including additions, deletions, and modifications. This allows developers to see the evolution of the codebase over time and revert to previous versions if needed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Collaboration:")," VCS enables multiple developers to work on the same project simultaneously without interfering with each other's work. Developers can create branches to work on new features or fixes independently and merge their changes back into the main codebase when ready."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Conflict Resolution:")," In cases where two or more developers make conflicting changes to the same file, VCS helps identify and resolve conflicts by highlighting the differences and allowing developers to choose which changes to keep."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Backup and Recovery:")," VCS serves as a backup mechanism by storing multiple copies of files and their history. This helps prevent data loss in case of accidental deletions or system failures and facilitates recovery by providing access to previous versions of files."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Auditing and Compliance:")," VCS maintains a detailed history of changes, including information about who made each change and when. This audit trail is useful for tracking contributions, conducting code reviews, and ensuring compliance with regulations and standards."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Branching and Merging:")," VCS supports branching, allowing developers to create separate lines of development for new features or experiments. Branches can be merged back into the main codebase once the changes are complete, enabling a structured and controlled development process.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=xQujH0ElTUg"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/xQujH0ElTUg/0.jpg",alt:"What is Version Control?"}))),(0,r.kt)("h2",{id:"what-is-git"},"What is Git?"),(0,r.kt)("p",null,"Git is a distributed version control system (DVCS) designed to track changes in source code during software development. Created by ",(0,r.kt)("strong",{parentName:"p"},"Linus Torvalds")," in 2005, Git has become one of the most widely used version control systems in the world. Git differs from other version control systems in many ways, namely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distributed Architecture:")," Git is distributed, meaning that every user has a complete copy of the repository, including its full history. This allows developers to work offline, commit changes locally, and synchronize with remote repositories when they have internet access. Other version control systems, such as Subversion (SVN), typically use a centralized architecture, where there is a single central repository that users interact with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Branching and Merging:")," Git makes branching and merging fast and lightweight. Developers can create branches to work on new features or experiments independently of the main codebase. Branches can be created, merged, and deleted easily, allowing for flexible and parallel development workflows. Git's branching model is more powerful and user-friendly compared to some other version control systems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance:")," Git is known for its speed and efficiency, even with large repositories and extensive histories. This is partly due to its distributed nature, which reduces the need for network communication. Git also uses techniques such as delta compression and shallow cloning to optimize performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Integrity:")," Git uses cryptographic hashes to ensure the integrity of data. Every file and commit in a Git repository is identified by a unique SHA-1 hash, which makes it virtually impossible to accidentally modify or corrupt data without detection. This ensures the reliability and trustworthiness of the version history."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexibility:")," Git is highly flexible and customizable, allowing users to tailor their workflows and configurations to suit their specific needs. It supports various collaboration models, branching strategies, and workflows, making it suitable for a wide range of projects and teams.")),(0,r.kt)("p",null,"Git's distributed architecture, efficient branching and merging, performance, data integrity, and flexibility set it apart from other version control systems and contribute to its widespread adoption and popularity in the software development community."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=E8hhHKlq6rk"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/E8hhHKlq6rk/0.jpg",alt:"What is Git: Features, Commands, Branch and Workflow in Git"}))),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("h3",{id:"commit-often"},"Commit often"),(0,r.kt)("p",null,"Commits are cheap and easy to make. They should be made frequently to capture updates to a code base. Each commit is a snapshot that the codebase can be reverted to if needed. Frequent commits give many opportunities to revert or undo work. A group of commits can be combined into a single commit using a rebase to clarify the development log."),(0,r.kt)("h3",{id:"ensure-youre-working-from-latest-version"},"Ensure you're working from latest version"),(0,r.kt)("p",null,"SCM enables rapid updates from multiple developers. It\u2019s easy to have a local copy of the codebase fall behind the global copy. Make sure to ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," the latest code before making updates. This will help avoid conflicts at merge time."),(0,r.kt)("h3",{id:"make-detailed-notes"},"Make detailed notes"),(0,r.kt)("p",null,"Each commit has a corresponding log entry. At the time of commit creation, this log entry is populated with a message. It is important to leave descriptive explanatory commit log messages. These commit log messages should explain the \u201cwhy\u201d and \u201cwhat\u201d that encompass the commits content. These log messages become the canonical history of the project\u2019s development and leave a trail for future contributors to review."),(0,r.kt)("h3",{id:"review-changes-before-committing"},"Review changes before committing"),(0,r.kt)("p",null,"SCM\u2019s offer a \u2018staging area\u2019. The staging area can be used to collect a group of edits before writing them to a commit. The staging area can be used to manage and review changes before creating the commit snapshot. Utilizing the staging area in this manner provides a buffer area to help refine the contents of the commit."),(0,r.kt)("h3",{id:"use-branches"},"Use Branches"),(0,r.kt)("p",null,"Branching is a powerful SCM mechanism that allows developers to create a separate line of development. Branches should be used frequently as they are quick and inexpensive. Branches enable multiple developers to work in parallel on separate lines of development. These lines of development are generally different product features. When development is complete on a branch it is then merged into the main line of development."),(0,r.kt)("h3",{id:"agree-on-a-workflow"},"Agree on a Workflow"),(0,r.kt)("p",null,"By default SCMs offer very free form methods of contribution. It is important that teams establish shared patterns of collaboration. SCM workflows establish patterns and processes for merging branches. If a team doesn't agree on a shared workflow it can lead to inefficient communication overhead when it comes time to merge branches."),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("cite",null,"[What is version control?][1]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("cite",null,"[Source code management][2]"))))}m.isMDXComponent=!0}}]);