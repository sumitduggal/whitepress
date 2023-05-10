import { PageProps } from "$fresh/server.ts";

import { BaseLayout } from "/layout/baseLayout.tsx";
import TodoApp from "../islands/TodoApp.tsx";

export default (props: PageProps) => {
  return (
    // <TodoContext.Provider value={createTodoState()}>
    <BaseLayout>
      <TodoApp />
    </BaseLayout>
    // </TodoContext.Provider>
  );
};
