"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const createCategory_1 = require("../controller/category/createCategory");
const getCategory_1 = require("../controller/category/getCategory");
const getCategories_1 = require("../controller/category/getCategories");
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter
    .post("/", createCategory_1.createCategory)
    .get("/:id", getCategory_1.getCategory)
    .get("/", getCategories_1.getCategories);
