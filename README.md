
## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## WebSocket Communication

This project uses WebSocket for real-time communication with a server. The WebSocket service is implemented in `src/services/socket.service.ts` and provides the following functionalities:

### Initialization
- Establishes a WebSocket connection.
- Sets up event listeners for:
  - `onopen`: Logs successful connection.
  - `onerror`: Logs connection errors.
  - `onmessage`: Logs and parses incoming messages.

### Commands Sent
1. **Cash In**:
   - Event: `webapp:message`
   - Payload: `{ type: "cash_in", amount: <number> }`
2. **Card Payment**:
   - Initiate Payment: `{ type: "card_payment" }`
   - Simulate Success: `{ type: "card_payment_success" }`
   - Simulate Failure: `{ type: "card_payment_error" }`
3. **Cart Simulation**:
   - Event: `webapp:message`
   - Payload: `{ type: "cart_retrieved" }`
4. **Cart Sale**:
   - Event: `webapp:message`
   - Payload: `{ t: <type>, q: <quantity>, m: <totalPrice> }`

### Commands Expected
- The WebSocket service listens for messages from the server and logs them. The exact commands expected from the server are not explicitly defined in the code.