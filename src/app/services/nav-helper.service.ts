import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NavHelperService {

	private pageSource = new BehaviorSubject<string>("");
	currentpage = this.pageSource.asObservable();

	constructor() { }

	changeCurrentPage(page: string) {
		this.pageSource.next(page);
	}
}
