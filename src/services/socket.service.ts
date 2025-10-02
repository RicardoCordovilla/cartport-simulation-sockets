import { io } from "socket.io-client";

const socket = io("http://192.168.100.191:3000", {
  transports: ["websocket"],
  autoConnect: true,
});

export const socketService = {
  socket,
  sendCartSale: (type: number, quantity: number, totalPrice: number) => {
    socket.emit("webapp:message", {
      t: type,
      q: quantity,
      m: totalPrice,
    });
  },

  sendJson: <T>(event: string, data: T) => {
    socket.emit(event, data);
  },

  // Add connection listeners
  initialize: () => {
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    socket.on("webapp:message", (data) => {
      console.log("Received message from server:", data);
    });
  },
};

export default socketService;
socketService.initialize();
