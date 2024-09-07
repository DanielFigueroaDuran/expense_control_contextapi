export type Expense = {
      id: string,
      expenseName: string,
      amount: number | '',
      category: string,
      date: Value
}

export type DrafExpense = Omit<Expense, 'id'> // con este código le decimos que no queremos el id


type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
      id: string,
      name: string,
      icon: string
}