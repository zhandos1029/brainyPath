import {Route} from '@angular/router';
import {PhysicsComponent} from "./physics/physics.component";
import {ChemistryComponent} from "./chemistry/chemistry.component";
import {BiologyComponent} from "./biology/biology.component";
import {GeographyComponent} from "./geography/geography.component";

export const subjectsRoutes: Route[] = [
  {
    path     : 'physics',
    component: PhysicsComponent,
  },
  {
    path     : 'chemistry',
    component: ChemistryComponent,
  },
  {
    path     : 'biology',
    component: BiologyComponent,
  },
  {
    path     : 'geography',
    component: GeographyComponent,
  }
];

