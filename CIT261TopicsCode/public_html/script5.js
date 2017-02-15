/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// JavaScript demonstration
 
var square = document.getElementById("square"),
    clickMe = document.getElementById('clickMe'); //Keeping it unobstrusive
function doDemo () {
 
  var button = this;
  square.style.backgroundColor = "#fa4";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}
 
function clearDemo (button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}
 
clickMe.onclick = doDemo; //Onclick call. Pass no arguments.​​​​​
