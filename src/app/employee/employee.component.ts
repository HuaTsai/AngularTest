import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  empName = 'John';
  // @Self is used to get the instance of RoomService from the current component
  // other decorators: @SkipSelf, @Optional, @Host
  // constructor(@Self() private roomService: RoomService) {
  constructor() {
    console.log('Employee Component Constructor');
  }
}
