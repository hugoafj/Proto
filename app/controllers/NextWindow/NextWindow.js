// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

//FUNCTIONS
function closeWindow(){
    var slideOut = Titanium.UI.createAnimation({left: Ti.Platform.displayCaps.platformWidth, duration: 200});
    $.container.animate(slideOut);
    slideOut.addEventListener('complete', function(){
                APP.container.remove($.container);
            });
}

function callNext(){
    var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
    var tempWin = Alloy.createController("NextWindow/NextWindow");
    APP.masterWindow.getView().add(tempWin.getView());
    tempWin.getView().animate(slideIn);
}

function backDay(){
    if($.scrollableView.currentPage > 0)
        $.scrollableView.scrollToView($.scrollableView.currentPage-1);
}

function nextDay(){
    if($.scrollableView.currentPage < $.scrollableView.getViews().length-1)
        $.scrollableView.scrollToView($.scrollableView.currentPage+1);
}

//LISTENERS



//CODE
$.tab1.width = 40;
$.tab1.left = (Ti.Platform.displayCaps.platformWidth/2)-40;
$.tab2.width = 40;
$.tab2.right = (Ti.Platform.displayCaps.platformWidth/2)-40;
