import classNames from "classnames";
import Button from "../Button/Button";
import "./Tag.css";

export default function Tag({ className, classNameActive, isActive, children, onToggled, ...props }) {
	return (
		<Button
			className={classNames("Tag", className, isActive && "Tag--active", isActive && classNameActive)}
			onClick={() => onToggled(!isActive)}
			{...props}
		>
			{children}
		</Button>
	);
}
