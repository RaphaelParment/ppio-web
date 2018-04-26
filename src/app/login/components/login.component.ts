import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [ Validators.required]);
  formLogin = new FormGroup({'email' : this.email, 'password': this.password});

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePwd() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  onFormSubmit() {
    this.loginService.login(this.email.value, this.password.value).subscribe(response => {
      this.router.navigate(['']);
    });
  }
}
