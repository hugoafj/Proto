/**
 * @Author : Hugo Armando Flores
 * @CreationDate : Sep/2013
 * @File : index.js
 */

/**
 * Controller for the main window
 */


// INSTANTIATION
var APP = require("/core");

// FUNCTIONS
function joeScenario(){
    APP.init(1);
    APP.masterWindow.getView().open();
}

function carlScenario(){
    APP.init(2);
    APP.masterWindow.getView().open();
}

function suzieScenario(){
    APP.init(3);
    APP.masterWindow.getView().open();
}

//CODE
$.index.open();
