"use client";

import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import SideCart from "./sideCart";
import { CartContext } from "../hooks/useCart";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
	{ name: "Vans", href: "/shop/vans" },
	{ name: "Nike", href: "/shop/nike" },
	{ name: "Adidas", href: "/shop/adidas" },
	{ name: "New Balance", href: "/shop/newBalance" },
];

const mobileNavigation = [
	{ name: "Vans", href: "/shop/vans" },
	{ name: "Nike", href: "/shop/nike" },
	{ name: "Adidas", href: "/shop/adidas" },
	{ name: "New Balance", href: "/shop/newBalance" },
];

interface Props {}

const Navbar: React.FC<Props> = () => {
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
	const { openCart, openCartCallback } = useContext(CartContext);
	const [searchInput, setSearchInput] = useState<string>("");

	useEffect(() => {
		const resize = () => setMobileMenuOpen(false);
		window.addEventListener("resize", resize);

		return window.removeEventListener("resize", resize);
	}, []);

	const openSearchBar = () => {
		setMobileMenuOpen(false);
		setSearchBarOpen(true);
	};

	return (
		<header className="bg-white w-full">
			<nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a className="-m-1.5 p-1.5 cursor-pointer" onClick={() => router.push("/")}>
						<span className="">Footloose</span>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen((prev) => !prev)}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>

				<AnimatePresence>
					{searchBarOpen && (
						<motion.div
							className="absolute w-screen bg-white top-0 right-0 p-3 drop-shadow"
							initial={{ y: -150, opacity: 1 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -150, opacity: 1 }}
						>
							<div className="flex justify-end">
								<button onClick={() => setSearchBarOpen(false)}>
									<FontAwesomeIcon icon={faClose} />
								</button>
							</div>
							<form action="/shop" method="get" className="w-100 mt-2">
								<input
									className="p-2 px-5 w-full rounded-full text-sm border border-slate-300"
									placeholder="search"
									type="text"
									name="search"
									id="search"
									onChange={(e) => setSearchInput(e.target.value)}
									value={searchInput}
								/>
								<button className="py-3 bg-slate-900 rounded-full text-white mt-3 w-full">
									<span>Search</span>
								</button>
							</form>
						</motion.div>
					)}
				</AnimatePresence>

				{mobileMenuOpen && (
					<div className="absolute right-0 h-screen w-screen top-0 bg-white p-5 ease-in-out duration-300" style={{ zIndex: "60" }}>
						<div>
							<div className="flex justify-end">
								<button onClick={() => setMobileMenuOpen(false)}>
									<FontAwesomeIcon icon={faClose} />
								</button>
							</div>
							<ul>
								<li className="p-5 hover:bg-slate-100 ease-in-out duration-300 cursor-pointer" onClick={openSearchBar}>
									Search
								</li>
								{mobileNavigation.map((item, idx) => {
									return (
										<a key={idx} onClick={() => router.push(item.href)}>
											<li className="p-5 hover:bg-slate-100 ease-in-out duration-300">{item.name}</li>
										</a>
									);
								})}
							</ul>
							<li className="p-5 hover:bg-slate-100 ease-in-out duration-300 list-none cursor-pointer" onClick={openCartCallback}>
								Cart
							</li>
						</div>
					</div>
				)}

				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a key={item.name} className="text-sm cursor-pointer leading-6 text-slate-900" onClick={() => router.push(item.href)}>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
					<form className="h-full" method="get" action="/shop">
						<input
							onChange={(e) => setSearchInput(e.target.value)}
							value={searchInput}
							className="p-2 px-5 rounded-full text-sm border border-slate-300"
							placeholder="search"
							type="text"
							name="search"
							id="search"
						/>
						<button className="px-5 py-3 rounded-full ml-2 text-white bg-slate-900 text-xs h-full">
							<span>Search</span>
						</button>
					</form>
					<button onClick={openCartCallback} className="ml-5">
						<FontAwesomeIcon icon={faCartShopping} />
					</button>
				</div>
			</nav>

			{openCart && (
				<AnimatePresence>
					<SideCart />
				</AnimatePresence>
			)}
		</header>
	);
};

export default Navbar;
