"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const serverless_http_1 = tslib_1.__importDefault(require("serverless-http"));
const app_1 = require("./app");
exports.handler = (0, serverless_http_1.default)(app_1.app);
