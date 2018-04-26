import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { AddMatchComponent } from './components/add-match/add-match.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddMatchComponent
  ],
  exports: [
    HomeComponent,
    AddMatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    AuthGuardService,
  ],
})
export class HomeModule { }
