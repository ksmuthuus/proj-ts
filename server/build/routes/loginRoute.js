"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("<h1>Logged In</h1> <h3><a href='/logout'>Logout</a></h3>");
    }
    else {
        res.send("<h3>please Sign-In</h3><a href='/login'>SignIn</a>");
    }
});
loginRouter.get("/login", function (req, res) {
    res.send("\n  <form method=\"post\">\n  <div>\n    <label>User Name</label>\n    <input name=\"username\" type=\"text\">\n  </div>\n\n  <div>\n    <label>Password</label>\n    <input name=\"password\" type=\"password\">\n  </div>\n  <button type=\"submit\">SignIn</button>\n</form>\n  \n  ");
});
loginRouter.post("/login", function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password && username === "mks" && password === "pass") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid user name");
    }
});
loginRouter.get("/secured", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("<h1>Protected resource is here...</h1>");
    }
    else {
        res.send("<h3>please Sign-In</h3><a href='/login'>SignIn</a>");
    }
});
loginRouter.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
