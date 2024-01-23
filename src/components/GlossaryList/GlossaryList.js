import React from "react";
import { Grid as VirtualizedGrid } from "react-virtualized";
import "react-virtualized/styles.css";
import TypographyHeader from "../Typography/TypographyHeader/TypographyHeader";
import AccentCard from "../Card/AccentCard/AccentCard";
import "./GlossaryList.css";

export default function GlossaryList({ data }) {
  return (
    <div className="GlossaryList">
      {data.map((glossaryItem) => (
        <AccentCard>
          <TypographyHeader>{glossaryItem.therm}</TypographyHeader>
          <div>{glossaryItem.definition}</div>
        </AccentCard>
      ))}
    </div>
  );
}
