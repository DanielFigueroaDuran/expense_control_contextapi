import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react"
import { BudgetActions, budgetReducer, Budgetstate, initialState } from "../reducer/budget-reducer"

type BudgetContextProps = {
      state: Budgetstate,
      dispatch: Dispatch<BudgetActions>
      totalExpenses: number,
      remainingBudget: number
}

type BudgetProviderProps = {
      children: ReactNode,
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

const BudgetProvider = ({ children }: BudgetProviderProps) => {

      const [state, dispatch] = useReducer(budgetReducer, initialState);


      const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses]);

      const remainingBudget = state.budget - totalExpenses;

      return (
            <BudgetContext.Provider
                  value={{
                        state,
                        dispatch,
                        totalExpenses,
                        remainingBudget
                  }}
            >
                  {children}
            </BudgetContext.Provider>
      )
}

export default BudgetProvider