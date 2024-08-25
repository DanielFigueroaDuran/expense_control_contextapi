import { ChangeEvent, Dispatch, useMemo, useState } from "react"
import { BudgetActions } from "../reducer/budget-reducer";


type BudgetFormProps = {
      dispatch: Dispatch<BudgetActions>
}

const BudgetForm = ({ dispatch }: BudgetFormProps) => {

      const [budget, setBudget] = useState(0);

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setBudget(+event.target.value);
      }

      const isValid = useMemo(() => {
            return isNaN(budget) || budget <= 0
      }, [budget])

      return (
            <form className="space-y-5">
                  <div className="flex flex-col space-y-5">
                        <label
                              htmlFor="budget"
                              className="text-4xl text-blue-600 font-bold text-center"
                        >
                              Definir Presupuesto
                        </label>

                        <input
                              className="w-full bg-white border border-gray-200 p-2"
                              id="budgetId"
                              type="number"
                              name="budget"
                              placeholder="Define tu presupuesto"
                              value={budget}
                              onChange={handleChange}
                        />
                  </div>

                  <input
                        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                        type="submit"
                        value="Definir Presupuesto"
                        disabled={isValid}

                  />
            </form>
      )
}

export default BudgetForm