import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HoverDirective, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private route: Router) {}
  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      // alert('Login Successfull');
      // this.route.navigate(['/room', 'add']);
      this.route.navigateByUrl('/room/add');
    }
  }
}
