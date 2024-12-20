/* var corazon1 = document.getElementById("foto1")
corazon1.onclick = function () {
    var contador1 = document.getElementById("span1")
    contador1.innerHTML=parseInt(contador1.innerHTML)+1;
}
var corazon1 = document.getElementById("foto2")
corazon1.onclick = function () {
    var contador2= document.getElementById("span2")
    contador2.innerHTML=parseInt(contador2.innerHTML)+1; 
}
var corazon1 = document.getElementById("foto3")
corazon1.onclick = function () {
    alert("foto3")
}
var corazon1 = document.getElementById("foto4")
corazon1.onclick = function () {
    alert("foto4")
}
var corazon1 = document.getElementById("foto5")
corazon1.onclick = function () {
    alert("foto5")
}
var corazon1 = document.getElementById("foto6")
corazon1.onclick = function () {
    alert("foto6")
}
var corazon1 = document.getElementById("foto7")
corazon1.onclick = function () {
    alert("foto7")
} */

    var corazones=document.getElementsByClassName("fa-heart");

    for (let index = 0; index < corazones.length; index++) {
        const element = corazones[index]; 
        element.onclick=function(c){ 
            var cont=c.target.nextElementSibling;
            cont.innerHTML++;
            
        }
        
    }