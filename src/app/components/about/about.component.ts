import { Component } from '@angular/core';
import { Project } from '../../entities/project.entity';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  profilePicture: string =
    'https://onedrive.live.com/embed?resid=6BFB86DAE0ADC616%213480&authkey=%21ALranRe6JLeHfAQ&width=660';
  loaded: boolean = false;
  projects: Project[] = [];

  onImageLoad() {
    this.loaded = true;
  }
}
