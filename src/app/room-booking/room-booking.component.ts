import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './room-booking.component.html',
  styleUrl: './room-booking.component.scss'
})
export class RoomBookingComponent {
  // id$ = this.router.params.pipe(map(params => params['id']));
  id$ = this.router.paramMap.pipe(map(params => params.get('id')));
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.router.snapshot.params['id'];
    // this.router.params.subscribe((params) => { this.id = params['id']; });
  }

}
