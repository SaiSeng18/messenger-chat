import { Chat } from "@/components/Chat";
import React from "react";

export const Home = () => {
	return (
		<main className="w-full h-screen flex justify-center items-center">
			<h1 className="text-7xl font-bold text-blue-500 selection:text-green-200 selection:bg-sky-300">
				Messenger Chat Test
			</h1>
			<Chat />
		</main>
	);
};
