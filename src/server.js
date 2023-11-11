const express = require('express')
const app = express()

app.use(express.json()).use(express.urlencoded({extended : true}))
app.use()

app.listen(3000, () => {
    console.log("Your port is working.")
})