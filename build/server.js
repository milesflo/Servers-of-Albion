"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var app = express_1.default();
app.set("port", process.env.PORT || 3001);
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.get("/", function (req, res) {
    res.sendFile(path.resolve("./client/index.html"));
});
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("message", function (message) {
        console.log(message);
    });
});
var server = http.listen(3001, function () {
    console.log("listening on *:3001");
});
//# sourceMappingURL=server.js.map