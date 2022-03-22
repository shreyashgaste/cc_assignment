const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res)=> {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Login Example</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="../stylesheets/style.css">
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="wrapper">
                <form action="/" method="post" name="Login_Form" class="form-signin">
                    <h3 class="form-signin-heading">Welcome! Please Sign In</h3>
    
                    <input type="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
                    <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
    
                    <button class="btn btn-lg btn-primary btn-block" name="Submit" value="Login" type="Submit">Login</button>
                </form>
            </div>
        </div>
    </body>
    </html>
    `);
})
app.listen(PORT,()=>{
    console.log(PORT);
})