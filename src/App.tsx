import socketService from "./services/socket.service";
import { Button } from "./shared/ui/Button";

function App() {
  const handleOnCashIn = (amount: number) => {
    console.log("Cash in:", amount);
    socketService.sendJson("webapp:message", { type: "cash_in", amount });
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
    </div>
  );
}

export default App;
