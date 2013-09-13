// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};
var tempY               = 0;

//FUNCTIONS
function closeWindow(){
    var slideOut = Titanium.UI.createAnimation({left: Ti.Platform.displayCaps.platformWidth, duration: 200});
    $.container.animate(slideOut);
    slideOut.addEventListener('complete', function(){
        APP.container.remove($.container);
    });
}

function openAddNew(){
    var slideIn = Titanium.UI.createAnimation({left: 0, duration: 200});
    var tempWin = Alloy.createController("FeedBack/FeedBack");
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

function byInfo(){
}

function byMenu(){
    
}

function showBottomOptions(){
    var slideUp = Titanium.UI.createAnimation({bottom: 0, duration: 200});
    $.bottomOptions.animate(slideUp);
}

function hideBottomOptions(){
    var slideDown = Titanium.UI.createAnimation({bottom: -40, duration: 200});
    $.bottomOptions.animate(slideDown);
}

function moveSlide(){
    if($.slidingView.isMore == false){
        $.slidingView.opacity = 1;
        $.slidingView.animate({left:0, duration:200});
        $.btnSliding.right = 0;
    }else{
        $.slidingView.animate({left:-226, duration:200});
        $.btnSliding.right = 80;
        setTimeout(function(){
            $.slidingView.opacity = 0;
        },180);
        
    }
    $.slidingView.isMore = !$.slidingView.isMore;
}

function setLike1(){
    $.conView.backgroundImage="images/suzmenu2.png";
}

//LISTENERS
$.view11.addEventListener("scroll",function(_event){
    Ti.API.info(JSON.stringify(_event.y));
    if(tempY+50 < _event.y && _event.y >= 0 && _event.y <= 1166){
        hideBottomOptions();
        tempY = _event.y;
    }else if(tempY-50 >_event.y && _event.y >= 0 && _event.y <= 1166){
        showBottomOptions();
        tempY = _event.y;
    }
    
});


//CODE
$.slidingView.isMore = false;
