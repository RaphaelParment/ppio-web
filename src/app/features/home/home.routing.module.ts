import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HomeModule } from './home.module';
import { AuthGuardService } from '../../core/services/auth-guard.service';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
