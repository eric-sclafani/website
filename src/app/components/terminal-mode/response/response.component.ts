import { Component, Input } from '@angular/core';
import { Command } from '../../../interfaces/terminal';

@Component({
	selector: 'app-response',
	standalone: true,
	imports: [],
	templateUrl: './response.component.html',
	styleUrl: './response.component.scss'
})
export class ResponseComponent {

	@Input() command: Command;
	@Input() about: any;
	@Input() projects: any;
	@Input() resumePath: any;
	@Input() links: any;

	public funnyVideoLink = localStorage['funny'];
}
