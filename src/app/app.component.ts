import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { catchError, of } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  public title: string = 'Portfolio';
  public isSignedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.onStateChanged().forEach(() => {
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
