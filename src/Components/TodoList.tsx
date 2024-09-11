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
import React from "react";

const TodoList = () => {
  const {
    todoList,
    deleteTodo,
    completeTodo,
    removeCompleted,
    setAllToCompleted,
  } = useStore((state) => {
    return {
      todoList: state.todoList,
      deleteTodo: state.deleteTodo,
      completeTodo: state.completeTodo,
      removeCompleted: state.removeCompleted,
      setAllToCompleted: state.setAllToCompleted,
    };
  });
  const canCompleteAnyTasks = todoList.length > 0 && todoList.some((item) => (!item.completed))

  return (
    <Container sx={{ marginTop: "20px" }}>
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
            todoList.map((todo) => {
              const handleCheckedChange = (
                _: React.ChangeEvent<HTMLInputElement>,
                checked: boolean
              ) => {
                completeTodo(todo.id);
              };
              return (
                <ListItem sx={{ minWidth: "350px" }} key={todo.id}>
                  <Checkbox
                    onChange={handleCheckedChange}
                    edge="start"
                    checked={todo.completed}
                  />
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
              );
            })
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
        <Button
          disabled={!canCompleteAnyTasks}
          variant="outlined"
          onClick={() => {
            setAllToCompleted();
          }}
        >
          Mark all Todo as Completed
        </Button>
      </Stack>
    </Container>
  );
};

export default TodoList;
