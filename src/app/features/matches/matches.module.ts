import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesRoutingModule } from './matches.routing.module';
import { MatchesComponent } from './components/matches.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule
  ],
  declarations: [
    MatchesComponent
  ],
  exports: [
    MatchesComponent
  ]
})
export class MatchesModule { }
