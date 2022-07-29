import BudgetApp from "./BudgetApp";
import { BudgetProvider } from "./BudgetContext";


function App() {


  return (
    <div className="App">
      <BudgetProvider>
        <BudgetApp></BudgetApp>
      </BudgetProvider>

    </div>
  );
}

export default App;
