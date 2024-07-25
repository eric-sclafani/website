import {
	Component,
	ElementRef,
	OnInit,
} from '@angular/core';

import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromptComponent } from '../prompt/prompt.component';
import { Command } from '../../../interfaces/command';

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

	// !IMPORTANT: need to have proper input sanitation for security purposes
	validCommands = [
		'',
		'help',
		'hello',
		'about',
		'projects',
		'resume',
		'github',
		'repo',
		'linkedin',
		'clear',
		'text',
		'ericspasswords',
		'funnyvideo'
	]

	promptDiv: HTMLDivElement;
	command:Command;
	commandHistory:string[] = [];

	constructor() { }

	ngOnInit(): void {

	}

	
	public receiveCommand(command:Command): void {
		this.command = command;
	}


	public executeCommand():void{
		console.log(this.command)
		this.saveCommandToHistory();
		
		/*
		//- save command text to history
		- capture the prompt div HTML
		- somehow append prompt HTML to history-container
		- execute appropriate method given valid command
			- if invalid, show invalid command message
		*/
	}

	private saveCommandToHistory(): void {
		if (this.command.text != ""){
			this.commandHistory.push(this.command.text);
		}
	}



}

/* TODO:
tab completion
up and down arrow for past user inputs (valid and invalid)
ericspasswords rick roll redirect
funnyvideo (redirects users to a randomly selected funny Youtube video)
	- https://www.youtube.com/watch?v=Otk4HJAx_9M



*/