
//counter variable and function 
  
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
                        features();
                        
                        
                        
                        
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
                        
                        loginArea.innerHTML = '<div style="color:yellow"><bold>Hi <bold><i>'+request.responseText+'<i></div>';
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
        
        
    
     
 
 


