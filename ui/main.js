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
                
                
                comments = JSON.parse(comments);
                
                
                var list='';
     
                for(i=0; i < comments.length ; i++){
         
                 list += '<li>'+comments[i]+'</li>';
         
                 }
     
                ul_list.innerHTML = "<br>Comments:"+list;
                
            }
            
        }
        
    };
    var inputComment = document.getElementById('input_comment');
    var comment = inputComment.value;
    request.open('GET','http://melvin2016.imad.hasura-app.io/submit-comment?comment='+comment,true);
    request.send(null);
     
     
 };
 
 var submit_form = document.getElementById('submit_form');
 submit_form.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            
            if(request.readyState===XMLHttpRequest.DONE){
                //We should do something
                if(request.status===200){
                    console.log("User is Successfully Logged In !");
                    alert("User is Successfully Logged In !");
                    
                }else if(request.status === 403){
                    alert("Invalid username Or Password!");
                }else if(request.status===500){
                    alert("Something Went Wrong In The server ! ");
                }
                
            }
        };
    var username = document.getElementbyId('username').value;
    var password = document.getElementbyId('password').value;
    request.open('POST','http://melvin2016.imad.hasura-app.io/login' , true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
 };