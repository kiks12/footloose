import { Shoes } from "@/app/shop/[brand]/page";
import { motion } from "framer-motion";

interface Props {
	shoe: Shoes;
	router: any;
	delay: number;
}

const ShoeCard: React.FC<Props> = ({ shoe, router, delay }) => {
	return (
		<motion.div 
			key={shoe.shoeId}
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 0 -200 }}
			transition={{ delay: delay / 10 }}
			className="h-full w-full p-4" 
			onClick={() => router.push(`/shop/${shoe.brand}/${shoe.shoeId}`)}
		>
			<div className="rounded-xl overflow-hidden">
				<img src={shoe.images[0].src} alt="" />
			</div>
			<div className="mt-2">
				<h3 className="text-md">{shoe.name}</h3>
				<p className="text-sm text-slate-500">{shoe.type}</p>
				<p className="text-sm mt-2">
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "PHP",
					}).format(shoe.price)}
				</p>
			</div>
		</motion.div>
	);
};

export default ShoeCard;
