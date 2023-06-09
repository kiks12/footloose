"use client";

import { createContext, useState, useEffect } from "react";

export interface Order {
	id: number;
	name: string;
	quantity: number;
	price: number;
	size: number;
	img: string;
}

interface ICartContext {
	cart: Order[];
	setCart: React.Dispatch<React.SetStateAction<Order[]>>;
	openCart: boolean;
	openCartCallback: () => void;
}

export const CartContext = createContext<ICartContext>({
	cart: [],
	setCart: () => {},
	openCart: false,
	openCartCallback: () => {},
});

type Props = {
	children?: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
	const [cart, setCart] = useState<Order[]>([]);
	const [openCart, setOpenCart] = useState<boolean>(false);

	useEffect(() => {
		if (window.localStorage.getItem("cart")) {
			setCart(JSON.parse(window.localStorage.getItem("cart") ?? "[]"));
		}
	},[]);

	useEffect(() => {
		if (cart.length > 0) {
			window.localStorage.setItem("cart",JSON.stringify(cart));
		} else {
			window.localStorage.removeItem("cart");
		}
	}, [cart]);

	const openCartCallback = () => {
		setOpenCart((prev) => (prev = !prev));
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				openCart,
				openCartCallback,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
