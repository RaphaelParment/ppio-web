import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesRoutingModule } from './matches.routing.module';
import { MatchesComponent } from './components/matches.component';
import { MatchService } from '../../core/services/match.service';

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
  ],
  providers: [
    MatchService
  ]
})
export class MatchesModule { }
