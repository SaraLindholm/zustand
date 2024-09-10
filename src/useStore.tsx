import { create } from "zustand";

//interface för Todo-objekten
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  description?: string;
  //state active/completed /deleted
}

//interfacae för.. funktionen/state?Zustand
interface Props {
  todoList: Todo[];
  addTodo: (text: string, description?: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  removeCompleted(): void;
  setAllToCompleted(): void;
  // displayDeletedTodo (): void;
}
const useStore = create<Props>((set) => ({
  todoList: [],

  //skapar nya todos i den (från start) tomma arrayen. kollar i state så att tidigare todos följer med och inte overridas.
  addTodo: (text: string, description?: string) =>
    set((state) => ({
      todoList: [
        ...state.todoList,
        {
          id: Date.now(),
          text,
          description,
          completed: false,
        },
      ],
    })),

  // upDateDescription: (event) {
  //   todoList.description= event.target.value; }

  //mapar igenom samtliga todos och tar ID som argument.  Setfunktionen tar de spefika värdet i state (specifikt id) som argument och returernar sedan ett nytt state. state.todoList  är den aktuella listan som  mappas ut. En spred görs för att komma åt det specfika värdet. ("!" ändrar värdet i todo.complete från false till true.) om värdet inte överrenstämmer === så gös det som är efter : dvs, todo returneras oförändrat.
  completeTodo: (id: number) =>
    set((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  setAllToCompleted: () =>
    set((state) => ({
      todoList: state.todoList.map((todo) => ({ ...todo, completed: true })),
    })),

  // setAllToCompleted: () =>
  //   set((state) => ({
  //     todoList: state.todoList.map((todo) =>
  //       todo.id === id ? {...todo, completed: todo.completed } : todo
  //     ),
  //   })),

  //filtrerar igenom todoList och visar bara de som inte är markerade som complete.
  removeCompleted: () =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => !todo.completed),
    })),

  //"raderar" Todo med specifik id genom att visa alla id som inte (!==) har samma id som den som efterfrågas. Går in i arrayen och kollar i state efter det aktuella id. filtrerar sedan i state och visar bara de som Inte har det aktuella idt (!==)
  deleteTodo: (id: number) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));

export default useStore;
