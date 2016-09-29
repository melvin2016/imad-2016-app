//counter variable and function 
var button = document.getElementById('counter');
var counter=0;
button.onClick = function(){
    
    counter = counter + 1;
    span = document.getElementById('noOfTimes');
    span.innerHTML = counter.toString();
    
    
};