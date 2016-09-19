var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    profile:{
    title: "Profile Meak Inc.",
    heading:"Profile",
    para1:"We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous ! We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !We Are Legion . We Do Not Forget . We Do Not Forgive . We Are Anonymous !",
    para2:" Just Kidding ! ",
    para3:"Sorry For Troubling You !"
},
    works:{
        title:"Works",
        heading:"Works",
        para1:"My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You !My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You !",
        para2:" Just Kidding ! ",
        para3:"Sorry For Troubling You !"
        },
    vision:{
            title:"Vision | Meak Studios",
            heading:"VISION !",
            para1:"My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You !My Recent Works Are Based On editing A Video ! But We are Big You Know Like we make a lot of things that humas don't but , funny isnt it ? Then Fuck You !",
            
            para2:" Just Kidding ! ",
            para3:"Sorry For Troubling You !"
        }   
}
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var para1 = data.para1;
    var para2 = data.para2;
    var para3 = data.para3;
    
    var htmlContent=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-sacle=1"> 
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <a href="/"><u>Home</u></a>
            <a href="profile"><u>Profile</u></a>
            <a href="works"><u>Works</u></a>
            <a href="Vision"><u>VISION ! :D</u></a>
            <h1>${heading}<hr></h1>
            
            <p>
                ${para1}
            </p>
            <p>
                ${para2} 
            </p>
            <p>${para3}</p>
            
        <footer>
            <p>Meak Inc.</p>    
        </footer>
        
        </div>
    </body> 
</html>`

return htmlContent;
}

//For Home Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//For Other PAges
app.get('/:articleName', function (req, res) {
    var article = articleName;
    res.send(createTemplate(article));
});
/*
//For Works Page
app.get('/works', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'works.html'));
});


app.get('/vision', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vision.html'));
});
*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
