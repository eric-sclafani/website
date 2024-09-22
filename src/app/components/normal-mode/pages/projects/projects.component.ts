import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';
import { InfoService } from '../../../../services/info.service';

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

	constructor(private navHelper: NavHelperService,  private _info: InfoService){
		this.projects = _info.projects();
	}

	ngOnInit(): void {
			this.navHelper.changeCurrentPage(this.page);
	}

	ngOnDestroy(): void {
			this.navHelper.changeCurrentPage("");
	}
}
