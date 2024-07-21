import { Routes } from "@angular/router";
import { AboutComponent } from "./components/text-mode/pages/about/about.component";
import { ProjectsComponent } from "./components/text-mode/pages/projects/projects.component";
import { ResumeComponent } from "./components/text-mode/pages/resume/resume.component";
import { TerminalComponent } from "./components/terminal-mode/terminal/terminal.component";
import { HomeComponent } from "./components/text-mode/home/home.component";

export const routes: Routes = [

    {path: "text", redirectTo: "text/about", pathMatch:"full"},
    {
        path: "text",
        component: HomeComponent,
        children: [
            { path: "about", component: AboutComponent },
            { path: "projects", component: ProjectsComponent },
            { path: "resume", component: ResumeComponent },
        ]
    },

    { path: "terminal", component: TerminalComponent },
    { path: "", redirectTo: "/terminal", pathMatch: "full" },
    { path: "**", redirectTo: "/terminal", pathMatch: "full" }
];
