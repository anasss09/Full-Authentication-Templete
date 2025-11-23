import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import { store } from "./app/store.js";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
        <Navbar />
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
