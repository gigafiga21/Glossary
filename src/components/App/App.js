import React, { useState } from "react";
import AccentCard from "../Card/AccentCard/AccentCard";
import HeaderItem from "../Header/HeaderItem/HeaderItem";
import Header from "../Header/Header";
import GlossaryList from "../GlossaryList/GlossaryList";
import GlossaryHierarchy from "../GlossaryHierarchy/GlossaryHierarchy";
import { APP_PAGE_ID_HIERARCHY, APP_PAGE_ID_LIST, DEFAULT_APP_PAGE_ID } from "./appPageIds";
import AppPageContext from "./AppPageContext/AppPageContext";
import AppPageSwitchTag from "./AppPageSwitchTag/AppPageSwitchTag";
import "./App.css";

const APP_PAGES = {
    [APP_PAGE_ID_LIST]: {
        switcher: <AppPageSwitchTag pageId={APP_PAGE_ID_LIST}>Список</AppPageSwitchTag>,
        contentComponent: GlossaryList,
    },
    [APP_PAGE_ID_HIERARCHY]: {
        switcher: <AppPageSwitchTag pageId={APP_PAGE_ID_HIERARCHY}>Иерархия</AppPageSwitchTag>,
        contentComponent: GlossaryHierarchy,
    }
};

const APP_PAGES_ITERABLE = Object.keys(APP_PAGES).map((appPageId) => ({
    ...APP_PAGES[appPageId],
    id: appPageId
}));

export default function App() {
    const [currentAppPageId, setCurrentAppPageId] = useState(DEFAULT_APP_PAGE_ID);
    const CurrentAppPageContent = APP_PAGES[currentAppPageId].contentComponent;

    return (
	<AppPageContext.Provider value={{ currentAppPageId, changeAppPageId: setCurrentAppPageId }}>
            <div className="App">
	    	<AccentCard>
                    <Header>
                        {APP_PAGES_ITERABLE.map((appPageDesc) => (<HeaderItem>{appPageDesc.switcher}</HeaderItem>))}
                    </Header>
	    	</AccentCard>
                <div className="AppContent">
                    <CurrentAppPageContent />
                </div>
            </div>
	</AppPageContext.Provider>
    );
}
