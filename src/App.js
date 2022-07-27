import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AddExpenseModal from './addExpenseModal';
import ViewExpenseModal from './viewExpenses';
import AddBudgetModal from './addBudgetModal';
import React from 'react';

function App() {

  const [addExpenseModalShow, setAddExpenseModalShow] = React.useState(false);
  const [viewExpenseModalShow, setViewExpenseModalShow] = React.useState(false);
  const [addBudgetModalShow, setAddBudgetModalShow] = React.useState(false);



  return (
    <div className="App">
      <Container className='my-2 ' >
        <Stack direction="horizontal" gap={3}>
          <h1 className="display-5">Budgets</h1>
          <Button variant="primary" className='ms-auto ' onClick={() => setAddBudgetModalShow(true)}>Add Budget</Button>
          <Button variant="outline-primary" className=''onClick={() => setAddExpenseModalShow(true)} >Add Expense</Button>
        </Stack>
        <hr></hr>
        <Stack gap={3}>
          <Card className='
                      mx-1' >
            <Card.Body >
              <Card.Title >Utilities</Card.Title>
              <ProgressBar className='my-2' variant='info' now={60} label={`${60}%`} />
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary" onClick={() => setAddExpenseModalShow(true)} className='ms-auto' >Add Expense</Button>
                <Button variant="outline-primary"  onClick={() => setViewExpenseModalShow(true)} >View Expense</Button>
              </Stack>

            </Card.Body>
          </Card>
          <AddExpenseModal
            show={addExpenseModalShow}
            onHide={() => setAddExpenseModalShow(false)}
          />
          <ViewExpenseModal
            show={viewExpenseModalShow}
            onHide={() => setViewExpenseModalShow(false)}
          />
          <AddBudgetModal
            show={addBudgetModalShow}
            onHide={() => setAddBudgetModalShow(false)}
          />
          <Card className='
                      mx-1' >
            <Card.Body >
              <Card.Title >Food</Card.Title>
              <ProgressBar className='my-2' variant='info' now={10} label={`${10}%`} />
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary" className='ms-auto' >Add Expense</Button>
                <Button variant="outline-primary"  >View Expense</Button>
              </Stack>

            </Card.Body>
          </Card>
          <Card bg='light'  className='
                      mx-1' >
            <Card.Body  >
              <Card.Title >Uncategorized</Card.Title>
              <ProgressBar className='my-2' variant='info' now={90} label={`${90}%`} />
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary" className='ms-auto' >Add Expense</Button>
                <Button variant="outline-primary"  >View Expense</Button>
              </Stack>

            </Card.Body>
          </Card>
          <Card bg='dark' text='white' className='
                      mx-1' >
            <Card.Body >
              <Card.Title >Total</Card.Title>
              <ProgressBar className='my-2' variant='primary' now={90} label={`${90}%`} />
            </Card.Body>
          </Card>

        </Stack>


      </Container>


    </div>
  );
}

export default App;
