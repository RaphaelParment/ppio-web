import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
    { path: 'ppio', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
    { path: '**', redirectTo: 'ppio' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
