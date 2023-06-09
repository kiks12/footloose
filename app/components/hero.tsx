import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Hero {
	name: string;
	img: string;
}

const Hero: React.FC = () => {
	const [heroImages, setHeroImages] = useState<Hero[]>([]);
	const [next, setNext] = useState<Hero[]>([]);
	const router = useRouter();

	useEffect(() => {
		fetch("/api/heroes")
			.then((res) => res.json())
			.then((json: Hero[]) => {
				const curr = json.slice(0, 2);
				const next = json.slice(2, 4);
				setHeroImages(curr);
				setNext(next);
			});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setHeroImages((prev) => {
				const nextNext = next;
				setNext(prev);
				return nextNext;
			});
		}, 3000);

		return () => clearInterval(interval);
	}, [next, setHeroImages]);

	return (
		<div>
			<div className="w-full p-5 overflow-hidden flex flex-col md:flex-row">
				<AnimatePresence>
					{heroImages.map((hero, idx) => {
						if (idx === 0) {
							return (
								<motion.div
									key={idx}
									className="flex-1 relative ease-in-out duration-300 rounded-lg overflow-hidden"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<img src={hero.img} alt={hero.name} />
									<h1 className="text-white tracking-wider absolute top-10 inset-x-0 text-center uppercase text-4xl font-bold">
										{hero.name}
									</h1>
								</motion.div>
							);
						}
						return (
							<motion.div
								key={idx}
								className="flex-1 ml-0 mt-2 md:mt-0 md:ml-2 relative ease-in-out duration-300 rounded-lg overflow-hidden"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<img src={hero.img} alt={hero.name} />
								<h1 className="text-white tracking-wider absolute top-10 inset-x-0 text-center uppercase text-4xl font-bold">
									{hero.name}
								</h1>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
			<motion.div 
				className="w-full my-10 p-2 text-center flex flex-col items-center justify-center"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<h1 className="text-4xl font-bold">Reliable Shoe Retailer</h1>
				<p className="mt-2">
					Footloose, a dependable shoe reseller of well-known brands like Nike, Adidas and many more.
				</p>
				<div className="mt-5">
					<button
						onClick={() => router.push("/shop")}
						className="py-3 px-10 rounded-full bg-slate-900 text-sm text-white"
					>
						Shop
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
