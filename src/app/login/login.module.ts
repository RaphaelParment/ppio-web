import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login.routing.module';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
    // MATERIAL
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule { }
