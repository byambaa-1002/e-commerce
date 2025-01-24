"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = require("express");
const CreateReview_1 = require("../controller/review/CreateReview");
exports.reviewRouter = (0, express_1.Router)();
exports.reviewRouter.post("/", CreateReview_1.createReview);
