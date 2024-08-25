export type BudgetActions =
      { type: 'add-budget', payload: { budget: number } }

export type Budgetstate = {
      budget: number
}

export const initialState: Budgetstate = {
      budget: 0
}

export const budgetReducer = (
      state: Budgetstate = initialState,
      action: BudgetActions
) => {

      if (action.type === 'add-budget') {

            return {
                  ...state,
                  budget: action.payload.budget
            }
      }

      return state
}
