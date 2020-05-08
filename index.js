// Live corona virus cases
$.ajax({
  url: 'https://api.thevirustracker.com/free-api?global=stats',
  dataType: 'json',
  success: function(data) {
    console.log(data);    
    console.log("Total Cases worldwide: "+data.results[0].total_cases);
    console.log("Total deaths worldwide: " +data.results[0].total_deaths);
    $(".world-count").append("Total Cases worldwide: "+'<br>'+data.results[0].total_cases +'<br>' )
    $(".world-count").append("Total Deaths worldwide: "+'<br>'+data.results[0].total_deaths +'<br>')
    $(".world-count").append("Total active cases worldwide: "+'<br>'+data.results[0].total_active_cases +'<br>')
    $(".world-count").append("New cases today worldwide: "+'<br>'+data.results[0].total_new_cases_today)
}
});

$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=IN',
  dataType: 'json',
  success: function(data) {
    console.log(data);    
    console.log("Country: " +data.countrydata[0].info.title);
    console.log("Total Cases: "+data.countrydata[0].total_cases);
    console.log("Total deaths: "+data.countrydata[0].total_deaths);
    $(".india-count").append("Total Cases in India: "+'<br>'+data.countrydata[0].total_cases +'<br>')
    $(".india-count").append("Total Deaths in India: "+'<br>'+data.countrydata[0].total_deaths +'<br>')
    $(".india-count").append("Total active cases in India: "+'<br>'+data.countrydata[0].total_active_cases + '<br>')
    $(".india-count").append("New cases today in India: "+'<br>'+data.countrydata[0].total_new_cases_today)
  }
});


$(".en-stay-home").click(function(){
  var abc= new Audio("sounds/en-stay-home.mp3");
  abc.play();
});
$(".hin-stay-home").click(function(){
  var abc= new Audio("sounds/hin-stay-home.mp3");
  abc.play();
});

$(".en-mask").click(function(){
  var abc= new Audio("sounds/en-mask.mp3");
  abc.play();
});
$(".hin-mask").click(function(){
  var abc= new Audio("sounds/hin-mask.mp3");
  abc.play();
});


$(".en-wash-hands").click(function(){
  var abc= new Audio("sounds/en-wash-hands.mp3");
  abc.play();
});
$(".hin-wash-hands").click(function(){
  var abc= new Audio("sounds/hin-wash-hands.mp3");
  abc.play();
});


$(".en-public").click(function(){
  var abc= new Audio("sounds/en-public.mp3");
  abc.play();
});
$(".hin-public").click(function(){
  var abc= new Audio("sounds/hin-public.mp3");
  abc.play();
});

$(".en-face").click(function(){
  var abc= new Audio("sounds/en-face.mp3");
  abc.play();
});
$(".hin-face").click(function(){
  var abc= new Audio("sounds/hin-face.mp3");
  abc.play();
});


$(".en-distancing").click(function(){
  var abc= new Audio("sounds/en-distancing.mp3");
  abc.play();
});
$(".hin-distancing").click(function(){
  var abc= new Audio("sounds/hin-distancing.mp3");
  abc.play();
});
