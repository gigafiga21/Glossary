import { createContext } from "react";

const AppPageContext = createContext({
	currentAppPageId: undefined,
	changeAppPageId: undefined
});

export default AppPageContext;
