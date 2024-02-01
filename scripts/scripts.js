/*
###########################################################################################################
https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20                                                                                                  

  ██████  ██▓███   ██▓    ▄▄▄        ██████  ██░ ██      ██████  ▄████▄   ██▀███  ▓█████ ▓█████  ███▄    █ 
▒██    ▒ ▓██░  ██▒▓██▒   ▒████▄    ▒██    ▒ ▓██░ ██▒   ▒██    ▒ ▒██▀ ▀█  ▓██ ▒ ██▒▓█   ▀ ▓█   ▀  ██ ▀█   █ 
░ ▓██▄   ▓██░ ██▓▒▒██░   ▒██  ▀█▄  ░ ▓██▄   ▒██▀▀██░   ░ ▓██▄   ▒▓█    ▄ ▓██ ░▄█ ▒▒███   ▒███   ▓██  ▀█ ██▒
  ▒   ██▒▒██▄█▓▒ ▒▒██░   ░██▄▄▄▄██   ▒   ██▒░▓█ ░██      ▒   ██▒▒▓▓▄ ▄██▒▒██▀▀█▄  ▒▓█  ▄ ▒▓█  ▄ ▓██▒  ▐▌██▒
▒██████▒▒▒██▒ ░  ░░██████▒▓█   ▓██▒▒██████▒▒░▓█▒░██▓   ▒██████▒▒▒ ▓███▀ ░░██▓ ▒██▒░▒████▒░▒████▒▒██░   ▓██░
▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░░ ▒░▓  ░▒▒   ▓▒█░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒   ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒▓ ░▒▓░░░ ▒░ ░░░ ▒░ ░░ ▒░   ▒ ▒ 
░ ░▒  ░ ░░▒ ░     ░ ░ ▒  ░ ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░   ░ ░▒  ░ ░  ░  ▒     ░▒ ░ ▒░ ░ ░  ░ ░ ░  ░░ ░░   ░ ▒░
░  ░  ░  ░░         ░ ░    ░   ▒   ░  ░  ░   ░  ░░ ░   ░  ░  ░  ░          ░░   ░    ░      ░      ░   ░ ░ 
      ░               ░  ░     ░  ░      ░   ░  ░  ░         ░  ░ ░         ░        ░  ░   ░  ░         ░ 
                                                                ░                                          
###########################################################################################################
*/

// The question is: "Do you have soft hands?"

// get the div with the class "splash"
const splash_div = document.querySelector('.splash');

// get all buttons inside the splash_div
const splash_buttons = splash_div.querySelectorAll('button');

// add click event listener to each button on the splash screen
splash_buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (true) {
            case button.classList.contains('yes'):
                // logic for "yes" button
                // clicking yes will link to some silly website
                break;
            case button.classList.contains('no'):
                // logic for "no" button
                // clicking no will allow the user to continue to the home page
                // Let's also make it so that a cookie is stored to remember the user's choice.
                break;
            default:
                // print an error message to the console
                console.error('Error: Button in splash screen does not have a class of "yes" or "no"!');
                /* this line should not be reached, but if it is, print the button's HTML
                 to the console so that we can find it */
                console.log('Triggering button HTML:', button.outerHTML);
                break;
        }
    });
});