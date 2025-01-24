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
exports.createComment = void 0;
const model_1 = require("../../model");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reviewId, userId } = req.body;
    try {
        if (!reviewId) {
            res.status(400).json({ message: "reviewId not found" });
        }
        if (!userId) {
            res.status(400).json({ message: "need to Sign In" });
        }
        yield new model_1.CommentModel({
            message: "succesfully comment created",
            reviewId: reviewId,
            userId: userId,
        }).save();
        res.json({ reviewId, userId });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.createComment = createComment;
