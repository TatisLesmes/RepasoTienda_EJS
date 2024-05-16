const express = require("express");
const path = require("path");
const app = express();


app.set("PORT", process.env.PORT || 3002);

app.listen(app.get("PORT"), () =>
    console.log(`Server listen at Port ${app.get("PORT")}`)
);

// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(require('./routes/index'))




module.exports=app;