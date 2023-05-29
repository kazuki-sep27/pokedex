import { useState } from "react"
import tab from "../store/tab.json"
import PokemonEvolution from "./PokemonEvolution"
import PokemonMove from "./PokemonMove"
import PokemonAbout from "./PokemonAbout"

export default function PokemonTap() {
	const [currentTab, setCurrentTab] = useState("about")

	const currentTabClass = "text-black border-b-2 border-blue-500"

	tab.forEach((element) => {
		element.class = "text-gray-400 pb-2 cursor-pointer"
		if (element.name === currentTab) {
			element.class = currentTabClass
		}
	})

	return (
		<div className="relative">
			<div className="rounded-full bg-white w-full pt-8 -mt-16 ">
				<div className="relative h-24">
					<div className="grid grid-cols-3 gap-4 content-start text-center text-gray-400 w-full px-5 py-8">
						{tab.map((element, index) => {
							return (
								<div
									key={index}
									className={`${element.class} pb-2 h-full text-lg`}
									onClick={() => setCurrentTab(element.name)}
								>
									{element.text}
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="text-black px-5 h-full relative">
				{currentTab === "about" && <PokemonAbout />}
				{currentTab === "evolution" && <PokemonEvolution />}
				{currentTab === "moves" && <PokemonMove />}
			</div>
		</div>
	)
}
