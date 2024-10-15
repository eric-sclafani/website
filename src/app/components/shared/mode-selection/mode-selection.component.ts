import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
	selector: 'app-mode-selection',
	standalone: true,
	imports: [
		RouterModule,
		CommonModule
	],
	templateUrl: './mode-selection.component.html',
	styleUrl: './mode-selection.component.scss'
})
export class ModeSelectionComponent { 

	public router:Router

	constructor(router:Router){
		this.router = router;
	}

	setClass():Record<string, boolean>{
		return {
			'pixel-font' : this.router.url.includes('/'),
			'hack-font' : this.router.url.includes('/nerd')
		}
	}
}
