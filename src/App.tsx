import socketService from "./services/socket.service";
import { Button } from "./shared/ui/Button";

function App() {
  const handleOnCashIn = (amount: number) => {
    console.log("Cash in:", amount);
    socketService.sendJson("webapp:message", { type: "cash_in", amount });
  };

  const onCardPayment = () => {
    console.log("Card payment initiated");
    socketService.sendJson("webapp:message", { type: "card_payment" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center space-y-4">
        <span className="text-2xl">Ingreso dinero</span>
        <div className="flex space-x-4 text-4xl">
          <Button variant="primary" value={1} onClick={handleOnCashIn} />
          <Button variant="primary" value={5} onClick={handleOnCashIn} />
          <Button variant="primary" value={10} onClick={handleOnCashIn} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <span className="text-2xl">Pago con tarjeta</span>
        <Button variant="primary" onClick={onCardPayment}>
          Pagar con tarjeta
        </Button>
        <div className="flex space-x-4"></div>
        <Button
          variant="secondary"
          onClick={() =>
            socketService.sendJson("webapp:message", {
              type: "card_payment_success",
            })
          }
        >
          Simular pago exitoso
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            socketService.sendJson("webapp:message", {
              type: "card_payment_error",
            })
          }
        >
          Simular pago fallido
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <span className="text-2xl">Simulación de carros</span>
        <Button
          variant="secondary"
          onClick={() =>
            socketService.sendJson("webapp:message", {
              type: "cart_retrieved",
            })
          }
        >
          Retirar COCHE
        </Button>
      </div>
    </div>
  );
}

export default App;
