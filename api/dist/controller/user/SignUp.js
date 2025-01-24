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
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const model_1 = require("../../model");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userName, phoneNumber, password, address, cartId, zipCode, role, } = req.body;
    const saltRounds = 10;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        yield new model_1.UserModel({
            email: email,
            userName: userName,
            phoneNumber: phoneNumber,
            password: hashedPassword,
            address: address,
            cartId: cartId,
            zipCode: zipCode,
            role: role,
        }).save();
        res.json({ email, userName, phoneNumber });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.register = register;
