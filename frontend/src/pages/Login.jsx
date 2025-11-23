import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";

const Login = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const dispatch = useDispatch();

	function handleLoginSubmit(e) {
		e.preventDefault();
		dispatch(loginUser(form));
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-96 bg-white rounded-2xl shadow-lg ">
				<h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
				<form onSubmit={handleLoginSubmit} className="m-4">
					<input
						type="email"
						placeholder="Enter your Email.."
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						className="w-full border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>

					<input
						type="password"
						placeholder="Enter your password.."
						value={form.password}
						onChange={(e) =>
							setForm({ ...form, password: e.target.value })
						}
						className="w-full border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>

					<button
						type="submit"
						className="bg-blue-600 text-white text-center px-6 py-2 rounded hover:bg-blue-700 transition"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
