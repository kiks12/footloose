import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Latest {
	img: string;
	name: string;
}

const Latests: React.FC = () => {
	const [latests, setLatests] = useState<Latest[]>([]);
	const router = useRouter();

	useEffect(() => {
		fetch("/api/latests")
			.then((res) => res.json())
			.then((json) => setLatests(json));
	}, []);

	return (
		<div className="w-full p-5 mt-5">
			<h2 className="uppercase text-xl tracking-wider font-semibold">The Latests</h2>
			<div className="w-100 flex flex-col md:flex-row mt-10">
				<AnimatePresence>
					{latests.map((item, idx) => {
						if (idx === 0)
							return (
								<motion.div
									key={idx}
									className="rounded-lg overflow-hidden flex-1 relative"
									initial={{ opacity: 0, y: 200 }}
									exit={{ opacity: 0, y: -200 }}
									transition={{ delay: idx / 10 }}
									whileInView={{ opacity: 1, y: 0 }}
								>
									<div>
										<img src={item.img} alt={item.img} />
										<button
											onClick={() => router.push(`/shop/${item.name.toUpperCase()}`)}
											className="py-2 px-6 text-xs text-white border-white border rounded-full hover:bg-white hover:text-slate-900 ease-in-out duration-200 absolute bottom-5 right-10"
										>
											Explore
										</button>
									</div>
								</motion.div>
							);
						return (
							<motion.div
								key={idx}
								className="rounded-lg overflow-hidden mt-2 ml-0 md:ml-2 md:mt-0 flex-1 relative"
								initial={{ opacity: 0, y: 200 }}
								exit={{ opacity: 0, y: -200 }}
								transition={{ delay: idx / 10 }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div>
									<img src={item.img} alt={item.img} />
									<button
										onClick={() => router.push(`/shop/${item.name.toUpperCase()}`)}
										className="py-2 px-6 text-xs text-white border-white border rounded-full hover:bg-white hover:text-slate-900 ease-in-out duration-200 absolute bottom-5 right-10"
									>
										Explore
									</button>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Latests;
