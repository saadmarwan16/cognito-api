"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importStar(require("express"));
const routes_1 = require("../build/routes");
const swagger_ui_express_1 = require("swagger-ui-express");
exports.app = (0, express_1.default)();
exports.app.use((0, express_1.urlencoded)({ extended: true }));
exports.app.use((0, express_1.json)());
exports.app.use('/docs', swagger_ui_express_1.serve, (_req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return res.send((0, swagger_ui_express_1.generateHTML)(yield Promise.resolve().then(() => tslib_1.__importStar(require('../build/swagger.json')))));
}));
(0, routes_1.RegisterRoutes)(exports.app);
exports.app.use((_req, res) => {
    return res.status(404).send({ status: 'not found' });
});
exports.app.use((_err, _req, res) => {
    return res.status(500).json({
        message: 'Some really unexpected happened',
    });
});
