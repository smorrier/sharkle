import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
} from "react";

const ScreenSizeContext = createContext({ screenSize: "desktop" });

export function ScreenSizeProvider({ children }: { children: ReactNode }) {
	const [screenSize, setScreenSize] = useState("desktop");

	useEffect(() => {
		function getScreenSize(w: number) {
			if (w > 1200) {
				return "desktop";
			} else if (w > 480) {
				return "tablet";
			} else {
				return "mobile";
			}
		}

		const listener = () => {
			setScreenSize(getScreenSize(window.innerWidth));
		};

		window.addEventListener("resize", listener);
		listener();

		return () => window.removeEventListener("resize", listener);
	}, []);

	return (
		<ScreenSizeContext.Provider value={{ screenSize }}>
			<div className={screenSize}>{children}</div>
		</ScreenSizeContext.Provider>
	);
}

//Hook
function useScreenSize() {
	return useContext(ScreenSizeContext);
}

export default useScreenSize;
