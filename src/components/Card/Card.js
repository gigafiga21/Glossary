import React from "react";                              import classNames from "classnames";                    import "./Card.css";                                                                                            export default function Card({ className, children, ...cardProps }) {
    return (
        <div
	    className={classNames("Card", className)}
	    {...cardProps}
	>
	    {children}
	</div>
    );
}

