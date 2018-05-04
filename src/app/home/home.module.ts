import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
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
