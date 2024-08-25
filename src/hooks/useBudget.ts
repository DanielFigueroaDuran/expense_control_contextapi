import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";


const useBudget = () => {
      const context = useContext(BudgetContext);

      if (!context) {
            throw new Error('useBudget must be used within a BudgetProvider')
      }
      return context;
}

export default useBudget