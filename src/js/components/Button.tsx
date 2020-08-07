import React from "react";
import { CurrentModule, useApp } from "../CurrentModule";

export default function Button({ action = "setMessage", value }) {
  const { state, actions } = useApp();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => actions[action](value)}
    >
      {action}
    </button>
  );
}
CurrentModule(Button);
