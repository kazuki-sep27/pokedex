import { useQuery } from "@tanstack/react-query"
import { getPokemonByName } from "../api/pokemonAPI"
import { getPokemonObjectInfo } from "../utils/toolkit"
import { useNavigate } from "react-router-dom"

import PokemonUrl from "../interface/PokemonUrl"
import PokemonObject from "../interface/PokemonOject"

export default function PokemonCard({ name }: PokemonUrl) {
	const navigate = useNavigate()
	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonByUrl", name],
		queryFn: () => getPokemonByName(name),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	const pokemon: PokemonObject = getPokemonObjectInfo(data)

	function handleClick(pokemon_id: number): void {
		navigate(`/pokemon/${pokemon_id}`)
	}

	return (
		<div
			className={`${pokemon.card_color} rounded-3xl cursor-pointer`}
			onClick={() => handleClick(pokemon.id)}
		>
			<div className="flex justify-between h-22 text-white bg-no-repeat bg-right bg-contain py-5 px-5 relative overflow-hidden">
				<div className="cursor-pointer">
					<div className="w-full text-2xl mb-2">{pokemon.name}</div>
					<div className="grid grid-rows-2 grid-flow-col gap-2">
						{pokemon.types.map((element, index) => {
							return (
								index < 6 && (
									<div
										key={element}
										className="rounded-full bg-slate-50 bg-opacity-20 flex justify-center items-center mt-2 text-sm w-16"
									>
										<span>{element}</span>
									</div>
								)
							)
						})}
					</div>
				</div>
				<div>
					<img
						src={pokemon.image}
						className="h-20 z-20 absolute right-5 top-12"
					/>
				</div>
				<img
					src="/images/poke_ball_bg.svg"
					className="absolute -right-12 top-10 h-32 opacity-80 z-10"
				/>
			</div>
		</div>
	)
}
