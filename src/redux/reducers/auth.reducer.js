// auth constants
import { LOGIN, LOG_OUT } from "../constants/auth.constants";

import { REHYDRATE } from "redux-persist";
let initState = {
	loginData: {},
};

function AuthReducer(state = initState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				loginData: action.res,
			};

		case LOG_OUT:
			return {
				...state,
				loginData: {},
			};
		case REHYDRATE:
			return {
				...state,
				loginData:
					action.payload && action.payload.loginData
						? action.payload.loginData
						: {},
			};
		default:
			return {
				...state,
			};
	}
}

export default AuthReducer;
