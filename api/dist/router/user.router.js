"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const SignUp_1 = require("../controller/user/SignUp");
const SignIn_1 = require("../controller/user/SignIn");
const UpdateUser_1 = require("../controller/user/UpdateUser");
const DeleteUser_1 = require("../controller/user/DeleteUser");
const express_validator_1 = require("express-validator");
const middleware_1 = require("../middleware");
const me_1 = require("../controller/user/me");
exports.userRouter = express_1.default.Router();
const addUserValidation = [
    (0, express_validator_1.body)("firstN", "Invalid does not Empty").notEmpty(),
    (0, express_validator_1.body)("email").isEmail(),
];
exports.userRouter
    .post("/", addUserValidation, SignUp_1.register)
    .delete("/:userId", DeleteUser_1.deleteUser)
    // .get("/", getUsers)
    .post("/login", SignIn_1.login)
    .put("/", UpdateUser_1.updateUser)
    .post("/me", middleware_1.authenticateToken, me_1.me);
