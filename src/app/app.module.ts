import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from './services/authInterceptor.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './helpers/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoredApiPageComponent } from './components/bored-api-page/bored-api-page.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectModalComponent } from './components/projects/project-modal/project-modal.component';
import { ProjectModalEditComponent } from './components/projects/project-modal-edit/project-modal-edit.component';
import { ProjectModalNewComponent } from './components/projects/project-modal-new/project-modal-new.component';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BoredApiPageComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectModalComponent,
    ProjectModalEditComponent,
    ProjectModalNewComponent,
    TodoListPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatProgressSpinner,
    BrowserAnimationsModule,
    MatProgressSpinner,
    MatOption,
    MatSelect,
    MatOption,
    MatFormField,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (router: Router) => {
        return new AuthInterceptor(router);
      },
      multi: true,
      deps: [Router],
    },
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
