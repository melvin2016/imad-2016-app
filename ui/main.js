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



var submit = document.getElementById('submit_btn');
var ul_list = document.getElementById('ul_list');
submit.onclick = function(){
    
    
     
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        
        if(request.readyState===XMLHttpRequest.DONE){
            //We should do something
            if(request.status===200){
                var comments = request.responseText;
                var names. request.responseText;
                
                comments = JSON.parse(comments);
                names = JSON.parse(names);
                
                var list='';
     
                for(i=0; i < comments.length ; i++){
         
                 list += '<li>'+names[i]-+comments[i]+'</li>';
         
                 }
     
                ul_list.innerHTML = "<br>Comments:"+list;
                
            }
            
        }
        
    };
    var inputComment = document.getElementById('input_comment');
    var comment = inputComment.value;
     var inputNAme = document.getElementById('input_name');
    var name = inputName.value;
    request.open('GET','http://melvin2016.imad.hasura-app.io/submit-comment?comment='+comment+'name='name,true);
    request.send(null);
     
     
 };