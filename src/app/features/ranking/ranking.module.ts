import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingRoutingModule } from './ranking.routing.module';
import { RankingComponent } from './components/ranking.component';
import { UserService } from '../../core/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  declarations: [RankingComponent],
  exports: [RankingComponent],
  providers: [UserService]
})
export class RankingModule { }
