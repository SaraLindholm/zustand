import { Box, List, ListItem, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import useStore from "../useStore";
import React from "react";

const DisplayTodo = () => {
  const { todoList, deleteTodo, completeTodo} = useStore(
    (state) => ({
      todoList: state.todoList,
      deleteTodo: state.deleteTodo,
      completeTodo: state.completeTodo,
      // upDateDescription: state.upDateDescription,
    })
  );

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
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
              {/* <TextField
                value={todo.description}
                size="small"
                onChange={(e) =>
                  upDateDescription(todo.id, e.currentTarget.value)
                }
              /> */}
              <Typography
                variant="body2"
                sx={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.description}
              </Typography>
              {/* <IconButton aria-label="edit">
                <EditNoteIcon />
              </IconButton> */}
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
  );
};

export default DisplayTodo;
