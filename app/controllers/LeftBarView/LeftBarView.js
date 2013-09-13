// INSTANTIATION
var APP = require("/core");
var args = arguments[0] || {};

//FUNCTIONS
function slideDown(){
    var slideDownAn = Titanium.UI.createAnimation({top: Ti.Platform.displayCaps.platformHeight, duration: 200});
    APP.menubar.container.animate(slideDownAn);
    APP.masterWindow.changeOpt();
    slideDownAn.addEventListener('complete', function(){
        //APP.masterWindow.getView().remove($.floatingView);
    });
}

function openType(){
    if($.typeList.isOpen == false)
        $.typeList.animate({visible:true,height:160,duration:200});
    else
        $.typeList.animate({visible:false,height:1,duration:200});
        
    $.typeList.isOpen = !$.typeList.isOpen;
}

function openYear(){
    if($.typeYear.isOpen == false)
        $.typeYear.animate({visible:true,height:246,duration:200});
    else
        $.typeYear.animate({visible:false,height:1,duration:200});
        
    $.typeYear.isOpen = !$.typeYear.isOpen;
}

function openRecident(){
    if($.typeRecident.isOpen == false)
        $.typeRecident.animate({visible:true,height:82,duration:200});
    else
        $.typeRecident.animate({visible:false,height:1,duration:200});
        
    $.typeRecident.isOpen = !$.typeRecident.isOpen;
}

function openMeal(){
    if($.typeMeal.isOpen == false)
        $.typeMeal.animate({visible:true,height:136,duration:200});
    else
        $.typeMeal.animate({visible:false,height:1,duration:200});
        
    $.typeMeal.isOpen = !$.typeMeal.isOpen;
}

function selectType(){
    openType();
    $.StudentLbl.text = "Undergraduate";
    $.StudentLbl.color = "black";
}

function selectYear(){
    openYear();
    $.YearLbl.text = "2018";
     $.YearLbl.color = "black";
}

function selectResident(){
    openRecident();
    $.ResidentLbl.text = "On Campus Resident";
     $.ResidentLbl.color = "black";
}

function selectMeal(){
    openMeal();
    $.MealLbl.text = "Meal Plan";
     $.MealLbl.color = "black";
}

function openTags(){
     var thanksView = Ti.UI.createView({opacity:0,backgroundImage:"images/hashtag-list.png"});
    var tempButton = Ti.UI.createView({opacity:0.1,backgroundColor:"transparent",top:270,left:101,height:40,width:135});
    thanksView.add(tempButton);
    tempButton.addEventListener("click",function(){
        thanksView.backgroundImage = "images/hashtag-list2.png";
        var t1 = Ti.UI.create2DMatrix().scale(2.0);
        
        var a = Titanium.UI.createAnimation({transform: t1, duration: 200});
        var w = Titanium.UI.createAnimation({opacity:0, duration: 200});
        
        thanksView.animate(a);
        thanksView.animate(w);
        
        a.addEventListener('complete', function()
        {
            $.prefView.backgroundImage = "images/preferences02.png";
            $.container.remove(thanksView);
            $.prefView.remove($.tagsButton);
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
}

function changeOpt(){
    $.prefView.backgroundImage = "images/preferences03.png";
}

function logOut(){
    APP.masterWindow.getView().close();
}

// CODE
$.typeList.isOpen = false;
$.typeMeal.isOpen = false;
$.typeRecident.isOpen = false;
$.typeYear.isOpen = false;