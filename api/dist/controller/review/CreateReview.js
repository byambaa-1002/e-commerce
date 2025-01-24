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
exports.createReview = void 0;
const model_1 = require("../../model");
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, stars, comments } = req.body;
    try {
        // const productObjectId =
        //   mongoose.Types.ObjectId.createFromHexString(productId);
        const review = yield new model_1.ReviewModel({ productId, stars, comments }).save();
        const formatComments = comments.map((comment) => (Object.assign(Object.assign({}, comment), { commentId: comment._id })));
        yield model_1.CommentModel.insertMany(formatComments);
        res.json({ message: "succesfully review created", review });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.createReview = createReview;
