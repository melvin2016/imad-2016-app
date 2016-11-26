
//counter variable and function 
var userAndPass = document.getElementById('userAndPass'); 

function features(){
       var ret =`
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
        request.open('GET','http://melvin2016.imad.hasura-app.io/submit-comment'+currentArticleTitle,true);
        request.send(null);
         
         
     };`
     return ret;
     
  }
  
   var loginArea = document.getElementById('loginArea');
   var submit_form = document.getElementById('submit_form');
   var logoutArea = document.getElementById('logoutArea');
     
     
     submit_form.onclick = function(){
        
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                
                if(request.readyState===XMLHttpRequest.DONE){
                    //We should do something
                    if(request.status===200){
                        console.log("User is Successfully Logged In !");
                        alert("User is Successfully Logged In !");
                        loginArea.innerHTML = '<div style="color:green; font-size:15px;"><bold>Hi <bold><i>'+request.responseText+'<i></div>';
                        logoutArea.innerHTML = '<a href="http://melvin2016.imad.hasura-app.io/logout"><button>Logout</button></a>';
                         
                        
                        
                        features();
                        location.reload(true);
                        
                        
                    }else if(request.status === 403){
                        alert("Invalid username Or Password!");
                    }else if(request.status===500){
                        alert("Something Went Wrong In The server ! ");
                    }else if(request.status===501){
                        alert("Username And Password Field can't be Empty!");
                    }
                    
                }
            };
         
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;    
    
        request.open('POST','/login' , true);
        request.setRequestHeader('Content-Type','application/json');
        request.send(JSON.stringify({username:username,password:password}));
        submit_form.value="Wait..";
     };
     
     var register_user = document.getElementById('register_user');
     register_user.onclick = function register(){
         var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                
                if(request.readyState===XMLHttpRequest.DONE){
                    //We should do something
                    if(request.status===200){
                        alert('User Succesfully Created !');
                        register_user.value = 'Registered!';
                        
                }else{
                    alert('Something Wrong With The Server !');
                }
            }
        };
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     request.open('POST','/create-user' , true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username,password:password}));
     register_user.value = "Registering...";
     
         
    };  
    
    function isLoggedIn(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
                
                if(request.readyState===XMLHttpRequest.DONE){
                    //We should do something
                    if(request.status===200){
                        
                        loginArea.innerHTML = '<div style="color:yellow"><bold>Hi <bold><i>'+request.responseText+'<i><br>';
                        logoutArea.innerHTML = '<a href="http://melvin2016.imad.hasura-app.io/logout"><button>Logout</button></a>';
                        opinionBox.innerHTML = `'<fieldset>
                        <legend>
                        Your Opinions !
                        </legend>
                        <div style="color:#dd4b39"><button id="counter">Like <3 !</button> <span id="count"> 0 </span>&nbsp;Likes !</div><br>
                        Your Comments here !&nbsp; : &nbsp;&nbsp;<input type="text" Placeholder="Enter Comment Here !" id="input_comment">
                        &nbsp;&nbsp;&nbsp;<input type="submit" value="Submit !" id="submit_btn"></input>&nbsp;&nbsp;&nbsp;
    
                        <ul id="ul_list">
    
                        </ul>
                        </fieldset>'`;
                        userAndPass.innerHTML="";
                        
                        
                        
                        
                        
                            
                        }
                }
            }
        request.open('GET','/check-login',true);
        request.send(null);
        }
        
        isLoggedIn();

    
     
 
 


