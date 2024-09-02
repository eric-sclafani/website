import { Routes } from "@angular/router";
import { AboutComponent } from "./components/text-mode/pages/about/about.component";
import { ProjectsComponent } from "./components/text-mode/pages/projects/projects.component";
import { TerminalComponent } from "./components/terminal-mode/terminal/terminal.component";
import { HomeComponent } from "./components/text-mode/home/home.component";
import { ContactComponent } from "./components/text-mode/pages/contact/contact.component";

export const routes: Routes = [


    // {
    //     path: "text",
    //     component: HomeComponent,
    //     children: [
    //         { path: "about", component: AboutComponent },
    //         { path: "projects", component: ProjectsComponent },
    //         { path: "contact", component: ContactComponent}
    //     ]
    // },

    { path: "terminal", component: TerminalComponent },
    { path: "", redirectTo: "/terminal", pathMatch: "full" },
    { path: "**", redirectTo: "/terminal", pathMatch: "full" }
];
