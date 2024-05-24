import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public isSignedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.onStateChanged().forEach((state: any) => {
      this.auth
        .isSignedIn()
        .pipe(
          catchError((error: any) => {
            console.error('Error:', error);
            return of(false);
          }),
        )
        .subscribe((signedIn: boolean) => {
          this.isSignedIn = signedIn;
        });
    });
  }
}
