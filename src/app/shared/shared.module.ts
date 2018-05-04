import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { AddMatchComponent } from './add-match/add-match.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
    declarations: [
        AddMatchComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        AddMatchComponent,
        PaginationComponent
    ],
    providers: []
})
export class SharedModule { }
