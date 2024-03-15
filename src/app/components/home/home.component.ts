import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  profilePicture = 'assets/images/homeImage.png';
  profilePicture2: string = 'assets/images/aboutPage.jpg';
}
