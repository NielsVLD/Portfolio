import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  github: string = 'https://github.com/NielsVLD';
  linkedin: string = 'https://www.linkedin.com/in/niels-krommenhoek-3063391a3/';
  isSignedIn: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.auth.onStateChanged().forEach((state: any) => {
      this.auth
        .isSignedIn()
        .forEach((signedIn: boolean) => (this.isSignedIn = signedIn));
    });
  }

  signOut() {
    if (this.isSignedIn) {
      this.auth.signOut().forEach((response) => {
        if (response) {
          this.router.navigateByUrl('');
        }
      });
    }
  }
}
