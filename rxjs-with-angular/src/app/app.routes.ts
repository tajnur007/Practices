import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { ObservablesComponent } from './observables/observables.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'observables'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'observables',
        component: ObservablesComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
