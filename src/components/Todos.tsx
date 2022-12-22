import Footer from "../Footer";
import { useState, ChangeEvent, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, EditTodo, ITodo, RemoveTodo } from "../store/todoSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo>({
    id: "",
    text: "",
    done: false,
  });
  const dispatch = useDispatch();
  const Todos = useSelector((state: ITodo) => state.entities.todos);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todos) dispatch(addTodo(todos));
    setTodos({
      id: "",
      text: "",
      done: false,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodo = {
      id: Math.random().toString(36),
      text: e.target.value,
      done: false,
    };
    setTodos(newTodo);
  };

  const handleRemove = (todo: ITodo) => {
    dispatch(RemoveTodo(todo));
  };

  const handleDone = (todo: ITodo) => {
    dispatch(EditTodo(todo));
  };
  return (
    <>
      <Footer />
      <div className="flex items-center justify-center h-[100vh] sm:w-auto  flex-col bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <h1 className="font-bold hover:underline decoration-red-600 p-5 text-3xl">
          Add todo.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col shadow-xl shadow-cyan-500/50 bg-slate-200 w-[400px] sm:w-auto rounded-lg p-10"
        >
          <input
            value={todos?.text}
            placeholder="Add todo here..."
            className="rounded p-2 font-bold  placeholder:font-bold text-black outline-none"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-cyan-300 shadow-lg shadow-cyan-500/50 hover:scale-110 hover:duration-700 flex justify-center place-self-center p-2 m-2 rounded-lg font-bold "
          >
            Submit
          </button>
        </form>
        <div className=" p-5 m-5 grid grid-cols-2 sm:flex flex-col">
          {Todos?.map((todo: ITodo, i: number) => (
            <ul
              key={todo.id}
              className="font-semibold cursor-pointer flex justify-center text-yellow-50"
            >
              <h1
                className=" hover:underline text-md flex flex-auto"
                onClick={() => handleDone(todo)}
              >
                {i}_ {todo.text}
              </h1>
              <li className="py-2 px-2">
                {todo.done ? (
                  <AiFillCheckCircle size={14} color="green" />
                ) : (
                  <GiCancel size={14} color="red" />
                )}
              </li>
              <li className="py-2 px-2 flex flex-end">
                <BiTrash
                  size={14}
                  color="red"
                  onClick={() => handleRemove(todo)}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
