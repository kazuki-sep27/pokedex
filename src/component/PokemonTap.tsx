import { useState } from "react"
import tab from "../store/tab.json"
import PokemonEvolution from "./PokemonEvolution"
import PokemonStat from "./PokemonStat"
import PokemonMove from "./PokemonMove"

export default function PokemonTap() {
	const [currentTab, setCurrentTab] = useState("evolution")

	const currentTabClass = "text-black border-b-2 border-blue-500"

	tab.forEach((element) => {
		element.class = "text-gray-400 pb-2 cursor-pointer"
		if (element.name === currentTab) {
			element.class = currentTabClass
		}
	})

	return (
		<div className="relative">
			<div className="rounded-full bg-white absolute -top-16 w-full py-8 ">
				<div className="relative h-12">
					<div className="grid grid-cols-3 gap-4 content-start text-center text-gray-400 absolute z-30 w-full px-5">
						{tab.map((element, index) => {
							return (
								<div
									key={index}
									className={`${element.class} pb-2`}
									onClick={() => setCurrentTab(element.name)}
								>
									{element.text}
								</div>
							)
						})}
					</div>
				</div>
				<div className="text-black">
					{currentTab === "evolution" && <PokemonEvolution />}
					{currentTab === "base_stat" && <PokemonStat />}
					{currentTab === "moves" && <PokemonMove />}
				</div>
			</div>
		</div>
	)
}
