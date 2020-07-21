var cloudeelement=document.getElementById("cloude1-div");
var animatedelement=cloudeelement.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(-1300px,0)'},
],{
     duration:10000,
     iterations:Infinity,
})
var hellicopterelement=document.getElementById("hallicopter-div");
animatedelement1=hellicopterelement.animate([
    {transform:'translate(-100,0)'},
    {transform:'translate(1200px,0)'},
],{
     duration:4000,
     iterations:Infinity,
})
var carelement=document.getElementById("car-div");
animatedelement2=carelement.animate([
    {transform:'translate(-100px,0)'},
    {transform:'translate(1200px,0)'},
],{
     duration:3000,
     iterations:Infinity,
})