import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NavHelperService } from '../../../services/nav-helper.service';



@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [
		RouterModule,
		RouterLinkActive,
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

	public currentPage:string;

	constructor(private navHelper: NavHelperService) { }

	ngOnInit(): void {
		this.navHelper.currentpage.subscribe(page => this.currentPage = page);
	}
	

}
