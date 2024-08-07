import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    public about(): any {

        const general = {
            p1: 'graduate turned fullstack .NET Developer working at the Kings County District Attorney\'s office (KCDA). Here I develop RESTful applications for legal staff to perform CRUD operations over complex legal data.',
        }

        const research = {
            p1: 'My graduate research focused on using advanced stylometric feature extraction to embed language data into high-dimensional vectors. These vectors were then used for authorship attribution, the task of automatically identifying the author of a document. ',
            pub: {
                text: 'Check out the arXiv paper',
                link: 'https://arxiv.org/abs/2406.12131'
            }
        }

        const skills = { 
            frontend : [
                'Typescript',
                'Javascript',
                'Angular',
                'Vue',
                'jQuery',
                'Bootstrap'
            ],
            backend : [
                'SQL Server',
                'ASP.NET',
                'T-SQL',
                'C#',
                'Python'
            ]
        }
        

        const hobbies = [
            'Coding',
            'Reading',
            'Watching shows and movies',
            'Going for long walks',
            ]


        return {
            general: general,
            research: research,
            skills: skills,
            hobbies: hobbies
        }
    }

    public projects(): any {
        return [
            {
                link: 'link to project 1...',
                desc: 'This project solves all problems and therefore...'
            },
            {
                link: 'link to project 2...',
                desc: 'This project raised more than $2billion in series A funding...'
            }
        ]

    }

    public resumePath(): any {
        return 'assets/resume/resume.pdf';
    }

    public links(): any {
        return {
            github: 'https://github.com/eric-sclafani',
            linkedin: 'https://www.linkedin.com/in/eric-sclafani-64b337226/',
            email: 'eric.sclafani321@gmail.com',
            repo: 'https://github.com/eric-sclafani/Portfolio',
            rickroll: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }

}

