import {Route} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {PageComponent} from "./page/page.component";
import {SubjectsComponent} from "./subjects/subjects.component";

export const mainRoutes: Route[] = [
  {
    path     : 'page',
    component: PageComponent,
  },
  {
    path     : 'about',
    component: AboutComponent,
  },
  {
    path     : 'subjects',
    component: SubjectsComponent,
  },
];
