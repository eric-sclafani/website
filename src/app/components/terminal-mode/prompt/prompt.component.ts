import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    ElementRef,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-prompt',
    standalone: true,
    imports: [],
    templateUrl: './prompt.component.html',
    styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit, OnDestroy {

    @ViewChild("focusInput") focusInput: ElementRef;
    atSymbol = "@";

    // renderer returns a function that when called, destroys the event listener
    private listener: () => void

    constructor(private renderer: Renderer2) { }


    ngOnInit(): void {
        this.listener = this.renderer.listen("document", "click", (event:any) => {
            this.focusInput.nativeElement.focus();
        })
    }



    ngOnDestroy(): void {
        if (this.listener) {
            this.listener();
        }
    }
}
