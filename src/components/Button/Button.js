import classNames from "classnames";
import "./Button.css";

export default function Button({ className, children, ...props }) {
  return (
    <button className={classNames("Button", className)} {...props}>
      {children}
    </button>
  );
}
