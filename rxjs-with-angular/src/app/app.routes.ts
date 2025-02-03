import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { ObservablesComponent } from './observables/observables.component';
import { APP_ROUTES } from '../shared/utils/app-routes';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTES.Observables.route
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: APP_ROUTES.Observables.route,
        component: ObservablesComponent
      },
      {
        path: APP_ROUTES.Observer.route,
        component: ObserverComponent
      },
      {
        path: APP_ROUTES.Operators.route,
        component: OperatorsComponent
      },
      {
        path: APP_ROUTES.Schedulers.route,
        component: SchedulersComponent
      },
      {
        path: APP_ROUTES.Subjects.route,
        component: SubjectsComponent
      },
      {
        path: APP_ROUTES.Subscriptions.route,
        component: SubscriptionsComponent
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
