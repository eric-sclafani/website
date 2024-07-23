# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.


## Ideas

- A terminal mode and a text mode
    - Command = screen looks like a bash terminal, user types in commands to see things:
        - text will be styled nicely and easy to read in the "terminal" window

    - Text = all information will be displayed like a typical navbar portfolio

- Same page display components for both modes

- User can easily switch between each mode

- In terminal mode, user can modify appearence of terminal (maybe) 

## (Potential) Terminal Mode Commands

### Functionality
- cmd or ctrl backspace -> removes all text from line
- up arrow -> previous command 
- tab -> command completion

#### Main commands
- help -> show all available commands 
- about -> show about page
- projects -> show projects page
- resume | cv -> show resume pdf
- github -> redirects to my github page
- linkedin -> redirect to linkedin page
- repo -> redirect to portfolio github
- clear | cl -> remove command history and displayed commands
- text -> switched to text mode 

#### Silly commands
- echo -> displays user's text
- ericspasswords -> redirect to rick roll

## Architecture notes

- TerminalModeComponent
    - InputHandler
    - terminal

- TextModeComponent
    - navbar 
    - pages/
        - about (default page)
        - projects
        - resume

- Shared components
    - ModeSelectionComponent
    - footer

- Services (injected into Text mode and Terminal mode)
    - These services will hold the data and be displayed differently in both modes
    - about
    - projects
    - resume
    


## Inspirations

- https://dinogomez.vercel.app/

- https://liveterm.vercel.app/

