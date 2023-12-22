import http from "http";
import { Server } from "socket.io";
import cors from "cors";
const PORT: number = 8000;

const httpServer = http.createServer();

const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User connected, id: ${socket.id}`);
	socket.on("test", () => {
		console.log("Testing the socket");
	});
});

httpServer.listen(PORT, () => {
	console.log(`Socket.io server is running on port ${PORT}`);
});
