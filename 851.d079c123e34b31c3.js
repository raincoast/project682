"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[851],{5851:(F,f,i)=>{i.r(f),i.d(f,{LabModule:()=>p});var n=i(6895),s=i(7007),h=i(3900),e=i(4650),x=i(9646);class l{constructor(){this.list=[{id:1,album:"https://pbs.twimg.com/media/EInME8oWwAENtlY?format=jpg&name=4096x4096",name:"Lab1",position:"BC-010-01",description:"This is a test description of the lab 1, here have several seats",totalSeats:20,availableSeats:10,openHours:[{open:"9:15",close:"12:15",day:"Monday",isToday:!1},{open:"14:00",close:"17:00",day:"Tuesday",isToday:!0}],computerTypes:[{id:1,name:"MacOS"},{id:2,name:"Linux"}],seats:[{id:1,alias:"C-1",computerType:{id:1,name:"MacOS"},isAvailable:!0},{id:2,alias:"C-2",computerType:{id:2,name:"Linux"},isAvailable:!1},{id:3,alias:"C-3",computerType:{id:2,name:"Linux"},isAvailable:!0}]}]}getLabInfo(a){let t=this.list.filter(m=>m.id==a);return(0,x.of)(t.length?t[0]:null)}getLabList(){return(0,x.of)(this.list)}}function v(o,a){if(1&o&&(e.TgZ(0,"div",18)(1,"div",19)(2,"div",20),e._uU(3),e.qZA(),e.TgZ(4,"div",21),e._uU(5),e.qZA(),e.TgZ(6,"span"),e._uU(7,"-"),e.qZA(),e.TgZ(8,"div",22),e._uU(9),e.qZA()()()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngClass",t.isToday?"order-first":""),e.xp6(1),e.Q6J("ngClass",t.isToday?"font-bold":""),e.xp6(1),e.hij("",t.day," "),e.xp6(2),e.Oqu(t.open),e.xp6(4),e.Oqu(t.close)}}function Z(o,a){1&o&&(e.TgZ(0,"div",33)(1,"button",34),e._uU(2,"Book"),e.qZA()())}function y(o,a){1&o&&(e.TgZ(0,"div",33)(1,"button",35),e._uU(2,"Not available"),e.qZA()())}function _(o,a){if(1&o&&(e.TgZ(0,"tr",23)(1,"td",24),e._uU(2),e.qZA(),e.TgZ(3,"td",25),e._uU(4),e.qZA(),e.TgZ(5,"td",26)(6,"div",27)(7,"div",28),e._uU(8),e.qZA()()(),e.TgZ(9,"td",29)(10,"span",30),e._uU(11),e.qZA()(),e.TgZ(12,"td",25),e.YNc(13,Z,3,0,"div",31),e.YNc(14,y,3,0,"ng-template",null,32,e.W1O),e.qZA()()),2&o){const t=a.$implicit,m=e.MAs(15);e.xp6(2),e.Oqu(t.id),e.xp6(2),e.hij(" ",t.alias," "),e.xp6(4),e.Oqu(t.computerType.name),e.xp6(2),e.Q6J("ngClass",t.isAvailable?" bg-blue-500 text-white":" bg-red-300 text-white"),e.xp6(1),e.Oqu(t.isAvailable?"Yes":"No"),e.xp6(2),e.Q6J("ngIf",t.isAvailable)("ngIfElse",m)}}l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});class d{}d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-lab-basic-info"]],inputs:{labInfo:"labInfo"},decls:35,vars:5,consts:[[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],["alt","...",1,"max-w-full","h-80","align-middle","m-auto",3,"src"],[1,"p-6","shadow-lg","rounded-lg","bg-gray-100","text-gray-700"],[1,"my-6","border-gray-300"],[1,"other","pl-1"],[1,"position"],[1,"font-bold"],[1,"hover:underline","hover:cursor-pointer"],[1,"openhours"],[1,"body"],["class","open-hour flex",4,"ngFor","ngForOf"],[1,"flex","flex-col"],[1,"py-2","inline-block","min-w-full"],[1,"overflow-hidden"],[1,"min-w-full"],[1,"bg-white","border-b"],["scope","col",1,"text-sm","font-medium","text-gray-900","px-6","py-4","text-left"],["class","bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100",4,"ngFor","ngForOf"],[1,"open-hour","flex"],[1,"time","flex",3,"ngClass"],[1,"day","w-20",3,"ngClass"],[1,"open"],[1,"close"],[1,"bg-white","border-b","transition","duration-300","ease-in-out","hover:bg-gray-100"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","px-6","py-4","whitespace-nowrap"],[1,"text-sm","text-gray-900","font-bold","px-6","py-4","whitespace-nowrap"],[1,"types"],[1,"type","hover:underline","cursor-pointer"],[1,"text-sm","text-gray-900","font-normal","px-6","py-4","whitespace-nowrap"],[1,"cursor-pointer","rounded-full","px-5","py-0.5",3,"ngClass"],["class","flex justify-left",4,"ngIf","ngIfElse"],["notAvailable",""],[1,"flex","justify-left"],["type","button","data-mdb-ripple","true","data-mdb-ripple-color","light",1,"inline-block","px-6","py-2.5","bg-blue-600","text-white","font-medium","text-xs","leading-tight","rounded","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:bg-blue-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-blue-800","active:shadow-lg","transition","duration-150","ease-in-out"],["type","button","disabled","disabled",1,"disabled","inline-block","cursor-not-allowed","px-6","py-2.5","bg-gray-200","text-gray-700","font-medium","text-xs","leading-tight","uppercase","rounded","hover:bg-gray-300","focus:bg-gray-300","focus:outline-none","focus:ring-0","active:bg-gray-400","transition","duration-150","ease-in-out"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"p"),e._uU(4),e.qZA(),e._UZ(5,"hr",3),e.TgZ(6,"div",4)(7,"div",5)(8,"span",6),e._uU(9,"Position:\xa0"),e.qZA(),e.TgZ(10,"span",7),e._uU(11),e.qZA()(),e.TgZ(12,"div",8)(13,"span",6),e._uU(14,"Opens:"),e.qZA(),e._UZ(15,"div",9),e.YNc(16,v,10,5,"div",10),e.qZA()()(),e.TgZ(17,"div",11)(18,"div",12)(19,"div",13)(20,"table",14)(21,"thead",15)(22,"tr")(23,"th",16),e._uU(24," # "),e.qZA(),e.TgZ(25,"th",16),e._uU(26," Alias "),e.qZA(),e.TgZ(27,"th",16),e._uU(28," Computer Type "),e.qZA(),e.TgZ(29,"th",16),e._uU(30," Is Availale? "),e.qZA(),e.TgZ(31,"th",16),e._uU(32," Booking "),e.qZA()()(),e.TgZ(33,"tbody"),e.YNc(34,_,16,7,"tr",17),e.qZA()()()()()()),2&a&&(e.xp6(1),e.Q6J("src",t.labInfo.album,e.LSH),e.xp6(3),e.hij(" ",t.labInfo.description," "),e.xp6(7),e.Oqu(t.labInfo.position),e.xp6(5),e.Q6J("ngForOf",t.labInfo.openHours),e.xp6(18),e.Q6J("ngForOf",t.labInfo.seats))},dependencies:[n.mk,n.sg,n.O5]});class u{constructor(a,t,m){this.router=a,this.route=t,this.labService=m,this.labInfo={id:-1,album:"",name:"",position:"",description:"",totalSeats:0,availableSeats:0,openHours:[],computerTypes:[],seats:[]}}ngOnInit(){this.route.paramMap.pipe((0,h.w)(a=>this.labService.getLabInfo(parseInt(a.get("id"))))).subscribe(a=>{null==a?this.router.navigate(["/list"]):this.labInfo=a})}}function T(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",15)(2,"div",16),e._uU(3),e.qZA(),e.TgZ(4,"div",17),e._uU(5),e.qZA(),e.TgZ(6,"span"),e._uU(7,"-"),e.qZA(),e.TgZ(8,"div",18),e._uU(9),e.qZA()(),e.BQk()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngClass",t.isToday?"order-first":""),e.xp6(1),e.Q6J("ngClass",t.isToday?"font-bold":""),e.xp6(1),e.Oqu(t.day),e.xp6(2),e.Oqu(t.open),e.xp6(4),e.Oqu(t.close)}}function w(o,a){if(1&o&&(e.ynx(0),e.YNc(1,T,10,5,"ng-container",14),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.lab.openHours)}}function A(o,a){if(1&o&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("ngClass",0==t.id?"bg-orange-700":1==t.id?"bg-green-700":"bg-blue-700"),e.xp6(1),e.hij(" ",t.name," ")}}u.\u0275fac=function(a){return new(a||u)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(l))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-detail"]],decls:19,vars:2,consts:[[1,"container","md:m-auto","md:w-5/6","md:p-5","xl:w-3/5","mt-10"],[1,"text-xl","font-sans","font-light","md:text-5xl","md:mb-5"],["id","tabs-tabFill","role","tablist",1,"nav","nav-tabs","flex","flex-col","md:flex-row","flex-wrap","list-none","border-b-0","pl-0","mb-4"],["role","presentation",1,"nav-item","flex-auto","text-center"],["href","#tabs-homeFill","id","tabs-home-tabFill","data-bs-toggle","pill","data-bs-target","#tabs-homeFill","role","tab","aria-controls","tabs-homeFill","aria-selected","true",1,"nav-link","w-full","block","font-medium","text-xs","leading-tight","uppercase","border-x-0","border-t-0","border-b-2","border-transparent","px-6","py-3","my-2","hover:border-transparent","hover:bg-gray-100","focus:border-transparent","active"],["href","#tabs-profileFill","id","tabs-profile-tabFill","data-bs-toggle","pill","data-bs-target","#tabs-profileFill","role","tab","aria-controls","tabs-profileFill","aria-selected","false",1,"nav-link","w-full","block","font-medium","text-xs","leading-tight","uppercase","border-x-0","border-t-0","border-b-2","border-transparent","px-6","py-3","my-2","hover:border-transparent","hover:bg-gray-100","focus:border-transparent"],["href","#tabs-messagesFill","id","tabs-messages-tabFill","data-bs-toggle","pill","data-bs-target","#tabs-messagesFill","role","tab","aria-controls","tabs-messagesFill","aria-selected","false",1,"nav-link","w-full","block","font-medium","text-xs","leading-tight","uppercase","border-x-0","border-t-0","border-b-2","border-transparent","px-6","py-3","my-2","hover:border-transparent","hover:bg-gray-100","focus:border-transparent"],["id","tabs-tabContentFill",1,"tab-content"],["id","tabs-homeFill","role","tabpanel","aria-labelledby","tabs-home-tabFill",1,"tab-pane","fade","show","active"],[3,"labInfo"],["id","tabs-profileFill","role","tabpanel","aria-labelledby","tabs-profile-tabFill",1,"tab-pane","fade"],["id","tabs-messagesFill","role","tabpanel","aria-labelledby","tabs-profile-tabFill",1,"tab-pane","fade"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"header",1),e._uU(2),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"ul",2)(5,"li",3)(6,"a",4),e._uU(7,"Info"),e.qZA()(),e.TgZ(8,"li",3)(9,"a",5),e._uU(10,"Reservations"),e.qZA()(),e.TgZ(11,"li",3)(12,"a",6),e._uU(13,"Setting"),e.qZA()()(),e.TgZ(14,"div",7)(15,"div",8),e._UZ(16,"app-lab-basic-info",9),e.qZA(),e._UZ(17,"div",10)(18,"div",11),e.qZA()()),2&a&&(e.xp6(2),e.Oqu(t.labInfo.name),e.xp6(14),e.Q6J("labInfo",t.labInfo))},dependencies:[d]});const C=function(o){return[o]};class b{constructor(){this.lab={id:-1,album:"",name:"",position:"",description:"",totalSeats:0,availableSeats:0,openHours:[],computerTypes:[],seats:[]}}}function q(o,a){if(1&o&&(e.TgZ(0,"div",7),e._UZ(1,"app-info-card",8),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("lab",t)}}b.\u0275fac=function(a){return new(a||b)},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-info-card"]],inputs:{lab:"lab"},decls:21,vars:10,consts:[["data-mdb-ripple","true","data-mdb-ripple-color","#aaaaaa",1,"flex","p-3",3,"routerLink"],["alt","",1,"h-52","rounded-sm","mr-5",3,"src"],[1,"info","cursor-pointer"],[1,"title","font-bold","text-xl"],[1,"place","font-sans","text-gray-500"],[1,"description","h-12","text-ellipsis"],[1,"text-sm"],[1,"openhours","flex","flex-col","text-sm"],[1,"openHours","flex","flex-col"],[4,"ngIf"],[1,"seats","text-sm"],[1,"computer_types","text-sm","flex"],[1,"mr-2"],["class","types text-white rounded-full py-0.5 px-2 text-xs mr-1",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"hour","flex","hover:underline",3,"ngClass"],[1,"w-2/5",3,"ngClass"],[1,"open"],[1,"close"],[1,"types","text-white","rounded-full","py-0.5","px-2","text-xs","mr-1",3,"ngClass"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"div",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e._uU(6),e.qZA(),e.TgZ(7,"div",5)(8,"div",6),e._uU(9),e.qZA()(),e.TgZ(10,"div",7)(11,"span"),e._uU(12,"Opens:"),e.qZA(),e.TgZ(13,"div",8),e.YNc(14,w,2,1,"ng-container",9),e.qZA()(),e.TgZ(15,"div",10),e._uU(16),e.qZA(),e.TgZ(17,"div",11)(18,"span",12),e._uU(19,"Computer Types:"),e.qZA(),e.YNc(20,A,2,2,"div",13),e.qZA()()()),2&a&&(e.Q6J("routerLink",e.VKq(8,C,t.lab.id)),e.xp6(1),e.Q6J("src",t.lab.album,e.LSH),e.xp6(3),e.Oqu(t.lab.name),e.xp6(2),e.Oqu(t.lab.position),e.xp6(3),e.Oqu(t.lab.description),e.xp6(5),e.Q6J("ngIf",0!=t.lab.openHours.length),e.xp6(2),e.hij("Seats: ",t.lab.availableSeats+"/"+t.lab.totalSeats,""),e.xp6(4),e.Q6J("ngForOf",t.lab.computerTypes))},dependencies:[n.mk,n.sg,n.O5,s.rH]});class c{constructor(a){this.labService=a}ngOnInit(){this.getLabList(null)}getLabList(a){null==a&&this.labService.getLabList().subscribe(t=>{this.labList=t,console.log(t)})}}c.\u0275fac=function(a){return new(a||c)(e.Y36(l))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-list"]],decls:10,vars:1,consts:[[1,"container","p-5","px-12","flex","flex-col","w-screen","grow","mx-auto","lg:w-4/5","xl:w-3/5"],[1,"flex"],["data-mdb-ripple","true","data-mdb-ripple-color","light","data-mdb-ripple-duration","300ms",1,"filter","box-border","cursor-pointer","flex","items-center","rounded-full","hover:outline-stone-200","hover:outline-2","w-auto","p-1","text-sm","font-semibold","px-2.5","hover:bg-gray-300"],["xmlns"," http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","strokeWidth","{1.5}","stroke","currentColor",1,"w-6","h-6","rounded-full"],["strokeLinecap","round","strokeLinejoin","round","d","M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"],[1,"list","my-3"],["class","lab-card  shadow-[0_2px_15px_-9px_rgba(0,0,0,0.3)] rounded-2xl cursor-pointer hover:shadow-[0_2px_15px_-5px_rgba(0,0,0,0.3)]",4,"ngFor","ngForOf"],[1,"lab-card","shadow-[0_2px_15px_-9px_rgba(0,0,0,0.3)]","rounded-2xl","cursor-pointer","hover:shadow-[0_2px_15px_-5px_rgba(0,0,0,0.3)]"],[3,"lab"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"header",1)(2,"div",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA(),e.kcU(),e.TgZ(5,"span"),e._uU(6,"Filter"),e.qZA()()(),e._UZ(7,"hr"),e.TgZ(8,"div",5),e.YNc(9,q,2,1,"div",6),e.qZA()()),2&a&&(e.xp6(9),e.Q6J("ngForOf",t.labList))},dependencies:[n.sg,b]});class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-main"]],decls:1,vars:0,template:function(a,t){1&a&&e._UZ(0,"router-outlet")},dependencies:[s.lC]});const U=[{path:"",component:g,children:[{path:"",component:c},{path:":id",component:u}]}];class r{}r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[s.Bz.forChild(U),s.Bz]});class p{}p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[n.ez,r]})}}]);