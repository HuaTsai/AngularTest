import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RoomComponent } from './room/room.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { InitService } from './init.service';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent, RoomComponent, ContainerComponent, EmployeeComponent, RouterLink, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo2';
  @ViewChild('name', {static: true}) name !: ElementRef;

  constructor(private initService: InitService) {
    console.log('In app component constructor, initService is available');
    console.log(this.initService.config);
  }

  ngOnInit() {
    this.name.nativeElement.innerText = 'Access by ElementRef & nativeElement';
  }

  // ng-template can be accessed using @ViewChild by tag name
  // @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;

  // ngAfterViewInit() {
    // dynamically create component
  //   const componentRef = this.vcr.createComponent(RoomComponent);
  //   componentRef.instance.numberOfRooms = 20;
  // }
}
