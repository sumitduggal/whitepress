import { useContext } from "preact/hooks";
import { effect, Signal, signal, useSignal } from "@preact/signals";
import { createContext, FunctionComponent, JSX } from "preact";

import Input from "/components/Input.tsx";

const createTodoState = () => {
  const todos = signal([""]);

  return { todos };
};

type TodoItemsProps = { todos: Signal<string[]> };
// export const TodoContext = createContext<TodoItemsProps>({ todos: [''] });

const TodoItems: FunctionComponent<TodoItemsProps> = (
  { todos },
) => {
  const handleOnInput = (e: JSX.TargetedEvent<HTMLInputElement>) => {
    console.log(e?.currentTarget.value);
  };

  const handleOnKeyDown = (
    e: JSX.TargetedKeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    console.log(e.key);
    if (e.key === "Enter" && e.currentTarget.value) {
      e.preventDefault();
      console.log("before state change todos.value", todos.value);

      const modifiedArray = [...todos.value];
      modifiedArray.splice(
        index,
        0,
        e.currentTarget.value,
      );
      console.log("modifiedArray", modifiedArray);

      todos.value = [...modifiedArray];
    }
  };

  effect(() => console.log("todos.value", todos.value));

  return (
    <>
      {todos.value.map((todo, index) => (
        console.log(todo),
          (
            <Input
              // key={todo}
              value={todo}
              onInput={handleOnInput}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          )
      ))}
    </>
  );
};

export default () => {
  const todos = useSignal(["abc"]);

  return <TodoItems todos={todos} />;
};
