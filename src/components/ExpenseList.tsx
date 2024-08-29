import { useMemo } from "react";
import useBudget from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {

      const { state } = useBudget();

      const isEmty = useMemo(() => state.expenses.length === 0, [state.expenses]);
      //console.log(state)
      return (
            <div className="mt-10">
                  {isEmty
                        ? <p className="text-gray-600 text-2xl font-bold">
                              No Hay Gasto
                        </p>
                        : <>
                              <p className="text-gray-600 text-2xl font-bold my-5">
                                    Listado de Gasto
                              </p>
                              {state.expenses.map(expense => (
                                    <ExpenseDetail
                                          key={expense.id}
                                          expense={expense}
                                    />
                              ))}
                        </>
                  }
            </div>
      )
}

export default ExpenseList