import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";

const App = () => {
  const [value, setValue] = React.useState("");
  const [tasks, setTasks] = React.useState(["Learn Javascript", "Learn React"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addToDoList(value);
    setValue("");
  };
  const addToDoList = (newTask) => {
    if (newTask) {
      console.log(newTask);
      const updatedTodoList = [...tasks, newTask];
      console.log(updatedTodoList);
      setTasks(updatedTodoList);
    }
  };

  const handleDelete = (taskIndex) => {
    console.log("deleted");
    const updateTaskList = tasks.filter(
      (task, index) => (task, index) !== taskIndex
    );
    console.log(updateTaskList);
    setTasks(updateTaskList);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-danger">React Todo-App</h2>
      <hr color="danger" />
      <Form className="text-center" onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              placeholder="e.x Learn React"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="info">Add to Todo's</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>{" "}
      </Form>

      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroupItem
            color="success"
            key={index}
            className="d-flex justify-content-between"
          >
            <Badge className="p-3 info">
              <span>{task}</span>
            </Badge>
            <div>
              <Button
                color="danger"
                onClick={() => handleDelete(index)}
                className="ml-1"
              >
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;
