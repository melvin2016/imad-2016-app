//counter variable and function 
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        
        if(request.readyState===XMLHttpRequest.DONE){
            //We should do something
            if(request.status===200){
                var counter = request.responseText;
                span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
            
        }
        
    };
    request.open('GET','http://melvin2016.imad.hasura-app.io/counter',true);
    request.send(null);
};