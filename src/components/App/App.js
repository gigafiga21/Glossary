import React, { useState, useEffect } from "react";
import classNames from "classnames";
import AccentCard from "../Card/AccentCard/AccentCard";
import HeaderItem from "../Header/HeaderItem/HeaderItem";
import Header from "../Header/Header";
import {
  GLOSSARY_DATA_TYPE_PLAIN,
  GLOSSARY_DATA_TYPE_GRAPH,
} from "./glossaryDataTypes";
import loadGlossaryData from "./loadGlossaryData";
import GlossaryList from "../GlossaryList/GlossaryList";
import GlossaryHierarchy from "../GlossaryHierarchy/GlossaryHierarchy";
import {
  APP_PAGE_ID_HIERARCHY,
  APP_PAGE_ID_LIST,
  DEFAULT_APP_PAGE_ID,
} from "./appPageIds";
import {
  APP_CONTENT_MODE_FULL,
  APP_CONTENT_MODE_GROW,
} from "./appContentModes";
import AppPageContext from "./AppPageContext/AppPageContext";
import AppPageSwitchTag from "./AppPageSwitchTag/AppPageSwitchTag";
import "./App.css";

const APP_PAGES = {
  [APP_PAGE_ID_LIST]: {
    dataType: GLOSSARY_DATA_TYPE_PLAIN,
    switcher: (
      <AppPageSwitchTag pageId={APP_PAGE_ID_LIST}>Список</AppPageSwitchTag>
    ),
    contentMode: APP_CONTENT_MODE_GROW,
    contentComponent: GlossaryList,
  },
  [APP_PAGE_ID_HIERARCHY]: {
    dataType: GLOSSARY_DATA_TYPE_GRAPH,
    switcher: (
      <AppPageSwitchTag pageId={APP_PAGE_ID_HIERARCHY}>
        Иерархия
      </AppPageSwitchTag>
    ),
    contentMode: APP_CONTENT_MODE_FULL,
    contentComponent: GlossaryHierarchy,
  },
};

const APP_PAGES_ITERABLE = Object.keys(APP_PAGES).map((appPageId) => ({
  ...APP_PAGES[appPageId],
  id: appPageId,
}));

export default function App() {
  const [currentAppPageId, setCurrentAppPageId] = useState(DEFAULT_APP_PAGE_ID);

  const [glossaryData, setGlossaryData] = useState({});
  const appPageGlossaryData = glossaryData[currentAppPageId];
  useEffect(() => {
    Object.keys(APP_PAGES).map((appPageId) => {
      loadGlossaryData(APP_PAGES[appPageId].dataType, "temp").then((d) =>
        setGlossaryData((lastGlossaryData) => ({
          ...lastGlossaryData,
          [appPageId]: d,
        })),
      );
    });
  }, []);

  const CurrentAppPageContent = APP_PAGES[currentAppPageId].contentComponent;
  const currentAppPageData = glossaryData[currentAppPageId];

  return (
    <AppPageContext.Provider
      value={{ currentAppPageId, changeAppPageId: setCurrentAppPageId }}
    >
      <div className="App">
        <div className="AppContainer">
          <AccentCard className="AppMenu">
            <Header>
              {APP_PAGES_ITERABLE.map((appPageDesc) => (
                <HeaderItem>{appPageDesc.switcher}</HeaderItem>
              ))}
            </Header>
          </AccentCard>
          <div
            className={classNames(
              "AppContent",
              `AppContent--${APP_PAGES[currentAppPageId].contentMode}`,
            )}
          >
            {currentAppPageData ? (
              <CurrentAppPageContent data={currentAppPageData} />
            ) : null}
          </div>
        </div>
      </div>
    </AppPageContext.Provider>
  );
}
