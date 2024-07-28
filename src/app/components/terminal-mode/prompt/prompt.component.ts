import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    ElementRef,
    ViewChild,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Command } from '../../../interfaces/terminal';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [
        NgClass
    ],
    template: `
    <div #promptWrapper class='prompt-wrapper'>
        <span class='prefix'>visitor</span>
        <span class='symbol'>{{ '@' }}</span>
        <span class='domain'>my-portfolio</span>
        <span class='symbol'>:</span>
        <span class='symbol'>$</span>
        <span class='symbol tilde'>~</span>
        <input
            [value]='promptValue'
            [ngClass]='currentClasses'
            (input)='onInput($event)'
            (keydown.enter)="resetValue()"
            #input
            type='text'
            autocomplete='off'
            spellcheck='false'
            autofocus>
    </div>`,
    styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild('input') input: ElementRef;
    @Input() validCommands: string[] = [];
    @Input() commandHistory: Command[] = [];
    @Output() commandEmitter: EventEmitter<Command> = new EventEmitter();

    currentClasses: Record<string, boolean> = {};

    promptValue = '';
    isValidCommand: boolean;

    private listener: () => void;

    constructor(
        private renderer: Renderer2,
        private promptRef: ElementRef<HTMLDivElement>
    ) { }


    ngOnInit(): void {
        this.attachFocusEventHandler();
        this.determineValidCommand();
        this.setCurrentClasses();
        this.sendCommand();
    }

    ngOnDestroy(): void {
        if (this.listener) {
            this.listener();
        }
    }

    public resetValue() {
        this.ngOnInit();
        this.promptValue = '';
    }

    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;

        this.determineValidCommand();
        this.setCurrentClasses();
        this.sendCommand();
    }

    private determineValidCommand(): void {
        const value = this.promptValue.toLowerCase();
        this.isValidCommand = this.validCommands.includes(value);
    }

    private sendCommand(): void {
        this.commandEmitter.emit(
            {
                text: this.promptValue,
                valid: this.isValidCommand,
                promptDiv: this.promptRef.nativeElement.children[0].children
            }
        )
    }

    private attachFocusEventHandler(): void {
        if (!this.listener) {
            this.listener = this.renderer.listen('document', 'click', () => {
                this.input.nativeElement.focus();
            })
            console.info("Focus event handler attached!")
        }

    }

    private setCurrentClasses(): void {
        this.currentClasses = {
            'valid-command': this.isValidCommand,
            'invalid-command': !this.isValidCommand
        }
    }
}

// todo: 
//     up and down arrow for past user inputs (valid and invalid)
//     tab completion