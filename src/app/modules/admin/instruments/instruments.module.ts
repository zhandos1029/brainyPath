import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {instrumentsRoutes} from './instruments-routing.module';
import {RouterModule} from "@angular/router";
import { NewsComponent } from './news/news.component';
import { SettingComponent } from './setting/setting.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NewsComponent,
    SettingComponent,
    ContactsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(instrumentsRoutes),
        MatIconModule,
    ]
})
export class InstrumentsModule { }
