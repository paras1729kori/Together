import React from "react";

const Button = (props) => {
  const { name } = props;

  return (
    <button className="w-full bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold px-3 py-1 border-b-4 border-fuchsia-700 hover:border-fuchsia-500 rounded">
      {name}
    </button>
  );
};

export default Button;
