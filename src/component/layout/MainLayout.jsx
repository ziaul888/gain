"use client";
import { SettingsConsumer, SettingsProvider } from "@/context/settings-context";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import Navbar from "../global/Navbar";

const MainLayout = ({ children }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	const toastOptions = {
		success: {
			style: {
				backgroundColor: "#059D01",
				color: "#fff",
				borderRadius: "0.25rem",
			},
			iconTheme: {
				primary: "#fff",
				secondary: "#059D01",
			},
		},
		error: {
			style: {
				backgroundColor: "#DB2222",
				color: "#fff",
				borderRadius: "0.25rem",
			},
			iconTheme: {
				primary: "#fff",
				secondary: "#DB2222",
			},
		},
	};
	const persistor = persistStore(store);
	return (
		<>
			<Provider store={store}>
				<SettingsProvider>
					<SettingsConsumer>
						{({ settings }) =>
							!loading && (
								<div dir={settings.direction}>
									<Navbar />
									<main className="flex flex-wrap gap-x-5 gap-y-[15px] min-h-[calc(100vh-65px)] p-[15px]">
										<article className="w-0 flex-grow">
											{children}
										</article>
									</main>
									<Toaster
										position="bottom-left"
										toastOptions={toastOptions}
									/>
								</div>
							)
						}
					</SettingsConsumer>
				</SettingsProvider>
			</Provider>
		</>
	);
};

export default MainLayout;
