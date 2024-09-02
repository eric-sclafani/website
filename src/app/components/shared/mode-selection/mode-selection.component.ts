import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mode-selection',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
  <nav>
      <a class="link" routerLink="/terminal" routerLinkActive="active">
          Terminal mode
      </a>
  
      <a class="link" routerLink="/text" routerLinkActive="active" (click)="showAlert()">
          Text mode
      </a>
  </nav>
`,
  styleUrl: './mode-selection.component.scss'
})
export class ModeSelectionComponent {

  showAlert(){
    alert("Text mode not yet implemented. Check back later :)")
  }
 }
