import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomComponent } from './room/room.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomAddComponent } from './room/room-add/room-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'room',
    // component: RoomComponent,
    loadComponent: () => import('./room/room.component').then((m) => m.RoomComponent),
    // children: you need to add <router-outlet></router-outlet> in room.component.html
    children: [
      { path: 'add', component: RoomAddComponent },
      { path: ':id', loadComponent: () => import('./room-booking/room-booking.component').then((m) => m.RoomBookingComponent) },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
