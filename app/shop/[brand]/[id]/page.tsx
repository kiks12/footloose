"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext, Order } from "../../../hooks/useCart";

import { useParams } from "next/navigation";
import { Shoes } from "../page";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
	const [shoe, setShoe] = useState<Shoes>({
		shoeId: 0,
		name: "",
		brand: "",
		type: "",
		price: 0,
		gender: "MALE",
		color: "",
		sizes: [],
		images: [],
	});
	const [selectedSize, setSelectedSize] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const { cart, setCart } = useContext(CartContext);
	const params = useParams();

	useEffect(() => {
		fetch(`/api/shoes/${params.brand}/${params.id}`)
			.then((res) => res.json())
			.then((json) => {
				setShoe(json[0]);
			});
	}, [params.brand, params.id]);

	const addToCart = (shoe: Shoes) => {
		const newOrder: Order = {
			id: cart.length + 1,
			img: shoe.images[0].src,
			name: shoe.name,
			price: shoe.price * quantity,
			quantity: quantity,
			size: selectedSize,
		};

		setCart((prev) => [...prev, newOrder]);

		alert("Item Added to Cart");
	};

	return (
		<>
			<main className="bg-white w-screen min-h-screen">
				<div className="mx-2 flex flex-col-reverse md:flex-row md:mx-10 lg:mx-40 p-3">
					<div className="w-full md:w-1/2 lg:w-2/3 grid grid-cols-2 gap-2 p-3">
						<AnimatePresence>
							{shoe.images.length > 0 ? (
								<>
									{shoe.images.map((image, idx) => {
										return (
											<motion.div
												key={idx}
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ delay: idx / 10 }}
											>
												<img src={image.src} alt="" />
											</motion.div>
										);
									})}
								</>
							) : (
								<p>No Images to Show</p>
							)}
						</AnimatePresence>
					</div>
					<div className="p-3 px-5 w-full md:w-1/2 lg:w-1/3 flex flex-col">
						<h1 className="text-2xl font-semibold">{shoe.name}</h1>
						<p className="text-sm">{shoe.type}</p>
						<p className="text-sm mt-5">
							{new Intl.NumberFormat("en-us", {
								currency: "PHP",
								style: "currency",
							}).format(shoe.price)}
						</p>
						<div className="mt-10">
							<div className="flex justify-between items-center">
								<p className="text-xs">SELECT A SIZE</p>
								{selectedSize !== 0 && (
									<button className="text-xs" onClick={() => setSelectedSize(0)}>
										Clear
									</button>
								)}
							</div>
							<div className="grid grid-cols-3 gap-2 py-3">
								{shoe.sizes.length > 0 ? (
									<>
										{shoe.sizes.map((size, idx) => {
											if (selectedSize === size.size) {
												return (
													<div
														key={idx}
														className="text-center p-3 border border-slate-200 cursor-pointer rounded-lg hover:border-slate-900 ease-int-out duration-300 bg-slate-900 text-white"
													>
														<p className="text-xs">US {size.size}</p>
													</div>
												);
											}
											return (
												<div
													key={idx}
													className="text-center p-3 border border-slate-200 text-slate-900 cursor-pointer rounded-lg hover:border-slate-900 ease-in-out duration-300"
													onClick={() => setSelectedSize(size.size)}
												>
													<p className="text-xs">US {size.size}</p>
												</div>
											);
										})}
									</>
								) : (
									<p className="text-xs">No Available Sizes</p>
								)}
							</div>
						</div>
						<div className="my-5">
							<p className="text-xs">QUANTITY</p>
							<div className="flex mt-3">
								<button
									className="bg-slate-200 border border-slate-300 flex-auto hover:bg-slate-300 ease-in-out duration-300 rounded-lg text-slate-900"
									onClick={() => setQuantity((prev) => (prev === 0 ? 0 : (prev -= 1)))}
								>
									-
								</button>
								<input
									type="number"
									className="text-center text-sm flex-1 mx-2 rounded-lg border border-slate-200 p-3"
									value={quantity}
								/>
								<button
									className="bg-slate-200 border border-slate-300 flex-auto hover:bg-slate-300 ease-in-out duration-300 rounded-lg text-slate-900"
									onClick={() => setQuantity((prev) => (prev += 1))}
								>
									+
								</button>
							</div>
						</div>
						<div>
							{shoe.sizes.length > 0 && selectedSize !== 0 && quantity !== 0 ? (
								<button
									className="bg-slate-900 border border-slate-900 text-white rounded-full w-full p-4 text-sm"
									onClick={() => addToCart(shoe)}
								>
									Add to Cart
								</button>
							) : (
								<button
									className="bg-slate-300 border border-slate-300 text-white rounded-full w-full p-4 text-sm"
									disabled
								>
									Add to Cart
								</button>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
