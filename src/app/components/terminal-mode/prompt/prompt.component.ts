import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    ElementRef,
    ViewChild,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [],
    templateUrl: './prompt.component.html',
    styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild('focusInput') focusInput: ElementRef;
    @Input() validCommands:string[] = [];

    prefix = "visitor";
    atSymbol = '@';
    domain = "my-portfolio";
    colon = ":";
    dollar = "$";
    tilde = "~";

    validInputColor = "rgb(163, 190, 140)";
    normalInputColor = "white";

    promptValue = '';
    isValidCommand:boolean;

    private listener: () => void

    constructor(private renderer: Renderer2) { }


    ngOnInit(): void {
        this.attachFocusEventHandler();

    }

    ngOnDestroy(): void {
        this.removeFocusEventHandler();
    }



    private attachFocusEventHandler() {
        this.listener = this.renderer.listen('document', 'click', () => {
            this.focusInput.nativeElement.focus();
        })
    }

    private removeFocusEventHandler() {
        // renderer.listen returns a function that removes the event handler when called
        if (this.listener) {
            this.listener();
        }
    }

    
    public onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.promptValue = inputElement.value;
        this.isValidCommand = this.validCommands.includes(this.promptValue.toLowerCase())


        this.changeTextColorOnValidCommand(inputElement);
    }

    
    private changeTextColorOnValidCommand(input:HTMLInputElement):void {
        if (this.isValidCommand){
            input.style.color = this.validInputColor;
        }
        else {
            input.style.color = this.normalInputColor;
        }
    }
}
