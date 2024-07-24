import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    ElementRef,
    ViewChild,
    Input,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [
        NgClass
    ],
    template: `
    <div id="prompt-wrapper">
        <span class="prefix">{{ prefix }}</span>
        <span class="symbol">{{ atSymbol }}</span>
        <span class="domain">{{ domain }}</span>
        <span class="symbol">{{ colon }}</span>
        <span class="symbol">{{ dollar }}</span>
        <span class="symbol tilde">{{ tilde }}</span>
        <input
            [value]="promptValue"
            (input)="onInput($event)"
            [ngClass]="currentClasses"
            #focusInput
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus>
    </div>`,
    styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild('focusInput') focusInput: ElementRef;
    @Input() validCommands: string[] = [];

    prefix = "visitor";
    atSymbol = '@';
    domain = "my-portfolio";
    colon = ":";
    dollar = "$";
    tilde = "~";

    currentClasses:Record<string, boolean> = {};

    promptValue = '';
    isValidCommand: boolean;

    private listener: () => void

    constructor(private renderer: Renderer2) { }


    ngOnInit(): void {
        this.attachFocusEventHandler();
        this.setCurrentClasses();

    }

    ngOnDestroy(): void {
        this.removeFocusEventHandler();
    }


    private attachFocusEventHandler():void {
        this.listener = this.renderer.listen('document', 'click', () => {
            this.focusInput.nativeElement.focus();
        })
    }

    private removeFocusEventHandler():void {
        if (this.listener) {
            this.listener();
        }
    }

    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;
        this.determineValidCommand();


        this.setCurrentClasses();
    }

    private determineValidCommand():void{
        this.isValidCommand = this.validCommands.includes(this.promptValue.toLowerCase())
    }

    private setCurrentClasses():void {
        this.currentClasses = {
            "valid-command": this.isValidCommand,
            "invalid-command": !this.isValidCommand || this.promptValue == ""
        }
    }

}
