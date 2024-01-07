import React, { useContext } from "react";
import AccentTag from "../../Tag/AccentTag/AccentTag";
import AppPageContext from "../AppPageContext/AppPageContext";

export default function AppPageSwitchTag({ pageId, children }) {
	const { currentAppPageId, changeAppPageId } = useContext(AppPageContext);
	console.log(currentAppPageId, pageId, changeAppPageId);

	return (
		<AccentTag
			isActive={pageId === currentAppPageId}
			onToggled={(newIsActive) => newIsActive && changeAppPageId(pageId)}
		>
			{children}
		</AccentTag>
	);
}
