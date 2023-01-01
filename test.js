"use strict";
exports.__esModule = true;
var src_1 = require("./src");
var computeTest = (0, src_1.compute)('2+4', function () { });
var computeTest2 = (0, src_1.compute)('(2+4)/3', function () { });
var computeTest3 = (0, src_1.compute)('2/5*6/7', function () { });
var parseTest = (0, src_1.parse)('2+4', function () { });
var renderTreeTest = (0, src_1.renderTree)('2+4', function () { });
console.log(computeTest);
console.log(computeTest2);
console.log(computeTest3);
console.log(parseTest);
console.log(renderTreeTest);
