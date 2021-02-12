const express = require('express');
const app = express();
const path = require('path');


const api = {
    randomNum: "",
};
 
app.get('/', function (req, res) {
  res.send('🟢 Hello From Express Server 😃')
})
 
let port = process.env.PORT || 6969;




app.use(express.static(__dirname + '/Pages')); //required for css

//send file example
app.get('/help', (req, res)=> {
    res.sendFile(path.join(__dirname + '/pages/Help.html'));
    
})


//api route(JSON)
app.get('/api', (req, res)=> {
    api.randomNum = Math.floor(Math.random()*100)
    res.json(api)
})



//listener
app.listen(port, ()=> {
    console.log(`listening at ${port}`)
})