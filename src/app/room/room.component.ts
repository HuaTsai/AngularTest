import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './room';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomService } from './services/room.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, RoomListComponent, HeaderComponent, RouterOutlet],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  // providers: [RoomService]
})
export class RoomComponent {
  hotelName = 'Hotel California';
  numberOfRooms = 5;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 0
  };
  roomList: RoomList[] = [];
  title = 'Room List';
  // ?: optional chaining operator
  // !: non-null assertion operator
  subscription !: Subscription;
  error$ = new Subject<string>;
  getError$ = this.error$.asObservable();
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );
  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  constructor(private roomService: RoomService) {
  }
  totalBytes = 0;
  ngOnInit() {
    // this.stream.subscribe((data) => { console.log(data); });
    this.roomService.getPhotos().subscribe((events) => {
      switch (events.type) {
        case HttpEventType.Sent: {
          console.log('Request sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += events.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log('Request completed');
          console.log(events.body);
          break;
        }
      }
    });
    this.stream.subscribe({
      next: (value) => { console.log(value); },
      complete: () => { console.log('completed'); },
      error: (error) => { console.log(error); }
    });
    // order: next, error, complete callback functions
    this.stream.subscribe((data) => console.log(data));
    // this.roomService.getRooms().subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
    // this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
    // this.subscription =
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: '104',
      roomType: 'Deluxe',
      amenities: 'AC, TV, WiFi, Water Heater',
      price: 2000,
      photos: 'assets/images/deluxe.jpg',
      checkinTime: new Date('2021-01-01T12:00:00'),
      checkoutTime: new Date('2021-01-01T12:00:00'),
      rating: 5.3
    };
    // always use spread operator to add new item to array
    // onPush change detection strategy will not detect changes if we use push
    // this.roomList = [...this.roomList, room];

    this.roomService.addRoom(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
  selectedRoom!: RoomList;
  // ngDoCheck is called whenever change detection is triggered
  // ngDoCheck and ngOnChanges should not use in the same component to avoid conflicts
  ngDoCheck() {
    console.log('Room Component ngDoCheck');
  }

  // @ViewChild is used to get the reference of child component
  // static: true means we can (and safe) access the child component in parent ngOnInit
  // Not sure: just use the default false value
  // @ViewChild(HeaderComponent, {static: true}) header!: HeaderComponent;
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  // QueryList is used to get the reference of child components
  @ViewChildren(HeaderComponent) headers!: QueryList<HeaderComponent>;

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
    // observer.error('error')
  });

  // ngAfterViewInit is called after the view is initialized
  ngAfterViewInit() {
    console.log(this.header);
    // Since they run twice in development mode, the error is thrown
    // ExpressionChangedAfterItHasBeenCheckedError
    // This error is okay to ignore in development mode, but should be fixed in production mode
    this.header.title = 'Rooms View'
    console.log(this.headers);
    this.headers.last.title = 'Last Rooms Header';
  }

  // ngAfterViewChecked is called after the view is checked
  ngAfterViewChecked() {

  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe',
      amenities: 'AC, TV, WiFi, Water Heater',
      price: 2000,
      photos: 'assets/images/deluxe.jpg',
      checkinTime: new Date('2021-01-01T12:00:00'),
      checkoutTime: new Date('2021-01-01T12:00:00'),
      rating: 5.3
    };
    // always use spread operator to add new item to array
    this.roomService.editRoom(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom('3').subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
}
