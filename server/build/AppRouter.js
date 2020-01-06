"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.router) {
            AppRouter.router = express_1.Router();
        }
        return AppRouter.router;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
