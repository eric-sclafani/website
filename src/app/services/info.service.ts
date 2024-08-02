import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    public about(): any {

        const general = {
            p1: "this is paragraph one about me",
            p2: "this is paragraph two about me"
        }

        const research = {
            p1: "Graduated from Stony Brook University with a master’s degree in computational linguistics. My research focused on using advanced stylometric feature extraction to embed language data into high-dimensional vectors.",
            p2: "These vectors were then used for authorship attribution, the task of automatically identifying the author of a document. This work was done with Dr. Owen Rambow on the IARPA HIATUS grant for which I authored two Python software for performing quantitative analysis over English grammar: Gram2Vec and Sentence Regex Matcher (SRM).",
        }

        const publication = {
            title: "Gram2Vec",
            link: "https://arxiv.org/abs/2406.12131"
        }

        const skills = [
            "skill 1",
            "skill 2",
            "skill 3"
        ]

        const hobbies = [
            "Coding",
            "Reading",
            "Watching shows and movies",
            "Going for long walks",
            "whatever else...."]


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
                link: "link to project 1...",
                desc: "This project solves all problems and therefore..."
            },
            {
                link: "link to project 2...",
                desc: "This project raised more than $2billion in series A funding..."
            }
        ]

    }

    public resumePath(): any {
        return "assets/resume/resume.pdf";
    }

    public contact(): any {
        return {
            github: "https://github.com/eric-sclafani",
            linkedin: "https://www.linkedin.com/in/eric-sclafani-64b337226/",
            email: "eric.sclafani321@gmail.com"
        }
    }




}

