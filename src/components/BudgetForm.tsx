import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import useBudget from "../hooks/useBudget";

const BudgetForm = () => {

      const [budget, setBudget] = useState<number | ''>(0);
      const { dispatch } = useBudget();

      //console.log(budget)

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

            let newValue = event.target.value;

            if (newValue === '') {
                  setBudget('')
            } else {
                  setBudget(+newValue);
            }
      }

      const isValid = useMemo(() => {
            return +budget <= 0
      }, [budget])

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch({ type: 'add-budget', payload: { budget } });
      }

      return (
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                              onFocus={() => budget === 0 && setBudget('')} // Remove 0 when doing Focus
                              onBlur={() => budget === '' && setBudget(0)} // Reset to 0 if empty
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