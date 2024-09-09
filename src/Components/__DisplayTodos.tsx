import {
  Button,
  Card,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import useStore from "../useStore";

const DisplayTodos = () => {
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
            alignItems: "center",
            width: "100%",
          }}
        >
          {todoList.map((todo) => (
            <ListItem key={todo.id}>
              <Card
                variant="outlined"
                sx={{
                  padding: 2,
                  width: "300px",
                  justifyItems: "center",
                  backgroundColor: "#95e5b4",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </Typography>
                <Typography variant="body2">{todo.description}</Typography>
                <p>
                  <Typography variant="caption">{todo.id}</Typography>
                </p>
                <p>
                  <Button
                    sx={{ marginRight: 15 }}
                    size="small"
                    variant="outlined"
                    onChange={() => completeTodo(todo.id)}
                  >
                    Done
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onChange={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </p>
              </Card>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default DisplayTodos;
