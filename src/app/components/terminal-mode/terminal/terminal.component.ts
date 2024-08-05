import {
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { ModeSelectionComponent } from '../../shared/mode-selection/mode-selection.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromptComponent } from '../prompt/prompt.component';
import { ResponseComponent } from '../response/response.component';

import { Command } from '../../../interfaces/terminal';
import { InfoService } from '../../../services/info.service';

@Component({
	selector: 'app-terminal',
	standalone: true,
	imports: [
		ModeSelectionComponent,
		FooterComponent,
		PromptComponent,
		ResponseComponent
	],
	templateUrl: 'terminal.component.html',
	styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements OnInit {

	@ViewChild('innerTerminal') innerTerminal: ElementRef;

	validCommands = [
		'',
		'welcome',
		'help',
		'hello',
		'about',
		'projects',
		'contact',
		'resume',
		'github',
		'linkedin',
		'repo',
		'clear',
		'cl',
		'text',
		'ericspasswords',
		'funny'
	]

	command: Command;
	commandHistory: Command[] = [];

	public about: any;
	public projects: any;
	public resumePath: any;
	public links: any;

	constructor(private _info: InfoService, private _router: Router) { }

	ngOnInit(): void {
		this.about = this._info.about();
		this.projects = this._info.projects();
		this.resumePath = this._info.resumePath();
		this.links = this._info.links();

		setTimeout(() => {
			this.commandHistory.push({
				valid: true,
				text: 'welcome'
			})
		},
			250
		)
	}

	public onEnter(): void {
		this.saveCommandToHistory();
		this.scrollToBottom();

		if (this.command.valid) {
			this.commandRouter(this.command.text);
		}

	}

	private saveCommandToHistory(): void {
		this.commandHistory.push(this.command);
	}

	private scrollToBottom(): void {
		setTimeout(
			() => this.innerTerminal.nativeElement.scrollTop = this.innerTerminal.nativeElement.scrollHeight, 1);
	}

	private randomIdx(length: number): number {
		return Math.round(Math.random() * length);
	}

	private commandRouter(commandText: string) {

		switch (commandText) {
			case 'resume':
				window.open(this.resumePath);
				break;

			case 'linkedin':
				window.open(this.links.linkedin);
				break;

			case 'github':
				window.open(this.links.github);
				break;

			case 'repo':
				window.open(this.links.repo);
				break;

			case 'cl':
			case 'clear':
				this.commandHistory = [];
				break;

			case 'text':
				this._router.navigate(['/text']);
				break;

			case 'ericspasswords':
				window.open(this.links.rickroll);
				break;

			case 'funny':
				const link = this.getFunnyVideo();
				localStorage['funny'] = link;
				window.open(link);
				break;

		}
	}

	private getFunnyVideo():string{
		const vids = [
			'https://www.youtube.com/watch?v=Otk4HJAx_9M',
			'https://www.youtube.com/watch?v=lod_LUp3ggc',
			'https://www.youtube.com/watch?v=bt3_q8z0dzw&list=LL&index=21',
			'https://www.youtube.com/watch?v=Uo3cL4nrGOk',
			'https://www.youtube.com/watch?v=Pw1UokzMQ6k&list=LL&index=130',
			'https://www.youtube.com/watch?v=aXOChLn5ZdQ',
		]
		const idx = this.randomIdx(vids.length - 1);
		const link = vids[idx];
		return link;
	}




}


//! Important: for resume, alongside attempting to open a new tab, also display the pdf link in case new tab is blocked
//! (do this for any external link redirect commands)

// * In text mode:
//* About - use this maybe https://github.com/ryo-ma/github-profile-trophy 
//* Projects - use same or similar code to display repos like here https://eric-sclafani.github.io/repositories/ 


/* TODO:
ericspasswords rick roll redirect
funny (redirects users to a randomly selected funny Youtube video)
	- https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab	 
	- 
	

maybe have commands to change style of terminal



*/