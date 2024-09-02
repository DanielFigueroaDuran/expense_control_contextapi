import { categories } from "../data/categories"

const FilterByCategory = () => {
      return (
            <div className="bg-white shadow-lg rounded-lg p-10">
                  <form>
                        <div className="flex flex-col md:flex-row md:items-center gap-5">
                              <label htmlFor="category">Filtrar Gastos</label>
                              <select
                                    className="bg-slate-100 flex-1 p-3 rounded"
                                    id="category"
                              >
                                    <option value="">--Todas las Categorias</option>
                                    {categories.map((category) => (
                                          <option
                                                key={category.id}
                                                value={category.id}
                                          >{category.name}</option>
                                    ))}
                              </select>
                        </div>
                  </form>
            </div>
      )
}

export default FilterByCategory