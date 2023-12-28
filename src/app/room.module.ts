import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
// import { RoomComponent } from './room/room.component';
// import { RoomListComponent } from './room/room-list/room-list.component';
// import { RoomBookingComponent } from './room-booking/room-booking.component';
// import { RoomAddComponent } from './room/room-add/room-add.component';

// Generated with CLI: ng g m room --routing --flat=true
// A component can only be declared by one module.
// Angluar 14+: NgModule is optional
@NgModule({
  declarations: [
    // standalone module can't have declarations
    // RoomComponent,
    // RoomListComponent,
    // RoomBookingComponent,
    // RoomAddComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
  ]
})
export class RoomModule { }
