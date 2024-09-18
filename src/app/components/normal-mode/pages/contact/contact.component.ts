import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy  {
    private page = "contacts";

    constructor(private navHelper: NavHelperService ){}

    ngOnInit(): void {
        this.navHelper.changeCurrentPage(this.page);
    }

    ngOnDestroy(): void {
        this.navHelper.changeCurrentPage("");
    }
}
