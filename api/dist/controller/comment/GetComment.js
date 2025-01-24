"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComment = void 0;
const comment_1 = require("../../model/comment");
const getComment = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { commentId } = _req.params;
    try {
        const comment = yield comment_1.CommentModel.findOne({ _id: commentId });
        res.json({ comment: comment });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getComment = getComment;
