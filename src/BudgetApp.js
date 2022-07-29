import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AddExpenseModal from './addExpenseModal';
import ViewExpenseModal from './viewExpenses';
import AddBudgetModal from './addBudgetModal';
import Budget from './Budgets';
import React from 'react';
import { useState } from 'react';
import { useBudget } from './BudgetContext';

export default function BudgetApp(props) {

const [budgetMshow, setBudgetMShow] = useState(false);
const{budgets} = useBudget()
const[expenseMShow,setExpenseMShow] = useState(false)
const[addExpenseModalBudgetId,setExpenseModalBudgetId]=useState()


function openExpenseModal(budgetId){
    setExpenseMShow(true)
    setExpenseModalBudgetId(budgetId)
}

const {getBudgetExpenses}=useBudget()


  
    return (
        <Container className='my-2 ' >
            <Stack direction="horizontal" gap={3}>
                <h1 className="display-5">Budgets</h1>
                <Button variant="primary" className='ms-auto ' onClick={()=>setBudgetMShow(true)} >Add Budget</Button>
                <AddBudgetModal show={budgetMshow} handleClose={()=>setBudgetMShow(false)}></AddBudgetModal>
                <Button variant="outline-primary" className='' onClick={openExpenseModal} >Add Expense</Button>
                <AddExpenseModal show={expenseMShow} handleClose={()=>setExpenseMShow(false)} defaultBudgetId={addExpenseModalBudgetId}></AddExpenseModal>
            </Stack>
            <hr></hr>
            <Stack gap={3}>
                {budgets.map(budget =>
                
                {
                    const expenses=getBudgetExpenses(budget.id)
                    console.log(`the expenses for ${budget.name} are`)
                    console.log(expenses)
                    const amount = getBudgetExpenses(budget.id).reduce((total,expense)=>total+expense.amount ,0)   
                    // console.log(amount)
                return (
                <Budget 

                key={budget.id} 
                name={budget.name} 
                amount={amount}
                max={budget.max} 
                onAddExpenseClick={()=>openExpenseModal(budget.id)}>

                </Budget>
                
                )}
                
                )}
                




                <Card bg='dark' text='white' className='
                      mx-1' >
                    <Card.Body >
                        <Card.Title >Total</Card.Title>
                        <ProgressBar className='my-2' variant='primary' now={30} label={`${30}%`} />
                    </Card.Body>
                </Card>

            </Stack>


        </Container>
    );

}