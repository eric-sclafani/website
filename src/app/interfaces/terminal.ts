export interface Command {
    text: string;
    valid: boolean;
}

export interface TerminalResponse {
	commandText:string;
    valid: boolean;
	responseText: string;
}
