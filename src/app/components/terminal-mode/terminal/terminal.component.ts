import {
	Component,
	OnInit,
} from '@angular/core';

import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromptComponent } from '../prompt/prompt.component';

import { Command, TerminalResponse } from '../../../interfaces/terminal';
import { InfoService } from '../../../services/info.service';

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
		'linkedin',
		'repo',
		'clear',
		'text',
		'ericspasswords',
		'funny'
	]

	command: Command;
	commandHistory: Command[] = [];
	terminalResponses: TerminalResponse[] = [];


	constructor(private _info: InfoService) { }

	//* IDEA: add a "Learning Journey" or someshit on my website explaining
	//* my field switch and journey to learn new full stack technologies, etc..
	ngOnInit(): void {



	}

	public executeCommandOnEnter(): void {
		console.log(this.command)
		this.saveCommandToHistory();

		// router will decide which method to execute and return that method
		// method will be called here to ...
		this.runCommandIfValid();

	}

	private saveCommandToHistory(): void {
		if (this.command.text != "") {
			this.commandHistory.push(this.command);
		}
	}

	private runCommandIfValid(): void {

		let text:string;
		if (this.command.valid) {
			text = this.command.text != "" ? "VALID COMMAND" : "";
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

	private commandRouter(commandText:string){

	}

	

}


//! Important: for resume, alongside attempting to open a new tab, also display the pdf link in case new tab is blocked


/* TODO:
ericspasswords rick roll redirect
funny (redirects users to a randomly selected funny Youtube video)
	- https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab	 
	- https://www.youtube.com/watch?v=Otk4HJAx_9M

maybe have commands to change style of terminal



*/