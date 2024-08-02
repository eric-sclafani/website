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

	public about:any;
	public projects: any;
	public resumePath: any;
	public contact: any;

	public canDisplayCommandResponse = false;

	constructor(private _info: InfoService) { }

	ngOnInit(): void {
		this.about = this._info.about();
		this.projects = this._info.projects();
		this.resumePath = this._info.resumePath();
		this.contact = this._info.contact();
	}

	public executeCommand(): void {
		this.saveCommandToHistory();
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
			text = "VALID COMMAND";
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


//! Important: for resume, alongside attempting to open a new tab, also display the pdf link in case new tab is blocked
//! (do this for any external link command like "funny" too)
//* About: use this maybe https://github.com/ryo-ma/github-profile-trophy 
//* Projects: use same or similar code to display repos like here https://eric-sclafani.github.io/repositories/ (in text mode)


/* TODO:
ericspasswords rick roll redirect
funny (redirects users to a randomly selected funny Youtube video)
	- https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab	 
	- https://www.youtube.com/watch?v=Otk4HJAx_9M
	- https://www.youtube.com/watch?v=lod_LUp3ggc
	

maybe have commands to change style of terminal



*/