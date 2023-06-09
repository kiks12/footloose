import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Announcements {
	title: String;
	subtitle: String;
	link: String;
	status: "ACTIVE" | "INACTIVE";
}

const Announcements: React.FC = () => {
	const [announcements, setAnnouncements] = useState<Announcements[]>([]);
	const [announcement, setAnnouncement] = useState({ index: 0, a: announcements[0] });

	useEffect(() => {
		fetch("/api/announcements")
			.then((res) => res.json())
			.then((json) => {
				setAnnouncements(json);
			});
	}, []);

	useEffect(() => {
		setAnnouncement({
			index: 0,
			a: announcements[0],
		});
	}, [announcements, setAnnouncement]);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnnouncement((prev) => {
				if (prev.index + 1 === announcements.length) {
					return {
						index: 0,
						a: announcements[0],
					};
				}
				return {
					index: prev.index + 1,
					a: announcements[prev.index + 1],
				};
			});
		}, 5000);

		return () => clearInterval(interval);
	}, [announcements, setAnnouncement]);

	return (
		<div className="w-full pt-4 pb-1 px-5 flex justify-center items-center">
			<div className="text-center">
				<AnimatePresence>
					<div className="flex">
						{
							announcement && announcement.a ? (
								<motion.div
									key={announcement.index}
									initial={{ opacity: 0, x: -200 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 200 }}
								>
									<h3 className="font-semibold text-md">{announcement.a.title}</h3>
									<p className="text-xs">{announcement.a.subtitle}</p>
								</motion.div>
							) : (
								<p>Loading...</p>
							)
						}
					</div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Announcements;
