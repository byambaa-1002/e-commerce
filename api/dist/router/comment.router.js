"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateComment_1 = require("../controller/comment/CreateComment");
const GetComment_1 = require("../controller/comment/GetComment");
const DeleteComment_1 = require("../controller/comment/DeleteComment");
exports.commentRouter = express_1.default.Router();
exports.commentRouter
    .post("/", CreateComment_1.createComment)
    .get("/:commentId", GetComment_1.getComment)
    .delete("/", DeleteComment_1.deleteComment);
