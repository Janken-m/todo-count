import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterState,
  decrement,
  DecrementByAmount,
  increment,
  incrementByAmount,
} from "../store/counterSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counters = () => {
  const dispatch = useDispatch();
  const counts = useSelector((state: CounterState) => state.entities.counter);
  const [Counters, setCounters] = useState<number>(0);
  const [CountersDec, setCountersDec] = useState<number>(0);

  const handleAddCount = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setCounters(value);
  }
  function handleChangeDecrement(e: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setCountersDec(value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(incrementByAmount(Counters));
    setCounters(0);
  }
  function handleSubmitDec(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(DecrementByAmount(CountersDec));
    setCountersDec(0);
  }

  return (
    <div className="select-none h-[100vh] w-[100%] sm:w-auto items-center flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col justify-center border-2 p-10 rounded-md shadow-xl shadow-cyan-500/50 bg-slate-200  ">
        <h1 className="font-bold text-4xl sm:text-xl text-center underline decoration-red-600 p-5">
          Change the Counter.
        </h1>
        <div className="flex justify-center p-2 m-5 items-center cursor-pointer  sm:w-[320] sm:flex ">
          <AiOutlinePlus
            size={14}
            color="black"
            onClick={() => handleAddCount()}
          />
          <input
            value={counts.count}
            className="border-2 text-center rounded-lg outline-none"
            readOnly={true}
          />
          <AiOutlineMinus
            size={14}
            color="black"
            onClick={() => handleDecrement()}
          />
        </div>
        <div className="flex justify-center">
          {counts && (
            <h1 className="text-black font-bold">
              Counter is :
              <p className="inline mx-2 underline text-red-600 text-5xl decoration-red-600 font-bold">
                {counts.count}
              </p>
            </h1>
          )}
        </div>
        <div className="flex align-middle justify-center text-center">
          <form
            onSubmit={handleSubmit}
            className="flex-col justify-center align-middle p-5"
          >
            <p> Increment by number </p>
            <input
              value={Counters}
              className="border-2 p-1 rounded-lg outline-none sm:w-[100px]"
              onChange={handleChange}
              type="number"
            />
            <button
              type="submit"
              className=" bg-cyan-300 shadow-lg hover:scale-110 hover:duration-700  shadow-cyan-500/50 font-bold p-2 mx-2 rounded-lg sm:m-2 sm:p-1"
            >
              Increment
            </button>
          </form>
          <form
            onSubmit={handleSubmitDec}
            className="flex-col justify-center align-middle p-5"
          >
            <p> Decrement by number </p>
            <input
              value={CountersDec}
              className="border-2 p-1 rounded-lg outline-none sm:w-[100px]"
              onChange={handleChangeDecrement}
              type="number"
            />
            <button
              type="submit"
              className="bg-cyan-300 shadow-lg hover:scale-110 hover:duration-700  shadow-cyan-500/50 font-bold p-2 mx-2 rounded-lg sm:m-2 sm:p-1"
            >
              Decrement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Counters;
