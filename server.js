var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    profile:{
    title: "Profile",
    head_img:"ui/me.jpg",
    heading:"Profile",
    para1:"Name : Melvin George (Chatan)",
    para2:"<span style=color:#a7ea09>Current Status :  Developing Imad App ! :D</span>",

},
    works:{
        title:"Works",
        head_img:"http://makered.org/wp-content/uploads/2013/02/works-logo-purple-cutout.png",
        heading:"Works",
        para1:"Coming Soon !",
        para2:" Just Kidding ! ",
        },
    vision:{
            title:"Vision",
            head_img:"http://www.saranathan.ac.in/img/vm/vision.png",
            heading:"VISION !",
            para1:"<bold>If today were the last day Of your Life,Would you want to do what you are about to do today ?<br><i> - Steve Jobs</i></bold>",
            para2:"<bold>Thanks to IMAD Team for Helping Me Build This !</bold>",
        }
}
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
        <a id="home"href="/"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/home.png" alt="Home"> Home</a>
        <a id="profile" href="profile"><img src="https://4bis.nl/img/profile.png"alt="Profile"> Profile</a>
        <a id="works"href="works"><img src="http://intu.co.uk/uploads/media/thumbnail/0001/19/thumb_18979_thumbnail_1x.png" alt="Works"> Works</a>
        <a id="vision"href="vision"><img src="http://www.pngall.com/wp-content/uploads/2016/05/Vision-Free-Download-PNG.png" alt="vision">VISION</a>
            <div class="center">
                <img src="/{$head_img}" class="img-medium"/>
            </div>
            <h1>${heading}<hr></h1>

            <p>
                ${para1}
            </p>
            <p>
                ${para2}
            </p>


        </div>
      <footer>
      <p>
        <a href="https://twitter.com/melvingeorge11"><img src="http://icons.iconarchive.com/icons/spoon-graphics/doodle/128/Twitter-icon.png"></a>
        &nbsp&nbsp&nbsp<a href="https://www.facebook.com/alkitj10"><img src="http://inc.anphicle.com/2012/01/facebook.png"></a>
      </p>
      &copy Meak Inc.
      </footer>
    </body>
</html>`

return htmlContent;
}

//For Home Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//For Other PAges
app.get('/:articlename', function (req, res) {
    var articleName = req.params.articlename;
    res.send(createTemplate(articles[articleName]));
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


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
