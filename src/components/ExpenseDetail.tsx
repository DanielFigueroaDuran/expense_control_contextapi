import { Expense } from "../types"

type ExpenseDetailProps = {
      expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
      console.log(expense.expenseName)
      return (
            <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 ">
                  <div className="">

                  </div>

                  <div className="">
                        {expense.expenseName}
                  </div>
            </div>
      )
}

export default ExpenseDetail