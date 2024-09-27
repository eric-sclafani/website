import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Repository } from '../interfaces/repository'

@Injectable({
	providedIn: 'root'
})
export class GithubService {

	private url = 'https://api.github.com/users/eric-sclafani/repos'

	constructor(private http: HttpClient) { }

	public getRepos():Observable<Repository[]>{
		return this.http.get<any[]>(this.url).pipe(
			map((data) => this.convertToRepositories(data)),
		)		
	}

	// map the response object into Repository objects
	private convertToRepositories(data:any[]):Repository[]{
		return data.map(item => {
			return {
			  name: item.name,
			  description: item.description,
			  stargazers_count: item.stargazers_count,
			  watchers_count: item.watchers_count,
			  language: item.language,
			  forks: item.forks,
			  html_url: item.html_url
			} as Repository;
		  });
	}

}
