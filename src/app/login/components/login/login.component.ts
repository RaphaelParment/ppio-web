import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';
import { Player } from '../../../core/models/user';
import { Crypto } from '../../../utils/crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // password = new FormControl('', [ Validators.required]);
  // formLogin = new FormGroup({'email' : this.email, 'password': this.password});

  firstname  = new FormControl('', [ Validators.required]);
  lastname  = new FormControl('', [ Validators.required]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  formRegister = new FormGroup({'firstname': this.firstname, 'lastname': this.lastname, 'email': this.email });
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {


  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // getErrorMessagePwd() {
  //   return this.password.hasError('required') ? 'You must enter a value' : '';
  // }

  onFormSubmit() {
    // this.loginService.login(this.email.value, this.password.value).subscribe(response => {
    //   this.router.navigate(['']);
    // });
    const player = new Player(null, this.firstname.value, this.lastname.value, this.email.value);
    this.loginService.login(player).subscribe(response => {
        this.router.navigate(['']);
      });
    }
}
