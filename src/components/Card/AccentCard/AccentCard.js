import React from "react";
import classNames from "classnames";
import Card from "../Card";
import "./AccentCard.css";

export default function AccentCard({ children, className, ...cardProps }) {
  return (
    <Card className={classNames("AccentCard", className)} {...cardProps}>
      {children}
    </Card>
  );
}
