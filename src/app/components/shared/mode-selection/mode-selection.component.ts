import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-mode-selection',
	standalone: true,
	imports: [
		RouterModule,
	],
	templateUrl: './mode-selection.component.html',
	styleUrl: './mode-selection.component.scss'
})
export class ModeSelectionComponent {

	public isExpanded = false;
	public expandedSymbol = '↑';
	public hiddenSymbol = '↓';

	toggleNavBar(){
		this.isExpanded = !this.isExpanded
	}
}
