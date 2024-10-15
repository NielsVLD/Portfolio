import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  email: string = 'nielskrommenhoek@hotmail.nl';

  github: string = 'https://github.com/NielsVLD';

  linkedin: string = 'https://www.linkedin.com/in/niels-krommenhoek-3063391a3/';
}
