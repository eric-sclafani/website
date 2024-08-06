import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    public about(): any {

        const general = {
            p1: 'Computational linguistics graduate student turned fullstack .NET Developer.',
            p2: ' Current employed at the Kings County District Attorney\'s office.'
        }

        const research = {
            p1: '',
            p2: '',
        }

        const publication = {
            title: 'Gram2Vec',
            link: 'https://arxiv.org/abs/2406.12131'
        }

        const skills = [
            'skill 1',
            'skill 2',
            'skill 3'
        ]

        const hobbies = [
            'Coding',
            'Reading',
            'Watching shows and movies',
            'Going for long walks',
            'whatever else....']


        return {
            general: general,
            research: research,
            publication: publication,
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

