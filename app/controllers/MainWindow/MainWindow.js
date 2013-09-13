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
   
   var slideUp = Titanium.UI.createAnimation({top: -130, duration: 250});
    $.panelView.animate(slideUp);
    slideUp.addEventListener('complete', function(){
        var slideUp2 = Titanium.UI.createAnimation({top: 0, duration: 180});
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
    var slideUp = Titanium.UI.createAnimation({top: -82, duration: 200});
    $.topOptions.animate(slideUp);
}

function openSort(){
    if($.sortList.isOpen == false)
        $.sortList.animate({top:82,height:164,duration:200});
    else
        $.sortList.animate({top:81,height:1,duration:200});
        
    $.sortList.isOpen = !$.sortList.isOpen;
}

function byAlph(){
    $.topOptions.backgroundImage = "images/search_alphabetical.png";
    $.locationView.backgroundImage = "images/location_alphabetical.png";
    $.sortList.animate({top:81,height:1,duration:200});
    $.sortList.isOpen = !$.sortList.isOpen;
}

function byNear(){
    $.topOptions.backgroundImage = "images/search_nearby.png";
    $.locationView.backgroundImage = "images/location_distance.png";
    $.sortList.animate({height:1,duration:200});
    $.sortList.isOpen = !$.sortList.isOpen;
}

function byList(){
    $.scrollView.backgroundImage = "";
    $.topOptions.backgroundImage = "images/search_alphabetical.png";
    $.locationView.backgroundImage = "images/location_alphabetical.png";
    $.bottomOptions.backgroundImage = "images/list.png";
    $.scrollView.add($.topOptions);
    $.scrollView.add($.locationView);
    $.scrollView.add($.sortList);
}

function byMap(){
    $.scrollView.backgroundImage = "images/map_view.png";
    $.bottomOptions.backgroundImage = "images/map.png";
    $.scrollView.remove($.topOptions);
    $.scrollView.remove($.locationView);
    $.scrollView.remove($.sortList);
    
    
}

function openNext(){
     var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
    var tempWin = Alloy.createController("NextWindow/NextWindow");
    APP.masterWindow.getView().add(tempWin.getView());
    tempWin.getView().animate(slideIn);
}

function openPopUp(){
    var tempView        = Ti.UI.createView({backgroundImage:"Images/map_popup.png", height:"227", width:"307",opacity:0});
    var tempButton      = Ti.UI.createView({backgroundColor:"transparent", height:93, top:38,opacity:0.1});
    tempButton.addEventListener("click",function(){
        var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
        var tempWin = Alloy.createController("NextWindow/NextWindow");
        APP.masterWindow.getView().add(tempWin.getView());
        tempWin.getView().animate(slideIn);
    });
    tempView.add(tempButton);
    $.scrollView.add(tempView);
    
    var t1 = Ti.UI.create2DMatrix().scale(0.0);
    var t2 = Ti.UI.create2DMatrix().scale(1.1);
    var t3 = Ti.UI.create2DMatrix().scale(1.0);
    
    var a = Titanium.UI.createAnimation({transform: t1, duration: 0});
    var w = Titanium.UI.createAnimation({opacity:1, duration: 180});
    var a2 = Titanium.UI.createAnimation({transform: t2, duration: 250});
    var a3 = Titanium.UI.createAnimation({transform: t3, duration: 200});
    
    tempView.animate(a);
    tempView.animate(w);
    
    a.addEventListener('complete', function()
    {
        tempView.animate(a2);
    });
    
    a2.addEventListener('complete', function()
    {
       tempView.animate(a3);
    });
}

function whatsNew(){
    $.viewContainer.height = 0;
}

function cooking(){
    $.viewContainer.height = Ti.UI.SIZE;
}

function changeOpt(){}

//LISTENERS
/*APP.container.addEventListener("click",function(){
    var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
    var tempWin = Alloy.createController("NextWindow/NextWindow");
    APP.masterWindow.getView().add(tempWin.getView());
    tempWin.getView().animate(slideIn);
});*/

$.scrollView.addEventListener("scroll",function(_event){
    Ti.API.info(JSON.stringify(_event.y));
    if(tempY+50 < _event.y && _event.y >= 0 && _event.y <= 1200){
        //hideTopOptions();
        hideBottomOptions();
        tempY = _event.y;
    }else if(tempY-50 >_event.y && _event.y >= 0 && _event.y <= 1200){
        showBottomOptions();
       // showTopOptions();
        tempY = _event.y;
    }
    
});


//CODE
$.sortList.isOpen = false;
whatsNew();

// EXPORTS
exports.openCloseMenu   = openCloseMenu;
exports.whatsNew        = whatsNew;
exports.cooking         = cooking;
exports.byList          = byList;
exports.changeOpt       = changeOpt;