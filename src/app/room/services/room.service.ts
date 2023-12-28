import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../room';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_PROVIDERS } from '../../AppConfig/appconfig.service';
import { Subscription, finalize, shareReplay, tap } from 'rxjs';

// root injector: singleton instance
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  roomList: RoomList[] = [];
    // {
    //   roomNumber: '101',
    //   roomType: 'Deluxe',
    //   amenities: 'AC, TV, WiFi, Water Heater',
    //   price: 2000,
    //   photos: 'assets/images/deluxe.jpg',
    //   checkinTime: new Date('2021-01-01T12:00:00'),
    //   checkoutTime: new Date('2021-01-01T12:00:00'),
    //   rating: 5.3
    // },
    // {
    //   roomNumber: '102',
    //   roomType: 'Super Deluxe',
    //   amenities: 'AC, TV, WiFi, Water Heater, Mini Fridge',
    //   price: 3000,
    //   photos: 'assets/images/super-deluxe.jpg',
    //   checkinTime: new Date('2021-01-01T12:00:00'),
    //   checkoutTime: new Date('2021-01-01T12:00:00'),
    //   rating: 3.8
    // },
    // {
    //   roomNumber: '103',
    //   roomType: 'Suite',
    //   amenities: 'AC, TV, WiFi, Water Heater, Mini Fridge, Jacuzzi',
    //   price: 4000,
    //   photos: 'assets/images/suite.jpg',
    //   checkinTime: new Date('2021-01-01T12:00:00'),
    //   checkoutTime: new Date('2021-01-01T12:00:00'),
    //   rating: 4.5
    // }
  // ];

  // $: streams
  // headers = new HttpHeaders({'token': '12345'});
  getRooms$ = this.http.get<RoomList[]>('api/rooms'/*, {headers: this.headers}*/).pipe(
    shareReplay(1)
  );

  // @Inject(APP_SERVICE_PROVIDERS) private config: AppConfig
  // this.config.apiEndpoint
  constructor(private http: HttpClient) {
    // console.log(this.config.apiEndpoint);
    console.log('Room Service Constructor');
  }

  getRooms() {
    // return this.roomList;
    return this.http.get<RoomList[]>('api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true });
    return this.http.request(request);
  }
}
