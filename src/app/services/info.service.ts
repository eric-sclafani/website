import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    constructor() { }

    public about() {

    }

    public projects() {

    }

    public resume() {
        window.open("assets/resume.pdf", "_blank");
    }

    public contact():Record<string, string> {
        return {
            github : "https://github.com/eric-sclafani",
            linkedin : "https://www.linkedin.com/in/eric-sclafani-64b337226/",
            email: "eric.sclafani321@gmail.com"
        }
    }




}
