import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { MatchService } from './services/match.service';
import { LoginService } from './services/login.service';

@NgModule({
    providers: [
        AuthGuardService,
        UserService,
        MatchService,
        LoginService
        ]
})
export class CoreModule { }
