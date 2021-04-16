let express = require('express');
let app = express();

app.use(express.json())

app.get('/test', function(req, res){
    console.log(req.body)
    res.send('this is a test')
})

app.get('/home', (req, res) => {
    //this will send back a file in the current directory  (__dirname), followed by the path to the file we want to send.
    res.sendFile(__dirname + '/static.html')
})

// app.post('/test', function(req, res){
//     console.log(req.body)
//     res.send('this is a test')
// })

app.listen(8080, function(){
    console.log('App is listening on port 8080')
})