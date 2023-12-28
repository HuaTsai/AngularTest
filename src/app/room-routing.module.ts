import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoomComponent } from './room/room.component';
// import { RoomAddComponent } from './room/room-add/room-add.component';
// import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  // {
  //   path: 'room',
  //   component: RoomComponent,
  //   children: [
  //     { path: 'add', component: RoomAddComponent },
  //     { path: ':id', component: RoomBookingComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
