import React, { useContext } from "react";
import AccentTag from "../../Tag/AccentTag/AccentTag";
import AppPageContext from "../AppPageContext/AppPageContext";

export default function AppPageSwitchTag({ pageId, children }) {
	const { currentAppPageId, changeAppPageId } = useContext(AppPageContext);

	return (
		<AccentTag
			isActive={pageId === currentAppPageId}
			onToggle={(newIsActive) => newIsActive && changeAppPageId(pageId)}
		>
			{children}
		</AccentTag>
	);
}
