import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    FormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [ ],
})
export class HomeModule { }
