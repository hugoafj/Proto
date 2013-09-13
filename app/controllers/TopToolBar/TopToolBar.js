// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

// FUNCTIONS
function openMenu(){
    APP.masterWindow.openCloseMenu();
}

function newTab(){
    $.container.backgroundImage = "images/new.png";
    APP.masterWindow.whatsNew();
}

function cookingTab(){
    $.container.backgroundImage = "images/cooking.png";
    APP.masterWindow.cooking();
}

// CODE
if((args._scenario && args._scenario == 2) || (args._scenario && args._scenario == 3))
    $.container.backgroundImage = "images/new.png";

// EXPORTS
exports.newTab = newTab;
