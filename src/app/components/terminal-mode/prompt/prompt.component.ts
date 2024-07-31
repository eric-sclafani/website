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
} from "@angular/core";
import { NgClass } from "@angular/common";
import { Command } from "../../../interfaces/terminal";

@Component({
    selector: "app-prompt",
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: "./prompt.component.html",
    styleUrl: "./prompt.component.scss"
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild("input") input: ElementRef;
    @Input() validCommands: string[] = [];
    @Input() commandHistory: Command[] = [];
    @Output() commandEmitter: EventEmitter<Command> = new EventEmitter();

    currentClasses: Record<string, boolean> = {};
    promptValue = "";

    private isValidCommand: boolean;
    private currentCommandIndex = 0;
    private listener: () => void;

    constructor(
        private renderer: Renderer2,
        private promptRef: ElementRef<HTMLDivElement>
    ) { }


    ngOnInit(): void {
        this.attachFocusEventHandler();
        this.performChecksAndSendCommand();
    }

    ngOnDestroy(): void {
        if (this.listener) {
            this.listener();
        }
    }

    public resetValue() {
        this.ngOnInit();
        this.promptValue = "";
    }

    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;
        this.performChecksAndSendCommand();

    }

    //? WIP: ON HOLD
    public cycleThroughCommandHistory(event: any) {
        event.preventDefault();
        let value = "";

        const commandCount = this.commandHistory.length;
        let position = commandCount - 1;
        if (commandCount) {
            if (event.code == "ArrowUp") {

                position = position + this.currentCommandIndex;

                console.log("commandCount: ", commandCount)
                console.log("Index: ", this.currentCommandIndex)
                console.log("Position (position - index): ", position)
                if (position != 0){
                    this.currentCommandIndex--;
                } 
                else {

                }
                value = this.commandHistory[position].text;
            }

            else if (event.code == "ArrowDown") {

                position = position + this.currentCommandIndex;
                console.log("commandCount: ", commandCount)
                console.log("Index: ", this.currentCommandIndex)
                console.log("Position (position - index): ", position)

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
            this.listener = this.renderer.listen("document", "click", () => {
                this.input.nativeElement.focus();
            })
            console.info("Focus event handler attached!")
        }

    }

    private setCurrentClasses(): void {
        this.currentClasses = {
            "valid-command": this.isValidCommand,
            "invalid-command": !this.isValidCommand
        }
    }
}

// todo: 
//     tab completion