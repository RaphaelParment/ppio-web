import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingRoutingModule } from './ranking.routing.module';
import { RankingComponent } from './components/ranking.component';

@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  declarations: [RankingComponent],
  exports: [RankingComponent]
})
export class RankingModule { }
