const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/', (req, res) => {
let randomNum = Math.floor(Math.random()*10);
if(randomNum % 2 === 0) {
    rollbar.info("random number is even")
} else {
    rollbar.info("random number is odd")
} res.sendStatus(200);
});


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ccbdafbbd9414eb4a2ec154898b8f9b4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
                                        
const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server listening on ${port}`))