import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './services/authInterceptor.service';
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
