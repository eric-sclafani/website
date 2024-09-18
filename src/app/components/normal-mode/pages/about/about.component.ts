import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';
import { InfoService } from '../../../../services/info.service';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {

    private page = "about";
    public about: any;
	public projects: any;
	public resumePath: any;
	public links: any;

    constructor(private _navHelper: NavHelperService, private _info: InfoService){}

    ngOnInit(): void {
        this._navHelper.changeCurrentPage(this.page);

        this.about = this._info.about();
		this.projects = this._info.projects();
		this.resumePath = this._info.resumePath();
		this.links = this._info.links();

    }

    ngOnDestroy(): void {
        this._navHelper.changeCurrentPage("");
    }
}


//* About - use this maybe https://github.com/ryo-ma/github-profile-trophy 
//* Projects - use same or similar code to display repos like here https://eric-sclafani.github.io/repositories/ 
