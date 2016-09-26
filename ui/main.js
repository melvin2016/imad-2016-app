var img = document.getElementById("meak");
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
    
}
img.onClick = function(){
  var interval = setInterval(moveRight,100);  
    
};