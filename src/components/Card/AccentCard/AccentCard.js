import React from "react";
import Card from "../Card";
import "./AccentCard.css";

export default function AccentCard({ children, ...cardProps }) {
    return (
        <Card
	    className="AccentCard"
            {...cardProps}
	>
	    {children}
	</Card>
    );
}

