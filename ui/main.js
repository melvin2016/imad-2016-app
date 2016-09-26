var img = document.getElementById("meak");
var content = document.getElementById("myCont");
content.innerHTML = "Shokam";
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
    
}
img.onClick = function(){
  var interval = setInterval(moveRight,100);  
    
};