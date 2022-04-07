// server.js
// where your node app starts

// init project
let express = require('express');
let app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
let cors = require('cors');
const parse = require('nodemon/lib/cli/parse');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//my code:
  let jsonObject= {};
app.get("/api/:input", (req, res)=>{
  let input = req.params.input;
  if(input.includes("-")){
    jsonObject["unix"] = new Date(input).getTime();
     jsonObject["utc"] = new Date(input).toUTCString();
    }else{
    input = parseInt(input)  
    jsonObject["unix"] = new Date(input).getTime();
    jsonObject["utc"] = new Date(input).toUTCString(); 
    }
    if(!jsonObject["unix"] || !jsonObject["utc"]){
      console.log({error: "invalid Date"})
    }
    res.json(jsonObject);
}) 
app.get("/api", (req, res)=>{
  jsonObject["unix"]= new Date().getTime();
  jsonObject["utc"] = new Date().toUTCString();
  res.json(jsonObject)
})