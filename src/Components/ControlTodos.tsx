import { useState, FormEvent } from "react";
import useStore from "../useStore";
import { Button, Stack, TextField } from "@mui/material";

const ControlTodos = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addTodo(text, description);
    setText("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          variant="filled"
          value={text}
          label="To-do"
          onChange={(event) => setText(event.target.value)}
        />
        <TextField
          variant="filled"
          value={description}
          label="Describe your task"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button variant="outlined" type="submit">
          Add to-do
        </Button>
      </Stack>
    </form>
  );
};

export default ControlTodos;
