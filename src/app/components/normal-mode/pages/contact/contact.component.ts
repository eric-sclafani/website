import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';
import { InfoService } from '../../../../services/info.service';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy  {
    private page = "contacts";
    public links: any;

    constructor(private navHelper: NavHelperService, private _info: InfoService){
        this.links = _info.links();
    }

    ngOnInit(): void {
        this.navHelper.changeCurrentPage(this.page);
    }

    ngOnDestroy(): void {
        this.navHelper.changeCurrentPage("");
    }
}
