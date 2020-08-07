import { derived } from "overmind";

export enum Filter {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed"
}

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  filter: Filter;
  newTodoTitle: string;
  todos: {
    [id: string]: Todo;
  };
  editingTodoId: string | null;
  editingTodoTitle: string;
  currentTodos: Todo[];
  activeTodoCount: number;
  hasCompletedTodos: boolean;
  isAllTodosChecked: boolean;
};

export const state: State = {
  filter: Filter.ALL,
  newTodoTitle: "",
  todos: {},
  editingTodoId: null,
  editingTodoTitle: "",
  currentTodos: derived(({ todos, filter }: State) => {
    return Object.values(todos).filter(todo => {
      switch (filter) {
        case "active":
          return !todo.completed;
        case "completed":
          return todo.completed;
        default:
          return true;
      }
    });
  }),
  activeTodoCount: derived(({ todos }: State) => {
    return Object.values(todos).filter(todo => !todo.completed).length;
  }),
  hasCompletedTodos: derived(({ todos }: State) => {
    return Object.values(todos).some(todo => todo.completed);
  }),
  isAllTodosChecked: derived(({ currentTodos }: State) => {
    return currentTodos.every(todo => todo.completed);
  })
};
