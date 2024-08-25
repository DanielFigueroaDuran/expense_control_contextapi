import { ChangeEvent, useState } from "react"


type Props = {}

const BudgetForm = (props: Props) => {

      const [budget, setBudget] = useState(0);

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setBudget(+event.target.value);
      }

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
                        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
                        type="submit"
                        value="Definir Presupuesto"
                  />
            </form>
      )
}

export default BudgetForm