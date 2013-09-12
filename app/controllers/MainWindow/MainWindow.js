// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

APP.headerbar           = Alloy.createController('TopToolBar/TopToolBar',{});
APP.menubar.container   = $.panelView;
//APP.menubar               = Alloy.createController('LeftMenuBar/LeftMenuBar',params);
//APP.currentController     = Alloy.createController('EditPersonalInformation/EditPersonalInformation',params);
APP.container           = $.viewContainer;

var tempY               = 0;

// STYLING


// ADDITIONS 
$.topToolBarContainer.add(APP.headerbar.getView());
//$.leftBar.add(APP.menubar.getView());
//APP.container.add(APP.currentController.getView());


// FUNCTIONS
function openCloseMenu(){
    /*if($.mainContainer.isOpen == false){
        $.mainContainer.animate({left:0, duration:150});
    }else{
        $.mainContainer.animate({left:Ti.Platform.displayCaps.platformWidth-40, duration:150});
    }
    $.mainContainer.isOpen = !$.mainContainer.isOpen;
    */
   
   var slideUp = Titanium.UI.createAnimation({top: -100, duration: 200});
    $.panelView.animate(slideUp);
    slideUp.addEventListener('complete', function(){
        var slideUp2 = Titanium.UI.createAnimation({top: 0, duration: 150});
        $.panelView.animate(slideUp2);
    });
}


function fadeOut(){
    $.floatingView.backgroundImage = "images/location_03.png";
    var fadeOut = Titanium.UI.createAnimation({opacity: 0, duration: 1000});
    $.floatingView.animate(fadeOut);
    fadeOut.addEventListener('complete', function(){
        APP.masterWindow.getView().remove($.floatingView);
    });
}

function showBottomOptions(){
    var slideUp = Titanium.UI.createAnimation({bottom: 0, duration: 200});
    $.bottomOptions.animate(slideUp);
}

function hideBottomOptions(){
    var slideDown = Titanium.UI.createAnimation({bottom: -40, duration: 200});
    $.bottomOptions.animate(slideDown);
}

function showTopOptions(){
    var slideDown = Titanium.UI.createAnimation({top: 0, duration: 200});
    $.topOptions.animate(slideDown);
}

function hideTopOptions(){
    var slideUp = Titanium.UI.createAnimation({top: -40, duration: 200});
    $.topOptions.animate(slideUp);
}

//LISTENERS
APP.container.addEventListener("click",function(){
    var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
    var tempWin = Alloy.createController("NextWindow/NextWindow");
    APP.masterWindow.getView().add(tempWin.getView());
    tempWin.getView().animate(slideIn);
});

$.scrollView.addEventListener("scroll",function(_event){
    Ti.API.info(JSON.stringify(_event.y));
    if(tempY+50 < _event.y && _event.y >= 0 && _event.y <= 1080){
        hideTopOptions();
        showBottomOptions();
        tempY = _event.y;
    }else if(tempY-50 >_event.y && _event.y >= 0 && _event.y <= 1080){
        hideBottomOptions();
        showTopOptions();
        tempY = _event.y;
    }
    
});


// EXPORTS
exports.openCloseMenu = openCloseMenu;