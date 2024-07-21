import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ModeSelectionComponent } from './components/shared/mode-selection/mode-selection.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModeSelectionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = 'Eric Sclafani';
}
