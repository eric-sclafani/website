import { ElementRef } from "@angular/core";

export interface Command {
    text: string;
    valid: boolean;
    div: ElementRef<HTMLDivElement>
}