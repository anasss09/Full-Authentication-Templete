import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../features/authSlice";

const Register = () => {
	const [form, setForm] = useState({ fullName: "", email: "", password: "" });
	const dispatch = useDispatch();

	function HandleSignup(ev) {
		ev.preventDefault();
		dispatch(registerUser(form));
	}
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-100 bg-white shadow-lg rounded">
				<h2 className="text-2xl font-semibold mb-4 text-center">Sign up</h2>

				<form onSubmit={HandleSignup} className="mb-4">
					<input
						type="text"
						value={form.fullName}
						placeholder="Enter your full name"
						onChange={(ev) =>
							setForm({ ...form, fullName: ev.target.value })
						}
						required
						className="w-full border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>

					<input
						type="email"
						value={form.email}
						placeholder="Enter you email"
						onChange={(ev) =>
							setForm({ ...form, email: ev.target.value })
						}
						required
            className="w-full border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>

					<input
						type="password"
						value={form.password}
						placeholder="Enter you password"
						onChange={(ev) =>
							setForm({ ...form, password: ev.target.value })
						}
						required
            className="w-full border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>

					<button
						type="submit"
						className="bg-blue-600 text-white text-center px-6 py-2 rounded hover:bg-blue-700 transition"
					>
						SignUp
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
