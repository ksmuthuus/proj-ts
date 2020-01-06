import { Router, Request, Response } from "express";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginRouter = Router();

loginRouter.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`<h1>Logged In</h1> <h3><a href='/logout'>Logout</a></h3>`);
  } else {
    res.send(`<h3>please Sign-In</h3><a href='/login'>SignIn</a>`);
  }
});

loginRouter.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="post">
  <div>
    <label>User Name</label>
    <input name="username" type="text">
  </div>

  <div>
    <label>Password</label>
    <input name="password" type="password">
  </div>
  <button type="submit">SignIn</button>
</form>
  
  `);
});

loginRouter.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username && password && username === "mks" && password === "pass") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid user name");
  }
});

loginRouter.get("/secured", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`<h1>Protected resource is here...</h1>`);
  } else {
    res.send(`<h3>please Sign-In</h3><a href='/login'>SignIn</a>`);
  }
});

loginRouter.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { loginRouter };
