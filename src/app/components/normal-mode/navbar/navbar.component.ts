import { Component, OnInit, HostListener} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NavHelperService } from '../../../services/nav-helper.service';



@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [
		RouterModule,
		RouterLinkActive,
		NgTemplateOutlet
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

	public currentPage:string;
	public screenWidth: number;  
	public screenHeight: number;  

	constructor(private navHelper: NavHelperService) { }

	ngOnInit(): void {
		this.navHelper.currentpage.subscribe(page => this.currentPage = page);
		this.screenWidth = window.innerWidth;  
      	this.screenHeight = window.innerHeight; 
	}

	@HostListener('window:resize', ['$event'])  
  	onResize() {  
    	this.screenWidth = window.innerWidth;  
    	this.screenHeight = window.innerHeight; 
  	}  

	displayMobileLayout():boolean {
		return this.screenWidth < 450;
	}




}
