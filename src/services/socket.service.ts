const socket = new WebSocket("ws://localhost:3000");

export const socketService = {
  socket,
  sendCartSale: (type: number, quantity: number, totalPrice: number) => {
    socket.send(
      JSON.stringify({
        event: "webapp:message",
        data: {
          t: type,
          q: quantity,
          m: totalPrice,
        },
      })
    );
  },

  sendJson: <T>(event: string, data: T) => {
    socket.send(
      JSON.stringify({
        event,
        data,
      })
    );
  },

  // Add connection listeners
  initialize: () => {
    socket.onopen = () => {
      console.log("Connected to server");
    };

    socket.onerror = (error) => {
      console.error("Connection error:", error);
    };

    socket.onmessage = (message) => {
      try {
        const parsedMessage = JSON.parse(message.data.toString());
        console.log("Received message from server:", parsedMessage);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };
  },
};

export default socketService;
socketService.initialize();
