import { Router, Request, Response } from "express";
import { controller, get } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  async getLogin(req: Request, res: Response) {
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
  }
}
