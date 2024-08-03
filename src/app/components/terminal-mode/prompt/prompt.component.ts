import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    ElementRef,
    ViewChild,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Command } from '../../../interfaces/terminal';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [ NgClass ],
    templateUrl: './prompt.component.html',
    styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild('input') input: ElementRef;
    @Input() validCommands: string[] = [];
    @Input() commandHistory: Command[] = [];
    @Input() includeUserInput: boolean = true;
    @Input() submittedCommand:Command;
    @Output() commandEmitter: EventEmitter<Command> = new EventEmitter();

    public currentClasses: Record<string, boolean> = {};
    public promptValue = '';
    public isValidCommand: boolean;

    private currentCommandIndex = 0;
    private listener: () => void;

    constructor(
        private renderer: Renderer2,
    ) { }


    ngOnInit(): void {
        this.attachFocusEventHandler(); // see about moving to terminal component
        this.performChecksAndSendCommand();

        // call method to remove empty strings from commandHistory
    }

    ngOnDestroy(): void {
        if (this.listener) {
            this.listener();
        }
    }

    public resetValue() {
        this.performChecksAndSendCommand();
        this.promptValue = '';

    }

    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;
        this.performChecksAndSendCommand();

    }

    //! WIP: ON HOLD
    public cycleThroughCommandHistory(event: any) {
        event.preventDefault();
        let value = '';

        const commandCount = this.commandHistory.length;
        let position = commandCount - 1;
        if (commandCount) {
            if (event.code == 'ArrowUp') {

                position = position + this.currentCommandIndex;

                console.log('commandCount: ', commandCount)
                console.log('Index: ', this.currentCommandIndex)
                console.log('Position (position - index): ', position)
                if (position != 0){
                    this.currentCommandIndex--;
                } 
                else {

                }
                value = this.commandHistory[position].text;
            }

            else if (event.code == 'ArrowDown') {

                position = position + this.currentCommandIndex;
                console.log('commandCount: ', commandCount)
                console.log('Index: ', this.currentCommandIndex)
                console.log('Position (position - index): ', position)

                if (position != 0){
                    this.currentCommandIndex++;
                }
                else {

                }
                
                value = this.commandHistory[position].text;
            }

            this.promptValue = value;
            this.performChecksAndSendCommand();
        }

    }

    private performChecksAndSendCommand(): void {
        this.determineValidCommand();
        this.setCurrentClasses();
        this.sendCommand();
    }

    private determineValidCommand(): void {
        const value = this.promptValue.toLowerCase();
        this.isValidCommand = this.validCommands.includes(value);
    }

    private sendCommand(): void {
        const command:Command =  {
            text: this.promptValue,
            valid: this.isValidCommand,
        }
        //console.log("Command emitted: ", command)
        this.commandEmitter.emit(command)
    }

    private attachFocusEventHandler(): void {
        if (!this.listener && this.includeUserInput) {
            this.listener = this.renderer.listen('document', 'click', () => {
                this.input.nativeElement.focus();
            })
            console.info('Focus event handler attached!')
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
//     tab completion