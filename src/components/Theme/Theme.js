import React from "react";
import { DEFAULT_THEME_ID } from "./themeIds";
import "./Theme.css";

export default function Theme({ children, themeId = DEFAULT_THEME_ID }) {
	return <div className={`Theme--${themeId}`}>{children}</div>
}
