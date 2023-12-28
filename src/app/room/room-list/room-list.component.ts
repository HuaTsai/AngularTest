import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../room';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent {
  @Input() rooms: RoomList[] | null = [];  // null for async pipe
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  // ngOnChanges is called when any of the @Input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnDestroy() {
    console.log('RoomListComponent destroyed');
  }
}
