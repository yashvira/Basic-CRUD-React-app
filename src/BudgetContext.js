import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const BudgetContext = createContext()

export const UNCATEGORIZED_BUDGET_ID= "Uncategorized"

export function useBudget(){
    return useContext(BudgetContext)
}

export const BudgetProvider= ({children})=>{
    const [budgets,setBudgets] = useLocalStorage("budgets",[])
    const [expenses,setExpenses]= useLocalStorage("expenses",[])

    function addBudget({name,max}){
        setBudgets(prevBudgets=>{
            if (prevBudgets.find(budget=>budget.name===name)){
                return prevBudgets
            }
            return [...prevBudgets,{id:uuidv4() ,name,max}]
        }
            
        )

    }
    function addExpense({budgetId,description,amount}){
        setExpenses(
            prevExpenses=>{
                return [...prevExpenses,{id:uuidv4() ,budgetId,description,amount}]
            }
        )
    }

    function getBudgetExpenses(budgetId){
       return  expenses.filter(expense=>expense.budgetId===budgetId)
    }

    function deleteBudget({budgetId}){
        setBudgets(
            prevBudgets=>prevBudgets.filter(budget=>budget.id!==budgetId)
        )
    }

    function deleteExpense({expenseId}){
        setExpenses(
            prevExpenses=>prevExpenses.filter(expense=>expense.id!==expenseId)
        )
    }
    return (
    <BudgetContext.Provider value={{
        budgets,
        expenses,
        addBudget,
        addExpense,
        getBudgetExpenses,
        deleteBudget,
        deleteExpense

    }
    }>
        {children}
    </BudgetContext.Provider>
    )
}