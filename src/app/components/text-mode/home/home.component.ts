import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		NavbarComponent,
		RouterOutlet,
		ModeSelectionComponent,
		FooterComponent
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {

}
