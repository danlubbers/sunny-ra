const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv').config()
    , app = new express()

app.use(bodyParser.json())
app.use(cors())

// This is for the NPM RUN BUILD
app.use(express.static(__dirname + '/../build'))

// Port
app.listen(3000, _ => {
    console.log(`Everything is running on PORT 3000`)
})