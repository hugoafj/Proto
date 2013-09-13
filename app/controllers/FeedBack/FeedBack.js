// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};
var tempY               = 0;


//FUNCTIONS
function sendFeedBack(){
    $.container.backgroundImage = "images/feedback_screen.png";
    var backButton = Ti.UI.createView({opacity:0.1,backgroundColor:"transparent",left:0,top:0, width:40, height:40});
    backButton.addEventListener("click",function(){
        var slideOut = Titanium.UI.createAnimation({left: Ti.Platform.displayCaps.platformWidth, duration: 200});
        $.container.animate(slideOut);
        slideOut.addEventListener('complete', function(){
                APP.container.remove($.container);
            });
    });
    var thanksView = Ti.UI.createView({opacity:0,backgroundImage:"images/feedback_thanks.png"});
    thanksView.addEventListener("click",function(){
        var t1 = Ti.UI.create2DMatrix().scale(2.0);
        
        var a = Titanium.UI.createAnimation({transform: t1, duration: 200});
        var w = Titanium.UI.createAnimation({opacity:0, duration: 300});
        
        thanksView.animate(a);
        thanksView.animate(w);
        
        a.addEventListener('complete', function()
        {
            $.container.remove(thanksView);
        });
    });
    $.container.add(thanksView);
    var t1 = Ti.UI.create2DMatrix().scale(2.0);
    var t2 = Ti.UI.create2DMatrix().scale(1.0);
    
    var a = Titanium.UI.createAnimation({transform: t1, duration: 0});
    var w = Titanium.UI.createAnimation({opacity:1, duration: 300});
    var a2 = Titanium.UI.createAnimation({transform: t2, duration: 250});
    
    thanksView.animate(a);
    thanksView.animate(w);
    
    a.addEventListener('complete', function()
    {
        thanksView.animate(a2);
    });
    $.container.add(backButton);
    $.container.remove($.like1);
    $.container.remove($.like2);
    $.container.remove($.like3);
    $.container.remove($.textAreaFeed);
    $.container.remove($.sendButton);
}

function fnc_like1(){
    $.container.backgroundImage = "images/feedback02.png";
}

function fnc_like2(){
    $.container.backgroundImage = "images/feedback03.png";
}

function fnc_like3(){
    $.container.backgroundImage = "images/feedback04.png";
}
