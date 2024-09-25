import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Repository } from '../interfaces/repository';

@Injectable({
	providedIn: 'root'
})
export class GithubService {

	private url = 'https://api.github.com/users/eric-sclafani/repos'

	constructor(private http: HttpClient) { }

	getRepos():Observable<Object>{
		//name,  description, stargazers_count, watchers_count,language, forks, html_url,
		return this.http.get(this.url);
	}
}
