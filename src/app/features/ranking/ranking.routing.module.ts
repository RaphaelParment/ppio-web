import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './components/ranking.component';


const routes: Routes = [
  {
      path: '',
      component: RankingComponent
  },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RankingRoutingModule { }
