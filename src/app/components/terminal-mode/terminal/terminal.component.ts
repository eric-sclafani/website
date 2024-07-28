import {
	Component,
	OnInit,
} from '@angular/core';

import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromptComponent } from '../prompt/prompt.component';

import { Command, TerminalResponse } from '../../../interfaces/terminal';

@Component({
	selector: 'app-terminal',
	standalone: true,
	imports: [
		ModeSelectionComponent,
		FooterComponent,
		PromptComponent
	],
	templateUrl: 'terminal.component.html',
	styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements OnInit {

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

	command: Command;
	commandHistory: Command[] = [];
	terminalResponses: TerminalResponse[] = [];


	constructor() { }

	ngOnInit(): void {

	}

	public executeCommandOnEnter(): void {
		console.log(this.command)
		this.saveCommandToHistory();
		this.runCommandIfValid();
	}

	private saveCommandToHistory(): void {
		if (this.command.text != "") {
			this.commandHistory.push(this.command);
		}
	}

	private runCommandIfValid(): void {
		let text = "";
		if (this.command.valid) {
			// need to determine which command method to run
			// text will equal what information needs to be sent to terminal
			text = "this is a valid command!!!"
		}
		else {
			text = "this is an invalid command!!!"
		}

		const response = this.createTerminalResponse(text);
		this.terminalResponses.push(response);
	}

	private createTerminalResponse(responseText: string): TerminalResponse {
		return {
			commandText: this.command.text,
			valid: this.command.valid,
			responseText: responseText
		}
	}

	

}





/* TODO:
ericspasswords rick roll redirect
funnyvideo (redirects users to a randomly selected funny Youtube video)
	- https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab	 
	- https://www.youtube.com/watch?v=Otk4HJAx_9M

maybe have commands to change style of terminal



*/