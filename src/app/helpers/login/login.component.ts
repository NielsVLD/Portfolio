import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authFailed: boolean = false;
  signedIn: boolean = false;
  loaded: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.authService.isSignedIn().forEach((isSignedIn) => {
      this.signedIn = isSignedIn;
      this.loaded = true;
    });
  }

  ngOnInit(): void {
    this.authFailed = false;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public signIn(_: any) {
    if (!this.loginForm.valid) {
      return;
    }
    const userName = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService
      .signIn(userName, password)
      .forEach((response) => {
        if (response) {
          this.router.navigateByUrl('/home').then(() => {
            window.location.reload();
          });
        }
      })
      .catch((_) => {
        this.authFailed = true;
      });
  }
}
