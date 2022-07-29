import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useBudget } from './BudgetContext';
import { useRef } from 'react';


export default function AddBudgetModal({show,handleClose}) {
    const {addBudget}=useBudget()
    const nameRef=useRef()
    const maxRef =useRef()

    function handleSubmit(e)
    {
        e.preventDefault()
        addBudget({
                name:nameRef.current.value,
                max: parseFloat(maxRef.current.value)
        })
        handleClose()
    }
    return (
        <Modal
        show={show} onHide={handleClose}
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
             <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Budget
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} placeholder="" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMaxSpent">
                        <Form.Label>Max</Form.Label>
                        <Form.Control type="number" ref={maxRef} placeholder="" required min={0} step={0.01} />
                    </Form.Group>

                    
                    
                

            </Modal.Body>
            <Modal.Footer>
                <Button type="submit">Add</Button>
            </Modal.Footer>
            </Form>
        </Modal>
    );
}

