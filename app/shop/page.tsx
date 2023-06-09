"use client";

import { useEffect, useState } from "react";

import SideFilter from "@/app/components/shop/sideFilter";
import TopBar from "@/app/components/shop/topBar";
import { useRouter, useSearchParams } from "next/navigation";
import ShoeCard from "@/app/components/shop/shoeCard";

import { Shoes } from "./[brand]/page";

export default function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [shoes, setShoes] = useState<Shoes[]>([]);
	const [cache, setCache] = useState<Shoes[]>([]);
	const [genders, setGenders] = useState<string[]>([]);
	const [colors, setColors] = useState<string[]>([]);
	const [types, setTypes] = useState<string[]>([]);
	const [selectedGender, setSelectedGender] = useState<string>("All");
	const [selectedColor, setSelectedColor] = useState<string>("All");
	const [selectedType, setSelectedType] = useState<string>("All");


	useEffect(() => {
		const getUniqueValues = (key: string, arr: any[]) => {
			const distinct: any[] = [];
			for (const item of arr) {
				if (distinct.includes(item[key])) continue;
				distinct.push(item[key]);
			}
			return distinct;
		};

		if (searchParams.get("search")) {
			fetch(`/api/shoes?search=${searchParams.get("search")}`)
				.then((res) => res.json())
				.then((json) => {
					const genders = getUniqueValues("gender", json);
					const colors = getUniqueValues("color", json);
					const types = getUniqueValues("type", json);
					setShoes(json);
					setCache(json);
					setGenders(["All", ...genders]);
					setColors(["All", ...colors]);
					setTypes(["All", ...types]);
				});
		} else {
			fetch(`/api/shoes`)
				.then((res) => res.json())
				.then((json) => {
					const genders = getUniqueValues("gender", json);
					const colors = getUniqueValues("color", json);
					const types = getUniqueValues("type", json);
					setShoes(json);
					setCache(json);
					setGenders(["All", ...genders]);
					setColors(["All", ...colors]);
					setTypes(["All", ...types]);
				});
		}
	}, []);

	useEffect(() => {
		const filterByType = () => {
			const data = cache.filter((item) => item.type === selectedType || selectedType === "All");
			return data;
		};

		const filterByGender = (data: Shoes[]) => {
			const filtered = data.filter((item) => item.gender === selectedGender || selectedGender === "All");
			return filtered;
		};

		const filterByColor = (data: Shoes[]) => {
			const filtered = data.filter((item) => item.color === selectedColor || selectedColor === "All");
			return filtered;
		};

		let data = filterByType();
		data = filterByGender(data);
		data = filterByColor(data);
		setShoes(data);
	}, [selectedColor, selectedGender, selectedType]);

	return (
		<>
			<TopBar title="All" />
			<main className="flex flex-col md:flex-row bg-white min-h-screen">
				<SideFilter
					genders={genders}
					colors={colors}
					types={types}
					type={selectedType}
					setType={setSelectedType}
					color={selectedColor}
					setColor={setSelectedColor}
					gender={selectedGender}
					setGender={setSelectedGender}
				/>
				<div className="w-4/5 ml-0 md:ml-10 lg:md-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
					{shoes.length > 0 ? (
						shoes.map((shoe, idx) => {
							return <ShoeCard delay={idx} key={idx} shoe={shoe} router={router} />;
						})
					) : (
						<p>No Available Shoes</p>
					)}
				</div>
			</main>
		</>
	);
}
