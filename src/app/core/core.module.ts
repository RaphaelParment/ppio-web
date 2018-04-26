import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { MatchService } from './services/match.service';

@NgModule({
    providers: [
        AuthGuardService,
        UserService,
        MatchService
        ]
})
export class CoreModule { }
