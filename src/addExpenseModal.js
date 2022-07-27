import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddExpenseModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Expense
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Rs." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBudget">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select aria-label="">
                            
                            <option value="1">Utilities</option>
                            <option value="2">Food</option>
                            <option value="3">Rent</option>
                        </Form.Select>
                    </Form.Group>
                    
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button >Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

