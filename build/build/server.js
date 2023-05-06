"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
app_1.app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
