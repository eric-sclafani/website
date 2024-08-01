import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {

    private page = "about";

    constructor(private navHelper: NavHelperService ){}

    ngOnInit(): void {
        this.navHelper.changeCurrentPage(this.page);
    }

    ngOnDestroy(): void {
        this.navHelper.changeCurrentPage("");
    }


}
