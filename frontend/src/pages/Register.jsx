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
		<div>
			<div>
				<h2>Sign up</h2>

				<form onSubmit={HandleSignup}>
					<input
						type="text"
						value={form.fullName}
						placeholder="Enter your full name"
						onChange={(ev) =>
							setForm({ ...form, fullName: ev.target.value })
						}
						required
						className="focus:outline-none"
					/>

					<input
						type="email"
						value={form.email}
						placeholder="Enter you email"
						onChange={(ev) =>
							setForm({ ...form, email: ev.target.value })
						}
						required
					/>

					<input
						type="password"
						value={form.password}
						placeholder="Enter you password"
						onChange={(ev) =>
							setForm({ ...form, password: ev.target.value })
						}
						required
					/>

					<button
						type="submit"
						className="bg-blue-600 px-6 py-1 rounded text-white text-center hover:bg-blue-700"
					>
						SignUp
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
