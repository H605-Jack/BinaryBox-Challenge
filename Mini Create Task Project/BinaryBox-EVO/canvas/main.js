/**
 * @application_name
 * BinaryBox Challenge
 * Version 1.0
 *
 * @builder
 * Jackie V. (aka BXBJackie)
 * AP Computer Science Principal - Mini Create Task Project
 */
var HTMLEntry = /** @class */ (function () {
    function HTMLEntry(height, width) {
        var _this = this;
        this.event = function (e) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            _this.objs = _this.collides(_this.rects, e.offsetX, e.offsetY);
            for (var i = 0; i <= _this.rects.length; i++) {
                if (_this.objs == _this.rects[i]) {
                    _this.ctx.clearRect(345, 185, 60, 20);
                    _this.ctx.clearRect(605, 185, 60, 20);
                    _this.ctx.clearRect(345, 435, 60, 20);
                    _this.ctx.clearRect(605, 435, 60, 20);
                    _this.ctx.clearRect(900, 40, 300, 550);
                    _this.ctx.clearRect(((_c = (_b = _this.rects) === null || _b === void 0 ? void 0 : _b[i]) === null || _c === void 0 ? void 0 : _c[0]) + 2, ((_e = (_d = _this.rects) === null || _d === void 0 ? void 0 : _d[i]) === null || _e === void 0 ? void 0 : _e[1]) + 2, ((_g = (_f = _this.rects) === null || _f === void 0 ? void 0 : _f[i]) === null || _g === void 0 ? void 0 : _g[2]) - 4, ((_j = (_h = _this.rects) === null || _h === void 0 ? void 0 : _h[i]) === null || _j === void 0 ? void 0 : _j[3]) - 4);
                    switch (_this.b[i]) {
                        case '0':
                            _this.b[i] = '1';
                            console.log(_this.b);
                            _this.ctx.fillText(_this.b[i], ((_l = (_k = _this.rects) === null || _k === void 0 ? void 0 : _k[i]) === null || _l === void 0 ? void 0 : _l[0]) + 14, ((_o = (_m = _this.rects) === null || _m === void 0 ? void 0 : _m[i]) === null || _o === void 0 ? void 0 : _o[1]) + 26);
                            _this.assignBinValues(_this.b.length, 13);
                            _this.winCheck();
                            break;
                        case '1':
                            _this.b[i] = '0';
                            console.log(_this.b);
                            _this.ctx.fillText(_this.b[i], ((_q = (_p = _this.rects) === null || _p === void 0 ? void 0 : _p[i]) === null || _q === void 0 ? void 0 : _q[0]) + 14, ((_s = (_r = _this.rects) === null || _r === void 0 ? void 0 : _r[i]) === null || _s === void 0 ? void 0 : _s[1]) + 26);
                            _this.assignBinValues(_this.b.length, 13);
                            _this.winCheck();
                            break;
                        default:
                            console.log("nothing happened.");
                            break;
                    }
                }
            }
        };
        this.canvas = document.getElementById("canvas");
        this.canvas.height = height;
        this.canvas.width = width;
        this.ctx = this.canvas.getContext('2d');
        this.inputValue = Math.floor(Math.random() * 32764);
        this.welcomeScreen();
    }
    HTMLEntry.prototype.collides = function (objects, x, y) {
        var _b, _c, _d, _e, _f, _g;
        var isCollision = false;
        for (var i = 0; i <= objects.length; i++) {
            var left = (_b = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _b === void 0 ? void 0 : _b[0], right = ((_c = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _c === void 0 ? void 0 : _c[0]) + ((_d = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _d === void 0 ? void 0 : _d[2]);
            var top_1 = (_e = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _e === void 0 ? void 0 : _e[1], bottom = ((_f = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _f === void 0 ? void 0 : _f[1]) + ((_g = objects === null || objects === void 0 ? void 0 : objects[i]) === null || _g === void 0 ? void 0 : _g[3]);
            if (right >= x && left <= x && bottom >= y && top_1 <= y) { // ~~~~~ targeting canvas context including fillrects etc..
                isCollision = objects === null || objects === void 0 ? void 0 : objects[i];
            }
        }
        return isCollision;
    };
    /**
     * @param coordinates generate a list of stroke square boxes
     */
    HTMLEntry.prototype.clickOnContext = function (coordinates) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var box = new Path2D();
        var a;
        var b;
        this.b = [];
        if (this.canvas && this.canvas.getContext) { // triggering the overall canvas that contains square boxes 
            this.rects = coordinates; // global use
            if (this.ctx) { // triggering only the square boxes
                for (var i = 0; i < this.rects.length; i++) {
                    box.rect((_c = (_b = this.rects) === null || _b === void 0 ? void 0 : _b[i]) === null || _c === void 0 ? void 0 : _c[0], (_e = (_d = this.rects) === null || _d === void 0 ? void 0 : _d[i]) === null || _e === void 0 ? void 0 : _e[1], (_g = (_f = this.rects) === null || _f === void 0 ? void 0 : _f[i]) === null || _g === void 0 ? void 0 : _g[2], (_j = (_h = this.rects) === null || _h === void 0 ? void 0 : _h[i]) === null || _j === void 0 ? void 0 : _j[3]);
                    this.ctx.font = "20px Arial";
                    this.ctx.fillText(this.a = "" + Math.floor(Math.random() * 2), a = ((_l = (_k = this.rects) === null || _k === void 0 ? void 0 : _k[i]) === null || _l === void 0 ? void 0 : _l[0]) + 14, b = ((_o = (_m = this.rects) === null || _m === void 0 ? void 0 : _m[i]) === null || _o === void 0 ? void 0 : _o[1]) + 26);
                    this.b.push(this.a);
                }
            }
            console.log(this.b);
            this.ctx.stroke(box);
            this.winCheck();
        }
    };
    HTMLEntry.prototype.winCheck = function () {
        if (this.result !== this.inputValue) {
            // when two number values isn't matched up
            this.canvas.addEventListener("click", this.event);
        }
        else {
            // when two number values matched up (winning state)
            this.canvas.removeEventListener("click", this.event);
            this.endgame();
        }
    };
    HTMLEntry.prototype.endgame = function () {
        var _this = this;
        this.ctx.clearRect(425, 265, 150, 110);
        this.ctx.font = "40px Arial";
        this.ctx.fillText("" + this.result, 440, 335);
        this.ctx.font = "40px Arial";
        this.ctx.fillText("LEVEL CLEAR", 920, 500);
        this.ctx.font = "15px Arial";
        this.ctx.fillText("Base-2 Value: 0" + (this.result).toString(2), 920, 530);
        this.ctx.font = "18px Arial";
        this.ctx.fillText("Hit F2 for New Game", 920, 560);
        document.addEventListener('keydown', function (e) {
            if (e.key === "F2") {
                _this.load();
            }
        });
    };
    HTMLEntry.prototype.triangularSum = function (a, index, index2) {
        var b = [];
        for (var i = index; i <= index + index2; i++) {
            b.push(a[i]);
        }
        var _a = b.reduce(function (a, b) { return a + b; }, 0);
        return _a;
    };
    HTMLEntry.prototype.assignBinValues = function (values, maxof) {
        var a = [];
        var initial = 0;
        for (var i = 0; i < values; i++) {
            a.push(this.b[i] * Math.pow(2, initial));
            initial += 1;
            if (initial == maxof) {
                initial = 0;
            }
        }
        console.log(a);
        this.results = [this.triangularSum(a, 0, 12), this.triangularSum(a, 13, 12), this.triangularSum(a, 13 * 2, 12), this.triangularSum(a, 13 * 3, 12)];
        this.ctx.fillText("" + this.results[0], 350, 200);
        this.ctx.fillText("" + this.results[1], 610, 200);
        this.ctx.fillText("" + this.results[2], 610, 450);
        this.ctx.fillText("" + this.results[3], 350, 450);
        this.result = this.results[0] + this.results[1] + this.results[2] + this.results[3];
        this.resultBoxText();
    };
    HTMLEntry.prototype.label = function () {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36;
        var exponent = 1;
        for (var i = 0; i < this.rects.length; i++) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
            this.ctx.font = "13px Arial";
            switch (true) {
                case i < 4:
                    this.ctx.fillText("" + exponent, ((_c = (_b = this.rects) === null || _b === void 0 ? void 0 : _b[i]) === null || _c === void 0 ? void 0 : _c[0]) + 15, ((_e = (_d = this.rects) === null || _d === void 0 ? void 0 : _d[i]) === null || _e === void 0 ? void 0 : _e[1]) + 53);
                    break;
                case i == 4:
                    this.ctx.fillText("" + exponent, ((_g = (_f = this.rects) === null || _f === void 0 ? void 0 : _f[i]) === null || _g === void 0 ? void 0 : _g[0]) - 15, ((_j = (_h = this.rects) === null || _h === void 0 ? void 0 : _h[i]) === null || _j === void 0 ? void 0 : _j[1]) + 20);
                    break;
                case i > 4 && i <= 9:
                    this.ctx.fillText("" + exponent, ((_l = (_k = this.rects) === null || _k === void 0 ? void 0 : _k[i]) === null || _l === void 0 ? void 0 : _l[0]) + 6, ((_o = (_m = this.rects) === null || _m === void 0 ? void 0 : _m[i]) === null || _o === void 0 ? void 0 : _o[1]) - 10);
                    break;
                case i > 9 && i <= 12:
                    this.ctx.fillText("" + exponent, ((_q = (_p = this.rects) === null || _p === void 0 ? void 0 : _p[i]) === null || _q === void 0 ? void 0 : _q[0]) + 45, ((_s = (_r = this.rects) === null || _r === void 0 ? void 0 : _r[i]) === null || _s === void 0 ? void 0 : _s[1]) + 25);
                    if (i == 12) {
                        exponent = 0;
                    }
                    break;
                case i > 12 && i <= 15:
                    this.ctx.fillText("" + exponent, ((_u = (_t = this.rects) === null || _t === void 0 ? void 0 : _t[i]) === null || _u === void 0 ? void 0 : _u[0]) - 10, ((_w = (_v = this.rects) === null || _v === void 0 ? void 0 : _v[i]) === null || _w === void 0 ? void 0 : _w[1]) + 25);
                    break;
                case i > 15 && i <= 21:
                    this.ctx.fillText("" + exponent, ((_y = (_x = this.rects) === null || _x === void 0 ? void 0 : _x[i]) === null || _y === void 0 ? void 0 : _y[0]) + 32, ((_0 = (_z = this.rects) === null || _z === void 0 ? void 0 : _z[i]) === null || _0 === void 0 ? void 0 : _0[1]) - 10);
                    break;
                case i > 21 && i <= 25:
                    this.ctx.fillText("" + exponent, ((_2 = (_1 = this.rects) === null || _1 === void 0 ? void 0 : _1[i]) === null || _2 === void 0 ? void 0 : _2[0]) + 15, ((_4 = (_3 = this.rects) === null || _3 === void 0 ? void 0 : _3[i]) === null || _4 === void 0 ? void 0 : _4[1]) + 53);
                    if (i == 25) {
                        exponent = 0;
                    }
                    break;
                case i > 25 && i < 30:
                    this.ctx.fillText("" + exponent, ((_6 = (_5 = this.rects) === null || _5 === void 0 ? void 0 : _5[i]) === null || _6 === void 0 ? void 0 : _6[0]) + 15, ((_8 = (_7 = this.rects) === null || _7 === void 0 ? void 0 : _7[i]) === null || _8 === void 0 ? void 0 : _8[1]) - 10);
                    break;
                case i == 30:
                    this.ctx.fillText("" + exponent, ((_10 = (_9 = this.rects) === null || _9 === void 0 ? void 0 : _9[i]) === null || _10 === void 0 ? void 0 : _10[0]) + 50, ((_12 = (_11 = this.rects) === null || _11 === void 0 ? void 0 : _11[i]) === null || _12 === void 0 ? void 0 : _12[1]) + 25);
                    break;
                case i > 30 && i <= 35:
                    this.ctx.fillText("" + exponent, ((_14 = (_13 = this.rects) === null || _13 === void 0 ? void 0 : _13[i]) === null || _14 === void 0 ? void 0 : _14[0]) + 20, ((_16 = (_15 = this.rects) === null || _15 === void 0 ? void 0 : _15[i]) === null || _16 === void 0 ? void 0 : _16[1]) + 60);
                    break;
                case i > 35 && i <= 38:
                    this.ctx.fillText("" + exponent, ((_18 = (_17 = this.rects) === null || _17 === void 0 ? void 0 : _17[i]) === null || _18 === void 0 ? void 0 : _18[0]) - 20, ((_20 = (_19 = this.rects) === null || _19 === void 0 ? void 0 : _19[i]) === null || _20 === void 0 ? void 0 : _20[1]) + 25);
                    if (i == 38) {
                        exponent = 0;
                    }
                    break;
                case i > 38 && i <= 41:
                    this.ctx.fillText("" + exponent, ((_22 = (_21 = this.rects) === null || _21 === void 0 ? void 0 : _21[i]) === null || _22 === void 0 ? void 0 : _22[0]) + 45, ((_24 = (_23 = this.rects) === null || _23 === void 0 ? void 0 : _23[i]) === null || _24 === void 0 ? void 0 : _24[1]) + 25);
                    break;
                case i > 41 && i < 47:
                    this.ctx.fillText("" + exponent, ((_26 = (_25 = this.rects) === null || _25 === void 0 ? void 0 : _25[i]) === null || _26 === void 0 ? void 0 : _26[0]) + 20, ((_28 = (_27 = this.rects) === null || _27 === void 0 ? void 0 : _27[i]) === null || _28 === void 0 ? void 0 : _28[1]) + 60);
                    break;
                case i == 47:
                    this.ctx.fillText("" + exponent, ((_30 = (_29 = this.rects) === null || _29 === void 0 ? void 0 : _29[i]) === null || _30 === void 0 ? void 0 : _30[0]) - 15, ((_32 = (_31 = this.rects) === null || _31 === void 0 ? void 0 : _31[i]) === null || _32 === void 0 ? void 0 : _32[1]) + 25);
                    break;
                case i > 47:
                    this.ctx.fillText("" + exponent, ((_34 = (_33 = this.rects) === null || _33 === void 0 ? void 0 : _33[i]) === null || _34 === void 0 ? void 0 : _34[0]) + 15, ((_36 = (_35 = this.rects) === null || _35 === void 0 ? void 0 : _35[i]) === null || _36 === void 0 ? void 0 : _36[1]) - 10);
                    break;
                default:
                    break;
            }
            exponent += 1;
        }
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    };
    HTMLEntry.prototype.draw = function () {
        this.ctx.strokeRect(420, 260, 160, 120);
        this.clickOnContext([
            // 1st triangle
            // start positions
            [380, 220, 40, 40],
            [340, 220, 40, 40],
            [300, 220, 40, 40],
            [260, 220, 40, 40],
            [220, 220, 40, 40],
            // middle positions
            [260, 180, 40, 40],
            [300, 140, 40, 40],
            [340, 100, 40, 40],
            [380, 100, 40, 40],
            // end positions 
            [420, 100, 40, 40],
            [420, 140, 40, 40],
            [420, 180, 40, 40],
            [420, 220, 40, 40],
            // 2nd triangle
            // start
            [540, 220, 40, 40],
            [540, 180, 40, 40],
            [540, 140, 40, 40],
            [540, 100, 40, 40],
            // middle
            [580, 100, 40, 40],
            [620, 100, 40, 40],
            [660, 140, 40, 40],
            [700, 180, 40, 40],
            // end
            [740, 220, 40, 40],
            [700, 220, 40, 40],
            [660, 220, 40, 40],
            [620, 220, 40, 40],
            [580, 220, 40, 40],
            // 3rd triangle
            // start
            [580, 380, 40, 40],
            [620, 380, 40, 40],
            [660, 380, 40, 40],
            [700, 380, 40, 40],
            [740, 380, 40, 40],
            // middle
            [700, 420, 40, 40],
            [660, 460, 40, 40],
            [620, 500, 40, 40],
            [580, 500, 40, 40],
            // end
            [540, 500, 40, 40],
            [540, 460, 40, 40],
            [540, 420, 40, 40],
            [540, 380, 40, 40],
            // 4th triangle
            // start
            [420, 380, 40, 40],
            [420, 420, 40, 40],
            [420, 460, 40, 40],
            [420, 500, 40, 40],
            // middle
            [380, 500, 40, 40],
            [340, 500, 40, 40],
            [300, 460, 40, 40],
            [260, 420, 40, 40],
            //end
            [220, 380, 40, 40],
            [260, 380, 40, 40],
            [300, 380, 40, 40],
            [340, 380, 40, 40],
            [380, 380, 40, 40],
        ]);
    };
    HTMLEntry.prototype.resultBoxText = function (additional) {
        this.ctx.strokeRect(900, 40, 300, 550);
        this.ctx.font = "15px Arial";
        this.ctx.fillText("BinaryBox Challenge", 920, 60);
        this.ctx.fillStyle = "green";
        this.ctx.fillText("Number List (1-13 base-2 System):", 920, 80);
        this.ctx.fillText("1: 1        2: 2        3: 4        4: 8", 920, 100);
        this.ctx.fillText("5: 16       6: 32       7: 64      8: 128", 920, 120);
        this.ctx.fillText("9: 256      10: 512     11: 1024    12: 2048", 920, 140);
        this.ctx.fillText("13: 4096 ", 920, 160);
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Value needed to unlock: " + this.inputValue, 920, 200);
        this.ctx.beginPath();
        this.ctx.moveTo(900, 250);
        this.ctx.lineTo(1200, 250);
        this.ctx.stroke();
        this.ctx.fillText("Current Value (Total of 4 results):", 920, 300);
        this.ctx.fillText("" + this.result, 920, 320);
        this.ctx.beginPath();
        this.ctx.moveTo(900, 360);
        this.ctx.lineTo(1200, 360);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(1200, 400);
        this.ctx.stroke();
        this.restoreDefault();
        additional;
    };
    HTMLEntry.prototype.resultBox = function () {
        var _this = this;
        var img = new Image();
        img.onerror = function () {
            alert(img.src + ' failed');
        };
        img.src = "./../images/lock.png";
        img.onload = function () {
            _this.ctx.drawImage(img, 470, 285, 60, 65);
        };
    };
    HTMLEntry.prototype.restoreDefault = function () {
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
    };
    HTMLEntry.prototype.welcomeScreen = function () {
        var _this = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.addEventListener('keydown', function (e) {
            if (e.key === "F2") {
                _this.load();
            }
        });
        this.ctx.strokeRect(900, 40, 300, 550);
        this.ctx.font = '25px Arial';
        this.ctx.fillText("BinaryBox Challenge", 920, 80);
        this.ctx.font = "13px Arial";
        this.ctx.fillText('Press F2 to start', 920, 130);
        this.restoreDefault();
    };
    HTMLEntry.prototype.load = function () {
        this.inputValue = Math.floor(Math.random() * 32764);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.assignBinValues(this.b.length, 13);
        this.label();
        this.resultBox();
        this.restoreDefault();
    };
    return HTMLEntry;
}());
var a = new HTMLEntry(600, 1250);
