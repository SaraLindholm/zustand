import {
  Box,
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
    <Container sx={{ marginTop: "20px", bgcolor: "pink" }}>
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <List
          sx={{
            // listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            // maxWidth: "550px",
            bgcolor: "background.paper",
          }}
        >
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <ListItem sx={{ minWidth: "350px" }} key={todo.id}>
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
            <Box sx={{ padding: "10px" }}>
              <Typography>No todos to display. Please add.</Typography>
            </Box>
          )}
        </List>
        <Button
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => {
            removeCompleted();
          }}
          // disabled={!!todo.completed}
        >
          Remove all completed task
        </Button>
      </Stack>
    </Container>
  );
};

export default TodoList;
