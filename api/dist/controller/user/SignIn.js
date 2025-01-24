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
exports.login = void 0;
const model_1 = require("../../model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield model_1.UserModel.findOne({ email: email }).exec();
        if (!user) {
            res.status(400).json({ message: "user not found" });
            return;
        }
        const isMachedPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isMachedPassword) {
            res.status(400).json({ message: "password is incorrect" });
            return;
        }
        const accessToken = jsonwebtoken_1.default.sign({
            _id: user._id,
            email: user.email,
            role: user.role,
        }, "secret", { expiresIn: "10h" });
        res.json({
            user: {
                email: user.email,
                userName: user.userName,
                id: user._id,
            },
            accessToken,
        });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.login = login;
