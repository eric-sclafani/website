export interface Command {
    text: string;
    valid: boolean;
    promptDiv: HTMLCollection;
}

export interface TerminalResponse {
	commandText:string;
	promptData: Record<string,string>[];
	responseText: string;
}
