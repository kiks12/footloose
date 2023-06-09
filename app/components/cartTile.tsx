import { useContext } from "react";
import { CartContext, Order } from "../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
	order: Order;
}

const CartTile: React.FC<Props> = ({ order }) => {
	const { setCart } = useContext(CartContext);

	const deleteFromCart = () => {
		setCart((prev) => {
			return prev.filter((item) => item.id !== order.id);
		});
	};

	return (
		<div className="flex justify-between mt-4">
			<div className="flex">
				<div className="w-24 h-24 rounded-lg overflow-hidden">
					<img src={order.img} alt={order.name} />
				</div>
				<div className="flex flex-col ml-2">
					<p className="text-sm">{order.name}</p>
					<p className="text-sm text-slate-500">Size: {order.size}</p>
					<p className="text-sm text-slate-500">Quantity: {order.quantity}</p>
				</div>
			</div>
			<div className="flex flex-col items-end justify-between">
				<p className="text-sm">
					{new Intl.NumberFormat("en-us", {
						style: "currency",
						currency: "PHP",
					}).format(order.price)}
				</p>
				<div className="cursor-pointer" onClick={deleteFromCart}>
					<FontAwesomeIcon icon={faTrash} />
				</div>
			</div>
		</div>
	);
};

export default CartTile;
