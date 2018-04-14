import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home.component';
import { AuthGuardService } from '../../core/services/auth-guard.service';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [ AuthGuardService],
})
export class HomeModule { }
