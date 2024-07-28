export interface Command {
    text: string;
    valid: boolean;
    promptDiv: HTMLCollection;
}

export interface TerminalResponse {
	commandText:string;
    valid: boolean;
	responseText: string;
}
