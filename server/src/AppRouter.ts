import { Router } from "express";

export class AppRouter {
  private static router: Router;
  public static getInstance(): Router {
    if (!AppRouter.router) {
      AppRouter.router = Router();
    }
    return AppRouter.router;
  }
}
