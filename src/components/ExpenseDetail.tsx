import { useMemo } from "react"
import {
      LeadingActions,
      SwipeableList,
      SwipeableListItem,
      SwipeAction,
      TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import useBudget from "../hooks/useBudget";

type ExpenseDetailProps = {
      expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

      const { dispatch } = useBudget();

      const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0],
            [expense]);

      const leadingActions = () => (
            <LeadingActions>
                  <SwipeAction onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}>
                        Actualizar
                  </SwipeAction>
            </LeadingActions>
      );

      const trailingActions = () => (
            <TrailingActions>
                  <SwipeAction
                        destructive={true}
                        onClick={() => { dispatch({ type: 'remove-expense', payload: { id: expense.id } }) }}
                  >
                        Eliminar
                  </SwipeAction>
            </TrailingActions>
      );

      return (

            <SwipeableList>
                  <SwipeableListItem
                        maxSwipe={1}
                        leadingActions={leadingActions()}
                        trailingActions={trailingActions()}
                  >
                        <div className="bg-white shadow-lg p-5 w-full border-b border-gray-200 ">
                              <div className="flex flex-wrap sm:text-sm sm:justify-center sm:items-center  justify-between items-center  gap-4">
                                    <img
                                          className="w-20"
                                          src={`/icono_${categoryInfo.icon}.svg`}
                                          alt="icon"
                                    />

                                    <div className="flex-1 space-y-2">
                                          <p className="text-sm font-bold uppercase text slate-500">{categoryInfo.name}</p>
                                          <p>{expense.expenseName}</p>
                                          <p>{formatDate(expense.date!.toString())}</p>
                                    </div>
                                    <AmountDisplay
                                          amount={+expense.amount}
                                    />
                              </div>
                        </div>
                  </SwipeableListItem>
            </SwipeableList>

      )
}

export default ExpenseDetail