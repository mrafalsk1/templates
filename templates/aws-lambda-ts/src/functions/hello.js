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
exports.handler = void 0;
const handler = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = {
            message: `Hello my friend ${(_a = req.queryStringParameters) === null || _a === void 0 ? void 0 : _a.name}!`
        };
        const response = {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                contentType: 'application/json'
            }
        };
        return response;
    }
    catch (error) {
        return {
            statusCode: 500,
            body: 'An error occured'
        };
    }
});
exports.handler = handler;
