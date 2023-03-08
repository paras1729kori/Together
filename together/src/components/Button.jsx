import React from "react";

const Button = (props) => {
  const { name } = props;

  return (
    <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold px-3 py-1 border-b-4 border-teal-700 hover:border-teal-500 rounded">
      {name}
    </button>
  );
};

export default Button;
