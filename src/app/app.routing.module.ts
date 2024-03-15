import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './helpers/login/login.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: mapToCanActivate([AuthGuard]),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
