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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../../model");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, id } = req.body;
    try {
        const objectId = mongoose_1.default.Types.ObjectId.createFromHexString(id);
        const user = yield model_1.UserModel.findOneAndUpdate({ id: objectId }, //condition
        { email: email }, //update hiih data
        { new: true } //update hiisnii daraah utga harah
        );
        res.json({ user: user });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.updateUser = updateUser;
