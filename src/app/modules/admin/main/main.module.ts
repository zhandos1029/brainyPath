import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {mainRoutes} from './main-routing.module';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { PageComponent } from './page/page.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {ComponentModule} from "../../../components/components.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    AboutComponent,
    PageComponent,
    SubjectsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        ComponentModule,
        MatProgressBarModule,
        MatIconModule,
        TranslocoModule,
    ]
})
export class MainModule { }
