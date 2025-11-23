import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";

import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./features/authSlice";
import Tasks from "./pages/Tasks";
import Register from "./pages/Register";

function App() {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route
					path="/signup"
					element={!user ? <Register /> : <Navigate to="/" />}
				/>

				<Route
					path="/"
					element={user ? <Tasks /> : <Navigate to="/login" />}
				/>

				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/" />}
				/>
			</Routes>
		</>
	);
}

export default App;
