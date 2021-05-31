// All the routes of the app will stay over here.

import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { suspenseFallbackLoader } from "./components/common/loaders/Loaders";
import "./App.scss";

const LandingPage2 = lazy(() =>
	import("./components/pages/landingPage2/LandingPage2")
);

function Routes() {
	const appLoader = suspenseFallbackLoader();
	return (
		<Router>
			<Suspense fallback={appLoader}>
				<Switch>
					<Route exact path="/" component={LandingPage2} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default Routes;
