import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer>
  © Copyright {{ currentYear }} Eric Sclafani <span id="bar">|</span> Made with ❤️ in Angular
  </footer>`,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear() 
}
