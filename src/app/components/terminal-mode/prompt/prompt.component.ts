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
import { Command } from '../../../interfaces/command';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [
        NgClass
    ],
    template: `
    <div #promptWrapper id='prompt-wrapper'>
        <span class='prefix'>{{ prefix }}</span>
        <span class='symbol'>{{ atSymbol }}</span>
        <span class='domain'>{{ domain }}</span>
        <span class='symbol'>{{ colon }}</span>
        <span class='symbol'>{{ dollar }}</span>
        <span class='symbol tilde'>{{ tilde }}</span>
        <input
            [value]='promptValue'
            (input)='onInput($event)'
            [ngClass]='currentClasses'
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
    @Input() commandHistory: string[] = [];
    @Output() commandEmitter: EventEmitter<Command> = new EventEmitter();
    
    prefix = 'visitor';
    atSymbol = '@';
    domain = 'my-portfolio';
    colon = ':';
    dollar = '$';
    tilde = '~';

    currentClasses: Record<string, boolean> = {};

    promptValue = '';
    isValidCommand: boolean;

    private listener: () => void

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

    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;

        this.determineValidCommand();
        this.setCurrentClasses();
        this.sendCommand();     
        console.log(this.commandHistory)  
    }

    private sendCommand():void {
        this.commandEmitter.emit(
            {
                text : this.promptValue,
                valid: this.isValidCommand,
                div: this.promptRef
            }
        )
    }

    private attachFocusEventHandler(): void {
        this.listener = this.renderer.listen('document', 'click', () => {
            this.input.nativeElement.focus();
        })
    }

    private determineValidCommand(): void {
        const value = this.promptValue.toLowerCase();
        this.isValidCommand = this.validCommands.includes(value);
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