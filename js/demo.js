console.log("Hello guys!")
console.log('Demo!');


$(window).scroll(function(e){
    parallax();
  });

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.jumbotron').css('top',(scrolled*0.0150)+'rem');
    //PARALLAX INSIDE
    //$('.jumbotron > .jumbotron-content').css('top',-(scrolled*-0.040)+'rem');
    //$('.jumbotron > .jumbotron-content').css('opacity',1-(scrolled*.00275));
  };
  //menu transition js

  

  
