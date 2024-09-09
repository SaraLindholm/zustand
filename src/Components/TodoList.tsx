import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useStore from "../useStore";

const TodoList = () => {
  const { todoList, deleteTodo, completeTodo, removeCompleted } = useStore(
    (state) => {
      return {
        todoList: state.todoList,
        deleteTodo: state.deleteTodo,
        completeTodo: state.completeTodo,
        removeCompleted: state.removeCompleted,
      };
    }
  );

  return (
    <Container>
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <List
          sx={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "550px",
            bgcolor: "background.paper",
          }}
        >
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <ListItem key={todo.id}>
                <Checkbox onChange={() => completeTodo(todo.id)} edge="start" />
                <Typography
                  variant="body1"
                  sx={{
                    marginRight: "20px",
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </Typography>
                {/* <Typography color="error">{todo.id}</Typography> */}

                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <Typography>No todos to display. Please add.</Typography>
          )}
        </List>
        <Button
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => {
            removeCompleted();
          }}
        >
          Remove all completed task
        </Button>
      </Stack>
    </Container>
  );
};

export default TodoList;
