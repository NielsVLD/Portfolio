import { map, Observable } from 'rxjs';

export class AuthGuard {
  // constructor(
  //   private authService: AuthService,
  //   private router: Router,
  // ) {}

  canActivate() {
    return true;
    // return this.isSignedIn();
  }

  // isSignedIn(): Observable<boolean> {
  //   return this.authService.isSignedIn().pipe(
  //     map((isSignedIn) => {
  //       if (!isSignedIn) {
  //         // redirect to signin page
  //         this.router.navigate(['signin']);
  //         return false;
  //       }
  //       return true;
  //     }),
  //   );
  // }
}
