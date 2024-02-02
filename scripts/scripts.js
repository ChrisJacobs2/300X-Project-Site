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

// Get splash buttons
var yesButtonSplash = document.querySelector('.splash-yes');
var noButtonSplash = document.querySelector('.splash-no');

// Get splash screen Div
var splashScreen = document.querySelector('.splash');


// Add event listeners
yesButtonSplash.addEventListener('click', function() {
    console.log('"Yes" button clicked');
    // link to some silly website for goobers
});

noButtonSplash.addEventListener('click', function() {
    console.log('"No" button clicked');
    splashScreen.style.display = 'none';
});

/* END SPLASH SCREEN
###########################################################################################################
*/