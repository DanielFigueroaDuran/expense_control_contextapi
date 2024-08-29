import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
      expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
      //console.log(expense.expenseName)
      return (
            <div className="flex gap-5 items-center bg-white shadow-lg p-10 w-full border-b border-gray-200 ">
                  <div className="">

                  </div>

                  <div className="">
                        <p>{expense.expenseName}</p>
                        <p>{formatDate(expense.date!.toString())}</p>
                  </div>
                  <AmountDisplay
                        amount={expense.amount}
                  />
            </div>
      )
}

export default ExpenseDetail