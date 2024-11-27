import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    public about(): any {

        const general = {
            p1: 'graduate turned fullstack .NET Developer working at the Kings County District Attorney\'s office (KCDA).',
            p2: ' Here I develop RESTful applications for legal staff to perform CRUD operations on complex legal data.',
        }

        const research = {
            p1: 'My graduate research focused on using advanced stylometric feature extraction to embed language data into high-dimensional vectors.',
            p2: 'These vectors were then used for authorship attribution, the task of automatically identifying the author of a document.',
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
                'ASP.NET Core',
                'T-SQL',
                'C#',
                'Python'
            ]
        }
        

        const hobbies = [
            'Coding',
            'Reading',
            'Bird watching',
            'Watching anime/shows/movies',
            'Long walks',
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
                title:'Gram2Vec',
                desc: 'Grammatical style embedding algorithm that embeds documents into a higher dimensional space by extracting the normalized relative frequencies of stylistic features present in the text',
                link: 'https://github.com/eric-sclafani/gram2vec'
                
            },
            {
                title:'Syntax Regex Matcher (SRM)',
                desc: 'SRM is a package for applying regular expressions to spaCy-generated parse trees to look for syntactic constructions in English sentences',
                link: 'https://github.com/eric-sclafani/syntax-regex-matcher'
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
            repo: 'https://github.com/eric-sclafani/website',
            rickroll: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }

}

