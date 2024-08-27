import { categories } from "../data/categories"

const ExpenseForm = () => {
      return (
            <form className="space-y-5">
                  <legend
                        className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 rounded-sm"
                  >
                        Nuevo Gasto
                  </legend>
                  <div className="flex flex-col gap-2">
                        <label
                              htmlFor="expenseName"
                              className="text-xl"
                        >
                              Nombre Gasto:
                        </label>
                        <input
                              className="bg-slate-100 p-2"
                              type="text"
                              id="expenseName"
                              placeholder="Añade el Nombre del Gasto"
                              name="expenseName"
                        />
                  </div>

                  <div className="flex flex-col gap-2">
                        <label
                              htmlFor="amount"
                              className="text-xl"
                        >
                              Cantidad:
                        </label>
                        <input
                              className="bg-slate-100 p-2"
                              type="number"
                              id="amount"
                              placeholder="Añade la cantidad del Gasto: Ej. 300"
                              name="amount"
                        />
                  </div>

                  <div className="flex flex-col gap-2">
                        <label
                              htmlFor="category"
                              className="text-xl"
                        >
                              Categorias:
                        </label>
                        <select
                              className="bg-slate-100 p-2"
                              id="category"
                              name="category"
                        >
                              <option value="">--Seleccione--</option>
                              {categories.map(category => (
                                    <option
                                          key={category.id}
                                          value={category.id}>
                                          {category.name}
                                    </option>
                              ))}
                        </select>
                  </div>

                  <input
                        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg "
                        type="submit"
                        value={'REgistrar Gasto'}
                  />
            </form>
      )
}

export default ExpenseForm