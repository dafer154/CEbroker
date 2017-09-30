import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
