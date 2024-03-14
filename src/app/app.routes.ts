import { mapToCanActivate, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: mapToCanActivate([AuthGuard]),
  },
];
