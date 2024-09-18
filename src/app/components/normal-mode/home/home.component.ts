import { NavbarComponent } from '../navbar/navbar.component';
import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router} from '@angular/router';

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

	public router: Router;

	constructor(router: Router ) {
		this.router = router;
	}


}
