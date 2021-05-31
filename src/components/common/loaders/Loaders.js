import React from "react";
import "./Loaders.scss";

export const suspenseFallbackLoader = () => {
	return <div className="app__loader">Loading.....</div>;
};
