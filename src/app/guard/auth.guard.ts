import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate() {
    return this.isSignedIn();
  }

  isSignedIn(): Observable<boolean> {
    return this.authService.isSignedIn().pipe(
      map((isSignedIn) => {
        if (!isSignedIn) {
          // redirect to signin page
          this.router.navigate(['login']);
          return false;
        }
        return true;
      }),
    );
  }
}
