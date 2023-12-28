import { Component } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-add.component.html',
  styleUrl: './room-add.component.scss'
})
export class RoomAddComponent {
  room : RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  successMessage: string = '';

  constructor(private roomService: RoomService) {}

  AddRoom(roomForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully';
      roomForm.reset();
      // Default form values
      // roomForm.resetForm({
      //   roomNumber: '',
      //   roomType: '',
      //   amenities: '',
      //   checkinTime: new Date(),
      //   checkoutTime: new Date(),
      //   photos: '',
      //   price: 0,
      //   rating: 0,
      // });
    });
  }
}
