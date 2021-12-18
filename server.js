/* Express server */
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

// my library js
app.get('/StickyNotes.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/StickyNotes.js'))
})
// my library css
app.get('/StickyNotes.css', (req, res) => {
	res.sendFile(path.join(__dirname, '/StickyNotes.css'))
})
// documentation markdown
app.get('/Documentation.md', (req, res) => {
	res.sendFile(path.join(__dirname, '/Documentation.md'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})

