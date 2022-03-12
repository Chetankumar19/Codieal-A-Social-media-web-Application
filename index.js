const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const port = 8000;

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

//imprt assets
app.use(express.static('./assets'));
app.use('/',require('./routes'));

//extract sytle and scripts from subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// set the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log('Error in:');
        //interpolation 
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Sever is running on port ${port}`);
});
