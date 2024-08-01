import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy{

	private page = "projects";

	constructor(private navHelper: NavHelperService ){}

	ngOnInit(): void {
			this.navHelper.changeCurrentPage(this.page);
	}

	ngOnDestroy(): void {
			this.navHelper.changeCurrentPage("");
	}
}
