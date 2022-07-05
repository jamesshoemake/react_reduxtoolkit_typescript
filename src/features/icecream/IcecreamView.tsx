import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { order, restock } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1);

  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>Number of Icecream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(order())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restock(value))}>
        Restock ice cream
      </button>
    </>
  );
};
