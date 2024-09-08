import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import useStore from "../useStore";

const TodoList = () => {
  const { todoList, deleteTodo, completeTodo } = useStore((state) => {
    return {
      todoList: state.todoList,
      deleteTodo: state.deleteTodo,
      completeTodo: state.completeTodo,
    };
  });

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
          {todoList.map((todo) => (
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
              <Typography color="error">{todo.id}</Typography>
              <Button
                size="small"
                variant="outlined"
                onChange={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default TodoList;