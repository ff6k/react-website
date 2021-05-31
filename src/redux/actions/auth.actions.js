// auth constants
import { LOGIN, LOG_OUT } from "../constants/auth.constants";

export function LOGIN(res) {
	return { type: LOGIN, res };
}
export function LOG_OUT() {
	return { type: LOG_OUT };
}
