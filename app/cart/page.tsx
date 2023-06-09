"use client";

import { useCallback, useContext, useState } from "react";
import { CartContext } from "../hooks/useCart";
import CartTile from "../components/cartTile";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
	const { cart } = useContext(CartContext);
	const [checkout, setCheckout] = useState<boolean>(false);

	const total = useCallback(() => {
		let newTotal = 0;
		for (const order of cart) {
			newTotal += order.price;
		}
		return newTotal;
	}, [cart]);

	return (
		<>
			<main className="bg-white w-screen min-h-screen">
				<div className="mx-2 flex flex-col md:flex-row md:mx-10 lg:mx-40 p-3">
					<AnimatePresence>
						{checkout ? (
							<motion.div
								className="w-full md:w-1/2 lg:w-2/3 p-3"
								initial={{ x: -200, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 200, opacity: 0 }}
							>
								<div className="mx-0 md:mx-10 lg:mx-40">
									<form action="" className="pb-20">
										<h1 className="tracking-wider text-xl mb-5">Shipping Information</h1>
										<div className="">
											<label className="text-xs uppercase" htmlFor="firstName">
												First Name
											</label>
											<input type="text" id="firstName" name="firstName" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
										</div>
										<div className="mt-3">
											<label className="text-xs uppercase" htmlFor="lastName">
												Last Name
											</label>
											<input type="text" id="lastName" name="lastName" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
										</div>
										<div className="mt-3">
											<label className="text-xs uppercase" htmlFor="address">
												Address Line
											</label>
											<input type="text" id="address" name="address" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
										</div>
										<div className="flex mt-3">
											<div className="flex-1 mr-2">
												<label className="text-xs uppercase" htmlFor="state">
													State/Province
												</label>
												<input type="text" id="state" name="state" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
											</div>
											<div className="flex-1 ml-2">
												<label className="text-xs uppercase" htmlFor="city">
													City/Municipality
												</label>
												<input type="text" id="city" name="city" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
											</div>
										</div>
										<div className="flex mt-3">
											<div className="flex-1 mr-2">
												<label className="text-xs uppercase" htmlFor="postal">
													Postal Code
												</label>
												<input type="text" id="postal" name="postal" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
											</div>
											<div className="flex-1 ml-2">
												<label className="text-xs uppercase" htmlFor="barangay">
													Barangay/District
												</label>
												<input type="text" id="barangay" name="barangay" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
											</div>
										</div>
										<h1 className="tracking-wider text-xl mt-10 mb-5">Contact Information</h1>
										<div className="">
											<label className="text-xs uppercase" htmlFor="contactNumber">
												Contact Number
											</label>
											<input type="text" id="contactNumber" name="contactNumber" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
										</div>
										<div className="">
											<label className="text-xs uppercase" htmlFor="email">
												Email Address
											</label>
											<input type="text" id="email" name="email" className="w-full border border-slate-300 p-3 rounded-lg mt-2" />
										</div>
									</form>
								</div>
							</motion.div>
						) : (
							<motion.div className="w-2/3 p-3" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 200, opacity: 0 }}>
								{cart.map((order, idx) => {
									return <CartTile key={idx} order={order} />;
								})}
							</motion.div>
						)}
					</AnimatePresence>
					<div className="w-full md:w-1/2 lg:w-1/3 p-3">
						<div className="border border-slate-200 rounded-xl p-8">
							<div>
								<h1 className="text-2xl">Summary</h1>
							</div>
							<div className="flex justify-between mt-5">
								<h1 className="text-sm">Sub-total: </h1>
								<h1 className="text-sm">{new Intl.NumberFormat("en-us", { style: "currency", currency: "PHP" }).format(total())}</h1>
							</div>
							<div className="flex justify-between mt-5">
								<h1 className="text-sm">Shipping Fee: </h1>
								<h1 className="text-sm">FREE</h1>
							</div>
							<div className="flex my-10 py-3 border-t border-b border-slate-200 justify-between">
								<h1 className="text-sm">Total: </h1>
								<h1 className="text-sm">{new Intl.NumberFormat("en-us", { style: "currency", currency: "PHP" }).format(total())}</h1>
							</div>
							{checkout ? (
								<div>
									<button
										className="w-full rounded-full bg-white text-slate-900 border border-slate-900 p-4 text-sm"
										onClick={() => setCheckout((prev) => (prev = !prev))}
									>
										Cancel
									</button>
									<button className="w-full border border-slate-900 mt-2 rounded-full bg-slate-900 text-white p-4 text-sm" onClick={() => {}}>
										Submit
									</button>
								</div>
							) : cart.length > 0 && !checkout ? (
								<button className="w-full rounded-full bg-slate-900 text-white p-4 text-sm" onClick={() => setCheckout((prev) => (prev = !prev))}>
									Checkout
								</button>
							) : (
								<button className="w-full rounded-full bg-slate-300 text-white p-4 text-sm" disabled>
									Checkout
								</button>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Page;
