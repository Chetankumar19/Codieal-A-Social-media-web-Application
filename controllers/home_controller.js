const Post = require('../models/posts');


module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',125); 

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title: "Codieal | Home",
    //         posts: posts
    //     });
    // });
    // populate the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title: "Codieal | Home",
            posts: posts
        });
    });

};