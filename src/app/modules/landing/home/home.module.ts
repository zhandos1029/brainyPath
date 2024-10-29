import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { LandingHomeComponent } from './home.component';
import { landingHomeRoutes } from './home.routing';
import {MatTabsModule} from "@angular/material/tabs";
import {FuseCardModule} from "../../../../@fuse/components/card";

@NgModule({
    declarations: [
        LandingHomeComponent
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        FuseCardModule
    ]
})
export class LandingHomeModule
{
}
