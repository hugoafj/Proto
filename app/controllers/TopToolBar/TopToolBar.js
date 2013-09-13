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
$.container.backgroundImage = "images/new.png";

// EXPORTS
exports.newTab = newTab;
