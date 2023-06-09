import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../hooks/useCart";
import CartTile from "./cartTile";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
	// openCartCallback: () => void;
}

const SideCart: React.FC<Props> = () => {
	const router = useRouter();
	const { cart, openCartCallback } = useContext(CartContext);

	return (
		<motion.div
			className="fixed right-0 top-0 h-screen w-screen md:w-2/6 p-4 bg-white drop-shadow-lg flex flex-col justify-between"
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 200, opacity: 0 }}
			transition={{
				ease: "easeInOut",
			}}
			style={{
				zIndex: "100",
			}}
		>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold">Cart</h1>
				<button onClick={openCartCallback}>
					<FontAwesomeIcon icon={faClose} />
				</button>
			</div>
			<div className="h-3/4 overflow-scroll mt-4">
				{cart.map((order, idx) => {
					return <CartTile key={idx} order={order} />;
				})}
			</div>
			<div className="mt-2">
				<button
					className="w-full m-2 py-5 bg-slate-900 text-white text-sm rounded-full"
					onClick={() => {
						openCartCallback();
						router.push("/cart");
					}}
				>
					Summary
				</button>
			</div>
		</motion.div>
	);
};

export default SideCart;
