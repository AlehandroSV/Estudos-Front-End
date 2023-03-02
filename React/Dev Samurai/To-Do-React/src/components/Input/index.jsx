// Import Libs
import { useState } from "react";
import PropTypes from "prop-types";

// Import CSS
import "./styles.css";

const InputNewTodo = ({ onNewTodo = null }) => {
  const [value, setValue] = useState("");

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.which === ENTER_KEY) {
      onSubmit();
    } else if (e.which === ESCAPE_KEY) {
      setValue("");
    }
  };

  const onSubmit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      setValue("");
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

InputNewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default InputNewTodo;
