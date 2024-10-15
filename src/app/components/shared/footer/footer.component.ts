import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	template: `
	<footer>
	© <span [ngClass]="setClass()">Copyright {{ currentYear }} Eric Sclafani. Made with ❤️ in Angular </span>
	</footer>`,
	styleUrl: './footer.component.scss'
})
export class FooterComponent {

	public router: Router;

	currentYear = new Date().getFullYear()

	constructor(router: Router) {
		this.router = router
	}

    setClass():Record<string, boolean>{
		return {
			'pixel-font' : this.router.url.includes('/'),
			'hack-font' : this.router.url.includes('/nerd')
		}
	}

}


