import express from "express";

const app = express();
app.set("port", process.env.PORT || 3001);

let http = require("http").Server(app);
let io = require("socket.io")(http);

// Replace this NoSQL inmemory data structure with db
const HackyDB = {
  servers: {}
};

app.get("/", (req: any, res: any) => {
  res.send({data: "test"});
});

const EventMap: { [key:string]:any; } = {
  "message": function(message: SocketIO.Packet) {
    console.log(message);
  }
};

io.on("connection", function(socket: SocketIO.Socket) {
  for (const event in EventMap) {
    socket.on(event, EventMap[event])
  }
});

const server = http.listen(3001, function() {
  console.log("listening on *:3001");
});