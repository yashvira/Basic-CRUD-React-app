import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

import Expense from './Expense';

export default function ViewExpenseModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Expenses-
                </Modal.Title>
                <Button variant ='danger'className='ms-auto'>Delete</Button>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    
                        {props.expenses.map(expense=> <Expense key ={expense.id} name={expense.description} amount={expense.amount}></Expense>)}
                        
                </ListGroup>

            </Modal.Body>
            
        </Modal>
    );
}

