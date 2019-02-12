// server.js
    // SERVER-SIDE JAVASCRIPT

    //  >>>>>>>>>>>>  require() serves to import the express module and create an Express application
    const express = require('express');
    //    //    the app object denotes the Express application
    const app = express();

    // server.js
    const albums = [
      {
        title: 'Cupid Deluxe',
        artist: 'Blood Orange'
      },
      {
        title: 'M3LL155X - EP',
        artist: 'FKA twigs'
      },
      {
        title: 'Fake History',
        artist: 'letlive.'
      }
    ];


    app.get("/api/albums", (req, res) => {  // Add an `app.get` method for the path `/api/albums`
      console.log(req);
      console.log(res);
      res.json(albums); //responds with some JSON containing all the albums from our albums variable
    });






    //  >>>>>>>>>>>>  Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
    //  >>>>>>>>>>>>  Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
    app.use((req, res, next) => {
      //  >>>>>>>>>>>>  The ("Access-Control-Allow-Origin") header determines
      //  >>>>>>>>>>>>  which origins are allowed to access server resources
      //  >>>>>>>>>>>>  over CORS (the * wildcard allows access from any origin).
      //  >>>>>>>>>>>>  =================CITATION======================
      //  >>>>>>>>>>>>  URL: https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
      //  >>>>>>>>>>>>  Website Title: medium.com
      //  >>>>>>>>>>>>  Article Title: Using CORS in Express – Alexis Hevia – Medium
      //  >>>>>>>>>>>>  Date Published: March 08, 2017
      //  >>>>>>>>>>>>  Date Accessed: February 12, 2019
      res.header("Access-Control-Allow-Origin", "*");
      //  >>>>>>>>>>>>  ("The Access-Control-Allow-Headers") response header is used in response to a preflight request
      //  >>>>>>>>>>>>  which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used
      //  >>>>>>>>>>>>  during the actual request.
      //  >>>>>>>>>>>>  =================CITATION======================
      // URLhttps://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
      // Website TitleMDN Web Docs
      // Article TitleAccess-Control-Allow-Headers
      // Date AccessedFebruary 12, 2019
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });


    //  >>>>>>>>>>>>  The app.get() method specifies a callback
    //  >>>>>>>>>>>>   function that will be invoked whenever there
    //  >>>>>>>>>>>>  is an HTTP GET request with a path ('/')
    //  >>>>>>>>>>>>  relative to the site root. The callback function
    //  >>>>>>>>>>>>  takes a request and a response object as arguments,
    //  >>>>>>>>>>>>  and simply calls send() on the response to return
    //  >>>>>>>>>>>>  the string "Hello World!"
    //  >>>>>>>>>>>>  =================CITATION======================
    //  >>>>>>>>>>>>  Resources referenced cited below:
    //  >>>>>>>>>>>>  URL: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#Introducing_Express
    //  >>>>>>>>>>>>  Website Title: MDN Web Docs
    //  >>>>>>>>>>>>  Article Title: Express/Node introduction
    //  >>>>>>>>>>>>  Date AccessedFebruary 12, 2019
    app.get('/', (req, res) => {
      console.log(req);
      console.log(res);
      res.send('Hello World!')});


    //  >>>>>>>>>>>>  This final block fires up the production port while in production otherwise it starts up the
    //  >>>>>>>>>>>>  server on port '3000' (for development) and prints a log comment to the console.
    app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
