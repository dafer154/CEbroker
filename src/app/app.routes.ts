import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './components/search/search.component';

const app_routes: Routes = [
  { path: 'home', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
