import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';
import { InfoService } from '../../../../services/info.service';
import { GithubService } from '../../../../services/github.service';

// TODO: inject github api code and retrieve repo data

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy{

	private page = "projects";
	public projects: any;

	constructor(
		private _navHelper: NavHelperService, 
		private info: InfoService,
		private github: GithubService
		){
		this.projects = info.projects();
	}

	ngOnInit(): void {
			this._navHelper.changeCurrentPage(this.page);
	}

	ngOnDestroy(): void {
			this._navHelper.changeCurrentPage("");
	}
}


//* Projects - use same or similar code to display repos like here https://eric-sclafani.github.io/repositories/ 
//https://www.svgrepo.com/svg/533052/star
//https://www.svgrepo.com/svg/509958/git-branch
// https://www.svgrepo.com/svg/528057/book-2