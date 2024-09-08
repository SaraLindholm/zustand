import { useState, FormEvent } from "react";
import useStore from "../useStore";
import { Button, Stack, TextField } from "@mui/material";

const ControlTodos = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("Beskriv uppgiften");

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
          variant="outlined"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Add to-do
        </Button>
      </Stack>
    </form>
  );
};

export default ControlTodos;
