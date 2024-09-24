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

    constructor(private _navHelper: NavHelperService, private _info: InfoService){}

    ngOnInit(): void {
        this._navHelper.changeCurrentPage(this.page);
        this.about = this._info.about();
    }

    ngOnDestroy(): void {
        this._navHelper.changeCurrentPage("");
    }
}


