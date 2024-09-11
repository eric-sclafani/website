import { NavbarComponent } from '../navbar/navbar.component';
import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		RouterOutlet,
		RouterModule,
		NavbarComponent,
		ModeSelectionComponent,
		FooterComponent,
		
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {

	public currentPage = 'Home';

	setCurrentPage(page:string):void{
		this.currentPage = page;
	}

	resetCurrentPage():void{
		this.currentPage = 'Home';
	}

}
