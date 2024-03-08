import Counter from "./Counter";
import { CountProvider } from "./context/CountContext";

function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}

export default App;
