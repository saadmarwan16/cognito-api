"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const tslib_1 = require("tslib");
const tsoa_1 = require("tsoa");
let ArticleController = class ArticleController extends tsoa_1.Controller {
    getBase() {
        return {
            message: 'Hello, world',
        };
    }
    getBaseId(id) {
        return {
            message: `Hello, world with id of ${id}`,
        };
    }
};
tslib_1.__decorate([
    (0, tsoa_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ArticleController.prototype, "getBase", null);
tslib_1.__decorate([
    (0, tsoa_1.Get)('/{id}'),
    tslib_1.__param(0, (0, tsoa_1.Path)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ArticleController.prototype, "getBaseId", null);
ArticleController = tslib_1.__decorate([
    (0, tsoa_1.Route)('/api')
], ArticleController);
exports.ArticleController = ArticleController;
