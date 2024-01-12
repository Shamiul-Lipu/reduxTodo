import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-2xl text-center font-semibold my-10">Redux Todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
