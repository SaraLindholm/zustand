import { Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useStore from "../useStore";
import DisplayTodo from "./DisplayTodo";

const TodoListContainer = () => {
  const { todoList, removeCompleted, setAllToCompleted } = useStore((state) => {
    return {
      todoList: state.todoList,
      deleteTodo: state.deleteTodo,
      completeTodo: state.completeTodo,
      removeCompleted: state.removeCompleted,
      setAllToCompleted: state.setAllToCompleted,
    };
  });
  const canCompleteAnyTasks =
    todoList.length > 0 && todoList.some((item) => !item.completed);

  const canRemoveCompletedTask =
    todoList.length > 0 && todoList.some((item) => item.completed);

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Stack
        // direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <DisplayTodo />
        <Button
          disabled={!canRemoveCompletedTask}
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => {
            removeCompleted();
          }}
        >
          <Typography>Ta bort avslutade uppgifter</Typography>
        </Button>
        <Button
          disabled={!canCompleteAnyTasks}
          variant="outlined"
          onClick={() => {
            setAllToCompleted();
          }}
        >
          <Typography>Markera samtliga uppgifter som avklarade</Typography>
        </Button>
      </Stack>
    </Container>
  );
};
export default TodoListContainer;
