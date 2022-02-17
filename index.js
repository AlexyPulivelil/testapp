     const express = require("express");

    const app = express();

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", function (req, res) {
     return res.send("Hello World");
    });

    // listen to port 7000 by default
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running!All Good");
    });

    module.exports = app;
