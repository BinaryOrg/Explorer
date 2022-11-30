import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  {
    /* When we have 2 connected states (as for this case, the validity depends on the input value), we should use useReducer() hook. It also allows to manage state & it gives a function which updates the state & re-render the component. */
    /* we have to pass in at least one argument (reducer) to useReducer(). A reducer is a function which receives an action which we can dispatch and it receives the current state and then we updates the current state based on the action we received, return the new state and use reducer will take that new state and give it back to us in the component and re-render everything. */
    /* useReducer() is also able to take a second argument - initial state*/
    /* useReducer() returns an array of exactly 2 elements */
  }

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  {
    /* in react value of textarea set by using value property */
  }

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* The for attribute specifies which form element a label is bound to */}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
