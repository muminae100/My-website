// var numberOne=5;
// var numberTwo=3;
// var resultOfAddition=numberOne+numberTwo;
// console.log(resultOfAddition)
// console.log("mumina")
// alert("mumina");
var username = document.getElementById("username");
document.getElementById("user-login").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(username.value);
    if(username.value.length<5){
       alert("put another username");
    }
});