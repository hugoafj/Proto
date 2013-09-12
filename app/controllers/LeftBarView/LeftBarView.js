// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

//FUNCTIONS
function slideDown(){
    var slideDownAn = Titanium.UI.createAnimation({top: Ti.Platform.displayCaps.platformHeight, duration: 200});
    APP.menubar.container.animate(slideDownAn);
    slideDownAn.addEventListener('complete', function(){
        //APP.masterWindow.getView().remove($.floatingView);
    });
}
