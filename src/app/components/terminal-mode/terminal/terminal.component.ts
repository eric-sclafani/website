import {
	Component,
	ElementRef,
	Renderer2,
	OnInit,
	ViewChild

} from '@angular/core';

import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromptComponent } from '../prompt/prompt.component';

@Component({
	selector: 'app-terminal',
	standalone: true,
	imports: [
		ModeSelectionComponent,
		FooterComponent,
		PromptComponent
	],
	templateUrl: './terminal.component.html',
	styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements OnInit {

	private listener: () => void

	// !IMPORTANT: need to have proper input sanitation for security purposes
	validCommands = [
		'help',
		'about',
		'projects',
		'resume',
		'github',
		'repo',
		'linkedin',
		'clear',
		'text',
		'echo',
		'ericspasswords'
	]
	constructor(private renderer: Renderer2) { }

	ngOnInit(): void {

	}

	

}
