import { CurrentModule, React, useApp } from "./CurrentModule";

export default function JSX(value = "test") {
  switch (typeof value) {
    case "string":
      return `'${value}'`;
    case "number":
      return value;
    default:
      if (value === undefined) return "undefined";
      if (value === null) return "null";
      if (Array.isArray(value)) {
        const list = value.map((val, index) => {
          return (
            <div className="pl-2" key={index}>
              {index}: {JSX(val)}
            </div>
          );
        });
        return list;
      }
      const list = Object.keys(value).map(key => {
        return (
          <div className="pl-2" key={key}>
            {" "}
            {key}: {JSX(value[key])}{" "}
          </div>
        );
      });
      return list;
  }
}
CurrentModule(JSX);
