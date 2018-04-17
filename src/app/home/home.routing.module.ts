import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AuthGuardService } from '../core/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'matches',
                loadChildren: 'app/features/matches/matches.module#MatchesModule'
            },
            {
                path: 'ranking',
                loadChildren: 'app/features/ranking/ranking.module#RankingModule'
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
