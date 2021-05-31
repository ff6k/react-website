import "./App.scss";
import Routes from "./Routes";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
	// Use BEM conventions for classNames
	return (
		<div className="app">
			<Routes />
		</div>
	);
}

export default App;
