"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[96],{6854:(O,a,r)=>{r.r(a),r.d(a,{RoomComponent:()=>y});var i=r(6814),o=r(9212),p=r(8642);const d=s=>["/room",s];function h(s,m){if(1&s&&(o.TgZ(0,"tr",2)(1,"td"),o._uU(2),o.ALo(3,"percent"),o.qZA(),o.TgZ(4,"td"),o._uU(5),o.qZA(),o.TgZ(6,"td"),o._uU(7),o.qZA(),o.TgZ(8,"td"),o._uU(9),o.qZA(),o.TgZ(10,"td"),o._uU(11),o.ALo(12,"lowercase"),o.qZA(),o.TgZ(13,"td"),o._uU(14),o.ALo(15,"currency"),o.qZA(),o.TgZ(16,"td"),o._uU(17),o.ALo(18,"date"),o.qZA(),o.TgZ(19,"td"),o._uU(20),o.ALo(21,"date"),o.qZA(),o.TgZ(22,"td"),o._uU(23),o.ALo(24,"number"),o.qZA(),o.TgZ(25,"td")(26,"button",3),o._uU(27,"Select"),o.qZA()()()),2&s){const e=m.$implicit,t=m.even,n=m.index;o.Q6J("ngClass",t?"even":"odd"),o.xp6(2),o.Oqu(o.lcZ(3,11,n)),o.xp6(3),o.Oqu(t?"Even":"Odd"),o.xp6(2),o.Oqu(e.roomNumber),o.xp6(2),o.Oqu(e.roomType),o.xp6(2),o.Oqu(o.lcZ(12,13,e.amenities)),o.xp6(3),o.Oqu(o.xi3(15,15,e.price,"NTD")),o.xp6(3),o.Oqu(o.xi3(18,18,e.checkinTime,"dd/MM")),o.xp6(3),o.Oqu(o.xi3(21,21,e.checkoutTime,"dd/MM")),o.xp6(3),o.Oqu(o.xi3(24,24,e.rating,"1.0-0")),o.xp6(3),o.Q6J("routerLink",o.VKq(27,d,e.roomNumber))}}let g=(()=>{class s{constructor(){this.rooms=[],this.title="",this.selectedRoom=new o.vpe}selectRoom(e){this.selectedRoom.emit(e)}ngOnChanges(e){console.log(e),e.title&&(this.title=e.title.currentValue.toUpperCase())}ngOnDestroy(){console.log("RoomListComponent destroyed")}static#o=this.\u0275fac=function(t){return new(t||s)};static#e=this.\u0275cmp=o.Xpm({type:s,selectors:[["app-room-list"]],inputs:{rooms:"rooms",title:"title"},outputs:{selectedRoom:"selectedRoom"},standalone:!0,features:[o.TTD,o.jDz],decls:27,vars:2,consts:[[1,"table","table-primary","table-hover"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,n){1&t&&(o.TgZ(0,"h2"),o._uU(1),o.qZA(),o.TgZ(2,"table",0)(3,"thead")(4,"tr")(5,"th"),o._uU(6,"Index"),o.qZA(),o.TgZ(7,"th"),o._uU(8,"Even/Odd"),o.qZA(),o.TgZ(9,"th"),o._uU(10,"Room Number"),o.qZA(),o.TgZ(11,"th"),o._uU(12,"Room Type"),o.qZA(),o.TgZ(13,"th"),o._uU(14,"Room Amenities"),o.qZA(),o.TgZ(15,"th"),o._uU(16,"Room Price"),o.qZA(),o.TgZ(17,"th"),o._uU(18,"Checkin Time"),o.qZA(),o.TgZ(19,"th"),o._uU(20,"Checkout Time"),o.qZA(),o.TgZ(21,"th"),o._uU(22,"Rating"),o.qZA(),o.TgZ(23,"th"),o._uU(24,"Select Room"),o.qZA()()(),o.TgZ(25,"tbody"),o.YNc(26,h,28,29,"tr",1),o.qZA()()),2&t&&(o.xp6(1),o.Oqu(n.title),o.xp6(25),o.Q6J("ngForOf",n.rooms))},dependencies:[i.ez,i.mk,i.sg,i.i8,i.JJ,i.Zx,i.H9,i.uU,p.rH],changeDetection:0})}return s})(),u=(()=>{class s{constructor(){this.title=""}static#o=this.\u0275fac=function(t){return new(t||s)};static#e=this.\u0275cmp=o.Xpm({type:s,selectors:[["app-header"]],standalone:!0,features:[o.jDz],decls:2,vars:1,template:function(t,n){1&t&&(o.TgZ(0,"h1"),o._uU(1),o.qZA()),2&t&&(o.xp6(1),o.Oqu(n.title))}})}return s})();var Z=r(8645),T=r(6306),R=r(2096),f=r(7398),A=r(5592),c=r(1474),_=r(9240);function C(s,m){if(1&s&&(o.TgZ(0,"p"),o._uU(1),o.ALo(2,"json"),o.qZA()),2&s){const e=o.oxw();o.xp6(1),o.hij("Selected Room: ",o.lcZ(2,1,e.selectedRoom),"")}}function b(s,m){1&s&&(o.TgZ(0,"p"),o._uU(1,"No room selected"),o.qZA())}function q(s,m){if(1&s){const e=o.EpF();o.TgZ(0,"div")(1,"app-room-list",6),o.NdJ("selectedRoom",function(n){o.CHM(e);const l=o.oxw();return o.KtG(l.selectRoom(n))}),o.qZA()()}if(2&s){const e=m.ngIf,t=o.oxw();o.xp6(1),o.Q6J("rooms",e)("title",t.title)}}function U(s,m){if(1&s&&(o.TgZ(0,"p"),o._uU(1),o.qZA()),2&s){const e=m.$implicit;o.xp6(1),o.Oqu(e.price)}}function x(s,m){1&s&&(o.TgZ(0,"p"),o._uU(1,"No rooms"),o.qZA())}const v=s=>({color:s});let y=(()=>{class s{toggle(){this.hideRooms=!this.hideRooms,this.title="Rooms List"}constructor(e){this.roomService=e,this.hotelName="Hotel California",this.numberOfRooms=5,this.hideRooms=!1,this.rooms={totalRooms:20,availableRooms:10,bookedRooms:0},this.roomList=[],this.title="Room List",this.error$=new Z.x,this.getError$=this.error$.asObservable(),this.rooms$=this.roomService.getRooms$.pipe((0,T.K)(t=>(this.error$.next(t.message),(0,R.of)([])))),this.roomsCount$=this.roomService.getRooms$.pipe((0,f.U)(t=>t.length)),this.totalBytes=0,this.stream=new A.y(t=>{t.next("user1"),t.next("user2"),t.next("user3"),t.next("user4"),t.complete()})}ngOnInit(){this.roomService.getPhotos().subscribe(e=>{switch(e.type){case c.dt.Sent:console.log("Request sent");break;case c.dt.ResponseHeader:console.log("Request success");break;case c.dt.DownloadProgress:this.totalBytes+=e.loaded;break;case c.dt.Response:console.log("Request completed"),console.log(e.body)}}),this.stream.subscribe({next:e=>{console.log(e)},complete:()=>{console.log("completed")},error:e=>{console.log(e)}}),this.stream.subscribe(e=>console.log(e))}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}selectRoom(e){this.selectedRoom=e}addRoom(){this.roomService.addRoom({roomNumber:"104",roomType:"Deluxe",amenities:"AC, TV, WiFi, Water Heater",price:2e3,photos:"assets/images/deluxe.jpg",checkinTime:new Date("2021-01-01T12:00:00"),checkoutTime:new Date("2021-01-01T12:00:00"),rating:5.3}).subscribe(t=>{this.roomList=t})}ngDoCheck(){console.log("Room Component ngDoCheck")}ngAfterViewInit(){console.log(this.header),this.header.title="Rooms View",console.log(this.headers),this.headers.last.title="Last Rooms Header"}ngAfterViewChecked(){}editRoom(){this.roomService.editRoom({roomNumber:"3",roomType:"Deluxe",amenities:"AC, TV, WiFi, Water Heater",price:2e3,photos:"assets/images/deluxe.jpg",checkinTime:new Date("2021-01-01T12:00:00"),checkoutTime:new Date("2021-01-01T12:00:00"),rating:5.3}).subscribe(t=>{this.roomList=t})}deleteRoom(){this.roomService.deleteRoom("3").subscribe(e=>{this.roomList=e})}static#o=this.\u0275fac=function(t){return new(t||s)(o.Y36(_.X))};static#e=this.\u0275cmp=o.Xpm({type:s,selectors:[["app-room"]],viewQuery:function(t,n){if(1&t&&(o.Gf(u,5),o.Gf(u,5)),2&t){let l;o.iGM(l=o.CRH())&&(n.header=l.first),o.iGM(l=o.CRH())&&(n.headers=l)}},standalone:!0,features:[o.jDz],decls:35,vars:24,consts:[[3,"hidden"],[3,"innerText"],[3,"click"],[4,"ngIf"],[3,"ngStyle"],[1,"btn","btn-primary",3,"click"],[3,"rooms","title","selectedRoom"]],template:function(t,n){1&t&&(o._UZ(0,"app-header")(1,"app-header"),o.TgZ(2,"div",0),o._uU(3," Number of Rooms: "),o._UZ(4,"div",1),o.qZA(),o.TgZ(5,"button",2),o.NdJ("click",function(){return n.toggle()}),o._uU(6,"Toggle"),o.qZA(),o.YNc(7,C,3,3,"p")(8,b,2,0),o.TgZ(9,"h1"),o._uU(10),o.ALo(11,"async"),o.qZA(),o.TgZ(12,"h1"),o._uU(13),o.ALo(14,"async"),o.qZA(),o.YNc(15,q,2,2,"div",3),o.ALo(16,"async"),o.TgZ(17,"div",4),o._uU(18," Green Text\n"),o.qZA(),o.TgZ(19,"div")(20,"button",5),o.NdJ("click",function(){return n.addRoom()}),o._uU(21,"Add Room"),o.qZA(),o.TgZ(22,"button",5),o.NdJ("click",function(){return n.editRoom()}),o._uU(23,"Edit Room"),o.qZA(),o.TgZ(24,"button",5),o.NdJ("click",function(){return n.deleteRoom()}),o._uU(25,"Delete Room"),o.qZA()(),o._uU(26),o.ALo(27,"uppercase"),o.ALo(28,"slice"),o.SjG(29,U,2,1,"p",null,o.x6l,!1,x,2,0),o.TgZ(32,"h1"),o._uU(33),o.qZA(),o._UZ(34,"router-outlet")),2&t&&(o.xp6(2),o.Q6J("hidden",n.hideRooms),o.xp6(2),o.Q6J("innerText",n.numberOfRooms),o.xp6(3),o.um2(7,n.selectedRoom?7:8),o.xp6(3),o.Oqu(o.lcZ(11,10,n.getError$)),o.xp6(3),o.hij("Number of rooms: ",o.lcZ(14,12,n.roomsCount$),""),o.xp6(2),o.Q6J("ngIf",o.lcZ(16,14,n.rooms$)),o.xp6(2),o.Q6J("ngStyle",o.VKq(22,v,n.rooms.availableRooms>0?"green":"red")),o.xp6(9),o.hij(" ",o.lcZ(27,16,o.Dn7(28,18,"hello world is good",0,11))," "),o.xp6(3),o.wJu(n.roomList),o.xp6(4),o.hij(" ",n.totalBytes," loaded "))},dependencies:[i.ez,i.O5,i.PC,i.Ov,i.gd,i.Ts,i.OU,g,u,p.lC]})}return s})()}}]);