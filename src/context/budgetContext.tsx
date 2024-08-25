import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { BudgetActions, budgetReducer, Budgetstate, initialState } from "../reducer/budget-reducer"

type BudgetContextProps = {
      state: Budgetstate,
      dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
      children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

const BudgetProvider = ({ children }: BudgetProviderProps) => {

      const [state, dispatch] = useReducer(budgetReducer, initialState);

      return (
            <BudgetContext.Provider
                  value={{
                        state,
                        dispatch
                  }}
            >
                  {children}
            </BudgetContext.Provider>
      )
}

export default BudgetProvider