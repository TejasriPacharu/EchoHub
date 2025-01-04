const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const crypto = require("crypto");
const uuidv4 = () => crypto.randomUUID();

console.log(uuidv4());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

server.listen(3030);
console.log("Listening from 3030");
