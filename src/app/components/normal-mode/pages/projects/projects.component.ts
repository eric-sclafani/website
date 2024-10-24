import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavHelperService } from '../../../../services/nav-helper.service';
import { GithubService } from '../../../../services/github.service';
import { Repository } from '../../../../interfaces/repository';


@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy{

	private page = 'projects';
	public repos:Repository[] = [];

	private desiredRepos = [
		'gram2vec',
		'syntax-regex-matcher',
		'website',
        'nyc-favorite-spots',
        'mta-data-dashboard'
	]

	// TODO: keep an eye on whether these mappings work when more repos are added
    // TODO: maybe use github api token
	public iconMapping:Record<string, string> = {
		'Python': 'assets/icons/python-svgrepo-com.png',
		'TypeScript': 'assets/icons/typescript-svgrepo-com.png',
		'JavaScript': 'assets/icons/js-svgrepo-com.png',
		'Ruby' : 'assets/icons/ruby-svgrepo-com.png',
		'C#' : 'assets/icons/dotnet-svgrepo-com.png'
	}

	constructor(
		private _navHelper: NavHelperService, 
		private github: GithubService
		) {}

	ngOnInit(): void {
		this._navHelper.changeCurrentPage(this.page);
		//this.repos = this.getDevData()
		this.getRepositories();

	}

	ngOnDestroy(): void {
		this._navHelper.changeCurrentPage("");
	}

	private getDevData():Repository[]{
		return [
			{
			  "name": "gram2vec",
			  "description": "Gram2Vec is a document embedding algorithm that embeds documents into a higher dimensional space based off grammatical style.",
			  "stargazers_count": 6,
			  "language": "Python",
			  "forks": 1,
			  "html_url": "https://github.com/eric-sclafani/gram2vec"
			},
			{
			  "name": "syntax-regex-matcher",
			  "description": "Syntax Regex Matcher is a package for applying regular expressions to parse trees to look for syntactic constructions in English sentences.",
			  "stargazers_count": 1,
			  "language": "Python",
			  "forks": 0,
			  "html_url": "https://github.com/eric-sclafani/syntax-regex-matcher"
			},
			{
			  "name": "website",
			  "description": "My personal website written in Angular 17.",
			  "stargazers_count": 0,
			  "language": "TypeScript",
			  "forks": 0,
			  "html_url": "https://github.com/eric-sclafani/website"
			},
		  ]
	}

	private getRepositories():void{
		
		
		this.github.getRepos().subscribe({ 
			next: (value) => {
				for (let repo of value){
					if (this.desiredRepos.includes(repo.name)){
						this.repos.push(repo)
					}
				}
			},
			error: (e) => console.log(e),
			complete: () => console.info("Done retrieving repos!")
			}
		)
	}

}