import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatchValidateComponent } from './components/match-validate/match-validate.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,

  ],
  declarations: [
    DashboardComponent,
    MatchValidateComponent,
    UserProfileComponent
  ],
  exports: [
    DashboardComponent,
    MatchValidateComponent,
    UserProfileComponent
  ]
})
export class DashboardModule { }
