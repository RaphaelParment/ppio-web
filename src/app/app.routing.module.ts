import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
    { path: '', loadChildren: 'app/features/home/home.module#HomeModule'},
    { path: 'login', loadChildren: 'app/features/login/login.module#LoginModule'},
    { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
