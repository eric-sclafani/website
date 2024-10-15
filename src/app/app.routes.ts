import { Routes } from "@angular/router";
import { AboutComponent } from "./components/normal-mode/pages/about/about.component";
import { ProjectsComponent } from "./components/normal-mode/pages/projects/projects.component";
import { HomeComponent } from "./components/normal-mode/home/home.component";
import { ContactComponent } from "./components/normal-mode/pages/contact/contact.component";

import { TerminalComponent } from "./components/nerd-mode/terminal/terminal.component";

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "about", component: AboutComponent },
            { path: "projects", component: ProjectsComponent },
            { path: "contact", component: ContactComponent}
        ]
    },

    { path: "nerd", component: TerminalComponent },
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "**", redirectTo: "/", pathMatch: "full" }
];
