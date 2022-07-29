import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';
// import ViewExpenseModal from './viewExpenses';
import React from 'react';

export default function Budget(props){

    const[viewExpense,setViewExpense]=React.useState(false)

    function getpercentage(){
        return (props.amount/props.max*100).toFixed(0)
    }

    

    function handleClose(){
        setViewExpense(false)
    }
    

    return (
        <Card className='
                      mx-1' >
                    <Card.Body >
                        <Card.Title >{props.name}</Card.Title>
                        <ProgressBar className='my-2' variant='info' now={getpercentage()} label={`${getpercentage()}%`} />
                        <Stack direction="horizontal" gap={3}>
                            <Button variant="primary"  className='ms-auto' onClick={props.onAddExpenseClick} >Add Expense</Button>
                            <Button variant="outline-primary" onClick={()=>setViewExpense(true)} >View Expense</Button>
                            {/* <ViewExpenseModal  show={viewExpense} onHide={handleClose} expenses={expenses.filter(expense=>expense.category===props.name)}></ViewExpenseModal> */}
                        </Stack>

                    </Card.Body>
                </Card>
    )
}