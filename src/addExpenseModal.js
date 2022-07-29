import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useBudget ,UNCATEGORIZED_BUDGET_ID} from './BudgetContext';
import { useRef } from 'react';
export default function AddExpenseModal({show,handleClose,defaultBudgetId}) {
    const {addExpense,budgets}=useBudget()

    const descriptionRef=useRef()
    const amountRef=useRef()
    const budgetIdref=useRef()

    function handleSubmit(e){
        e.preventDefault()
        addExpense({
            description:descriptionRef.current.value,
            amount:parseFloat(amountRef.current.value),
            budgetId:budgetIdref.current.value
        
        })

        handleClose()
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Expense
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" ref={descriptionRef} placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" ref={amountRef} placeholder="Rs." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBudget">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select 
                        defaultValue={defaultBudgetId}
                        ref={budgetIdref}
                        >
                            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                                {budgets.map(budget=>{
                                  return   <option key={budget.id} value={budget.id}>{budget.name} </option>
                                })}
                        </Form.Select>
                    </Form.Group>
                    
                

            </Modal.Body>
            <Modal.Footer>
                <Button type ="submit">Add</Button>

            </Modal.Footer>
            </Form>
        </Modal>
    );
}

