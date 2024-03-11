import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, MatProgressSpinner, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // profilePicture: string =
  //   'https://onedrive.live.com/embed?resid=6BFB86DAE0ADC616%213480&authkey=%21ALranRe6JLeHfAQ&width=660';

  profilePicture: string = 'assets/images/profile_pic.jpg';

  loaded: boolean = false;

  onImageLoad() {
    this.loaded = true;
  }
}
