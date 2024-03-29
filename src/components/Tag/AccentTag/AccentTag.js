import React from "react";
import Tag from "../Tag";
import "./AccentTag.css";

export default function AccentTag({ children, ...tagProps }) {
  return (
    <Tag
      {...tagProps}
      className="AccentTag"
      classNameActive="AccentTag--active"
    >
      {children}
    </Tag>
  );
}
