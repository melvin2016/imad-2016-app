
//counter variable and function 


function features(){
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
         
         
     };
  }
  
   var loginArea = document.getElementById('loginArea');
   var submit_form = document.getElementById('submit_form');
   var logoutArea = document.getElementById('logoutArea');
     
     
     submit_form.onclick = function login(){
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                
                if(request.readyState===XMLHttpRequest.DONE){
                    //We should do something
                    if(request.status===200){
                        console.log("User is Successfully Logged In !");
                        alert("User is Successfully Logged In !");
                        loginArea.innerHTML = '<div style="color:yellow"><bold>Hi <bold><i>'+request.responseText+'<i></div>';
                        logoutArea.innerHTML = '<a href="http://melvin2016.imad.hasura-app.io/logout"><button>Logout</button></a>';
                        if(features()){
                            location.reload(true);
                        }
                        
                        
                        
                        
                    }else if(request.status === 403){
                        alert("Invalid username Or Password!");
                    }else if(request.status===500){
                        alert("Something Went Wrong In The server ! ");
                    }
                    
                }
            };
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;    
    
        request.open('POST','/login' , true);
        request.setRequestHeader('Content-Type','application/json');
        request.send(JSON.stringify({username:username,password:password}));
        submit_form.value="Logging In...";
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
                        
                        loginArea.innerHTML = '<div style="color:yellow"><bold>Hi <bold><i>'+request.responseText+'<i>'`</div>
                        <style type='text/css'>@-webkit-keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }@keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }.uil-default-css > div:nth-of-type(1){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.5s;animation-delay: -0.5s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(2){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.4166666666666667s;animation-delay: -0.4166666666666667s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(3){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.33333333333333337s;animation-delay: -0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(4){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.25s;animation-delay: -0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(5){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.16666666666666669s;animation-delay: -0.16666666666666669s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(6){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.08333333333333331s;animation-delay: -0.08333333333333331s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(7){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0s;animation-delay: 0s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(8){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.08333333333333337s;animation-delay: 0.08333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(9){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.16666666666666663s;animation-delay: 0.16666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(10){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.25s;animation-delay: 0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(11){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.33333333333333337s;animation-delay: 0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(12){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.41666666666666663s;animation-delay: 0.41666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}</style><div class='uil-default-css' style='transform:scale(0.6);'><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute;'></div></div>`;
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
                    
                        
                        
                        
                            
                        }
                }
            }
        request.open('GET','/check-login',true);
        request.send(null);
        }
        
        isLoggedIn();
        
        
    
     
 
 


