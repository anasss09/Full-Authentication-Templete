import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";

const Navbar = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	return (
		<div>
			<div className="flex justify-between">
				<div>TODO LIST</div>
				{/* <div>Welcome {user.fullName}</div> */}
				
                {user && <button onClick={() => dispatch(logoutUser())} className="flex items-center gap-1 bg-red-500"><LogOut size={16} />Logout</button> }
			</div>
		</div>
	);
};

export default Navbar;
