
$(".ratings .circle").click(function(e){
  buttonValue = e.target.id;
  // alert(buttonValue);
  sessionStorage.setItem("rating", buttonValue);
  $("#"+buttonValue).removeClass("circleBackground");
  $("#"+buttonValue).addClass("buttonClicked");
});

$(function(){
  let rating = sessionStorage.getItem("rating");
  $("#showRating").text("You selected "+rating+" out of 5");

})

