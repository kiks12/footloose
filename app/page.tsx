"use client";

import Announcements from "./components/announcements";
import Hero from "./components/hero";
import Latests from "./components/latest";
import Story from "./components/story";

export default function Home() {
	return (
		<>
			<Announcements></Announcements>
			<Hero></Hero>
			<Latests></Latests>
			<Story></Story>
		</>
	);
}
