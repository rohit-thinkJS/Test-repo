const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("<h2>Hello There</h2>")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))