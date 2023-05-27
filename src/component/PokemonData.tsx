import { useQuery } from "@tanstack/react-query"
import { getPokemonByUrl } from "../api/pokemonAPI"
import PokemonProps from "../interface/PokemonProp"
import { getPokemonObjectInfo } from "../utils/toolkit"
import PokemonInfo from "../interface/PokemonInfo"
import { useNavigate } from "react-router-dom"

export default function PokemonData({ pokemon_name }: PokemonProps) {
	const navigate = useNavigate()
	const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_name

	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonByUrl", pokemon_name],
		queryFn: () => getPokemonByUrl(url),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	const pokemon: PokemonInfo = getPokemonObjectInfo(data)

	function handleClickBack(): void {
		navigate(`/`)
	}

	return (
		<div className={`${pokemon.card_color} p-3 relative`}>
			<div
				key="topNav"
				onClick={() => handleClickBack()}
				className="cursor-pointer"
			>
				<img src="/images/back.svg" />
			</div>
			<div className="flex justify-between text-white py-3">
				<div className="text-4xl">{pokemon.name}</div>
				<div className="text-2xl">#{("00" + pokemon.id).slice(-3)}</div>
			</div>
			<div className="flex gap-2 text-white w-full">
				{pokemon.types.map((element, index) => {
					return (
						index < 6 && (
							<div
								key={element}
								className="rounded-full bg-slate-50 bg-opacity-30 flex justify-center items-center mt-2 w-20"
							>
								<span>{element}</span>
							</div>
						)
					)
				})}
			</div>
			<div className="flex justify-center relative">
				<img src={pokemon.image} className="h-48 z-20 -mt-5" />
			</div>
		</div>
	)
}
