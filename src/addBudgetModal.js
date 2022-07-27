import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddBudgetModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Budget
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMaxSpent">
                        <Form.Label>Maximum spend</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    
                    
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button >Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

