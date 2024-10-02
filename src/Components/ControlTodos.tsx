import { useState, FormEvent } from "react";
import useStore from "../useStore";
import { Box, Button, Stack, TextField } from "@mui/material";

const ControlTodos = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (text === "" || description === "") {
      setError(true);
      // } else {
      //   setError(false);
      return;
    }

    addTodo(text, description);
    setText("");
    setDescription("");
    setError(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box component="form" sx={{ width: "450px" }}>
        <TextField
          error={error && text === ""}
          variant="outlined"
          value={text}
          label="To-do"
          onChange={(event) => setText(event.target.value)}
          helperText={error && text === "" ? "Lämna inte fältet tomt" : ""}
        />
        <TextField
          error={error && description === ""}
          variant="outlined"
          value={description}
          label="Describe your task"
          onChange={(event) => setDescription(event.target.value)}
          helperText={error && description === "" ? "Beskriv uppgiften" : ""}
        />
        <Button variant="outlined" type="submit">
          Add to-do
        </Button>
      </Box>
    </form>
  );
};

export default ControlTodos;
