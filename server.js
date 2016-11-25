var express = require('express');
var morgan = require('morgan');
var Pool = require('pg').Pool;
var path = require('path');
var config = {
  host : 'db.imad.hasura-app.io',
  user : 'melvin2016',
  password : process.env.DB_PASSWORD,
  port : '5432',
  database : 'melvin2016'

};
var pool = new Pool(config);
var app = express();
app.use(morgan('combined'));
/*app.get('/test-db',function(req,res){
     pool.query("SELECT * FROM articles ",function(err,result){
        if(err){
            
            res.status(500).send(err,toString());
            
        }else{
            res.send(JSON.stringify(result));
        }
        
    });
    
});*/



var articles={
    profile:{
    title: "Profile",
    head_img:"me.jpg",
    heading:"Profile",
    para1:"Name : Melvin George (Chatan)",
    para2:"<span style=color:#a7ea09>Current Status :  Developing Imad App ! :D</span>"

},
    works:{
        title:"The Works",
        head_img:"works.png",
        heading:"The Works",
        para1:"Coming Soon !",
        para2:" Just Kidding ! "
        },
    vision:{
            title:"Vision",
            head_img:"vision.png",
            heading:"VISION !",
            para1:"<bold>If today were the last day Of your Life,Would you want to do what you are about to do today ?<br><i> - Steve Jobs</i></bold>",
            para2:"<bold>Thanks to IMAD Team for Helping Me Build This !</bold>"
        }
}

var counter=0;
app.get('/counter', function(req,res){
   counter = counter + 1;
   res.send(counter.toString());

});

var comments=[];
app.get('/submit-comment' , function(req,res){
    var comment = req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
});

function createTemplate(data){
    var title = data.title;
    var head_img = data.head_img;
    var heading = data.heading;
    var para1 = data.para1;
    var para2 = data.para2;

    var htmlContent=`<html>
<head>
    <title>
        ${title}
    </title>
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Baloo+Bhai|Lalezar|Lato|Oswald" rel="stylesheet">
    <link type="text/css"href="/ui/style.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-sacle=1">

</head>
<body>


    <div class="container">
        <div class="links">
          <ul>
            <li><a class="active" href="/"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/home.png" alt="Home"> Home</a></li>
            <li><a href="profile"><img src="https://4bis.nl/img/profile.png" alt="Profile"> Profile</a></li>
            <li><a href="works"><img src="http://intu.co.uk/uploads/media/thumbnail/0001/19/thumb_18979_thumbnail_1x.png" alt="Works"> The Works</a></li>
            <li ><a  href="vision"><img src="http://www.pngall.com/wp-content/uploads/2016/05/Vision-Free-Download-PNG.png" alt="vision">VISION</a></li>
          </ul>
        </div>
        <div class="center">
            <img src="/ui/" class="img-medium"/>
        </div>
        <h1>${heading}<hr></h1>

        <p>
            ${para1}
        </p>
        <p>
            ${para2}
        </p>

        <fieldset>
                <legend>
                Your Opinions !
                </legend>
                <div style="color:#dd4b39"><button id="counter">Like <3 !</button> <span id="count"> 0 </span>&nbsp;Likes !</div><br>
                Your Comments here !&nbsp; : &nbsp;&nbsp;<input type="text" Placeholder="Enter Comment Here !" id="input_comment">
                &nbsp;&nbsp;&nbsp;<input type="submit" value="Submit !" id="submit_btn">&nbsp;&nbsp;&nbsp;

                <ul id="ul_list">

                </ul>
        </fieldset>
    </div>

  <footer>
  <p>
    <a href="https://twitter.com/melvingeorge11"><img src="http://icons.iconarchive.com/icons/spoon-graphics/doodle/128/Twitter-icon.png"></a>
    &nbsp&nbsp&nbsp<a href="https://www.facebook.com/alkitj10"><img src="http://inc.anphicle.com/2012/01/facebook.png"></a>
  </p>
  &copy Meak Inc.
  </footer>
  <script type="text/javascript" src="/ui/main.js"> </script>
</body>
</html>`;

return htmlContent;
}

//For Other PAges
app.get('/articles/:articlename', function (req, res) {
    pool.query("SELECT * FROM articles WHERE title ='" +req.params.articlename +"'" , function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            if(result.rows.length===0){
                res.status(404).send('Article not Found !');
            }else{
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
            
        }
        
    });
});


//For Home Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/me1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me1.jpg'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});

app.get('/ui/works.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'works.png'));
});

app.get('/ui/vision.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vision.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
