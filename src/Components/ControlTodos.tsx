import { useState, FormEvent } from "react";
import useStore from "../useStore";
import { Box, Button, TextField, Typography } from "@mui/material";

const ControlTodos = () => {
  // const TodoList = useStore((state) => state.todoList);
  const getTotalTime = useStore((state) => state.getTotalTime);
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (text === "") {
      setError(true);
      return;
    }

    addTodo(text, description, time);
    setText("");
    setDescription("");
    setTime(0);
    setError(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            sx={{ marginRight: 1 }}
            error={error && text === ""}
            variant="outlined"
            value={text}
            label="Uppgiften"
            onChange={(event) => setText(event.target.value)}
            helperText={error && text === "" ? "Lämna inte fältet tomt" : ""}
          />
          <TextField
            sx={{ marginRight: 1 }}
            error={error && description === ""}
            variant="outlined"
            value={description}
            label="ev. detaljer"
            onChange={(event) => setDescription(event.target.value)}
            helperText={error && description === "" ? "ev. detaljer" : ""}
          />
          <TextField
            sx={{ marginRight: 1 }}
            type="number"
            variant="outlined"
            value={time}
            label="Tids-estimering i minuter"
            placeholder="i minuter"
            onChange={(event) => setTime(parseInt(event.target.value))}
          />
          <Button variant="outlined" type="submit">
            Lägg till uppgift
          </Button>
        </Box>
      </form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          margin: 1,
          border: 1,
        }}
      >
        <Typography variant="body1">
          Estimerad tid för alla uppgifter: {getTotalTime()} Minuter
        </Typography>
      </Box>
    </>
  );
};

export default ControlTodos;
