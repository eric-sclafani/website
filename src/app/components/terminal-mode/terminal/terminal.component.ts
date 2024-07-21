import { Component } from '@angular/core';
import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';



@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [
    ModeSelectionComponent,
    FooterComponent
  ],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent {

}
