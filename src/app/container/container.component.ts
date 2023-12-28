import { Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [EmployeeComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;

  ngAfterContentInit() {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }

}
