import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesRoutingModule } from './matches.routing.module';
import { MatchesComponent } from './components/matches.component';
import { MatchService } from '../../core/services/match.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
