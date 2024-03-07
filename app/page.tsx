"use client"
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
	const [carsList, setCarsList] = useState<any>([]);

	useEffect(() => {
		carList();
	}, []);

	const carList = async () => {
		const result:any = await getCarsList();
		//console.log(result?.carLists);
		setCarsList(result?.carLists);
	};

	return (
		<div className="p-5 sm:px-10 md:px-20">
			<Hero />
			<SearchInput />
			<CarsFilterOption />
			<CarsList carsList={carsList} />
		</div>
	);
}
