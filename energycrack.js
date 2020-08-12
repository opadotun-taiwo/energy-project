/*var bulb = document.getElementById("bulbs").Value;
var sockets = document.getElementById("sockets").Value;
var fridge = document.getElementById("fridge").Value;
var see = document.getElementById("see");


var watt = bulb + socket + fridge;
var result = document.getElementById("result").addEventListener("click", function(){
    result.style.color = "yellow";

})


function sum(){
  
    var bulb = document.getElementById("bulbs").value;
    var sockets = document.getElementById("sockets").value;
    var fridge = document.getElementById("fridge").value;

    var result = parseInt(bulb)*100 + parseInt(sockets)*30 + parseInt(fridge)*250;
 
    if(bulb == "" || bulb < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    if(sockets == "" || sockets < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    if(fridge == "" || fridge < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    document.getElementById("pay").innerHTML = "Your watt usage is " + result+ "w";
  
}

*/

$(document).ready(function(){
    $(".login-form").hide();
    $(".heavy-form").hide();
$(".login").css("background", "none");
$(".heavy").css("background", "none");

$(".login").click(function(){
  $(".signup-form").hide();
  $(".heavy-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".heavy").css("background", "none");
  $(".login").css("background", "#fff");
});

$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".heavy-form").hide();
  $(".login").css("background", "none");
  $(".heavy").css("background", "none");
  $(".signup").css("background", "#fff");
});

$(".heavy").click(function(){
    $(".heavy-form").show();
    $(".login-form").hide();
    $(".signup-form").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "none");
    $(".heavy").css("background", "#fff");
  });

$(".btn").click(function(){
  $(".input").val("");
});
});


function sum(){
  
    var bulb = document.getElementById("bulbs").value;
    var sockets = document.getElementById("sockets").value;
    var fridge = document.getElementById("fridge").value;

    var result = parseInt(bulb)*100 + parseInt(sockets)*30 + parseInt(fridge)*250;
 
    if(bulb == "" || bulb < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    if(sockets == "" || sockets < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    if(fridge == "" || fridge < 1){
        document.getElementById("pay").innerHTML = "You cannot get a result fill completely";
        return false;
    }
    document.getElementById("pay").innerHTML = "Your watt usage is " + result+ "w";
  
}





