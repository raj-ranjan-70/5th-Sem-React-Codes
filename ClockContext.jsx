import React, { createContext, useState, useEffect, useContext } from "react";

export const ClockContext = createContext({
	time: new Date(),
});

export function ClockProvider({ children }) {
	const [time, setTime] = useState(() => new Date());

	useEffect(() => {
		const id = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<ClockContext.Provider value={{ time }}>
			{children}
		</ClockContext.Provider>
	);
}

export function useClock() {
	return useContext(ClockContext);
}

