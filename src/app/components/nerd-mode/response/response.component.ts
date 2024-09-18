import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Command } from '../../../interfaces/nerd';

@Component({
	selector: 'app-response',
	standalone: true,
	imports: [NgTemplateOutlet],
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

	public helpCommands:Record<string,string>[] = [
		{ title: 'welcome', text: 'welcome message'},
		{ title: 'help', text: 'see all commands' },
		{ title: 'hello', text: 'a very friendly greeting' },
		{ title: 'about', text: 'About me' },
		{ title: 'projects', text: 'noteworthy projects' },
		{ title: 'contact', text: 'contact information' },
		{ title: 'resume', text: 'my resume (PDF, new tab)' },
		{ title: 'github', text: 'my github account (new tab)' },
		{ title: 'linkedin', text: 'my linkedin (new tab)' },
		{ title: 'repo', text: 'repo for this website (new tab)' },
		{ title: 'funny', text: 'opens a random video I find funny (new tab)' },
		{ title: 'clear,cl', text: 'clears terminal history' },
		{ title: 'normal', text: 'switches to \'normal\' mode' },
		{ title: 'ericspasswords', text: 'all of my juicy passwords at your disposal' },
	]
}
