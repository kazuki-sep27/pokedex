import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getEvolutionChain } from "../api/pokemonAPI"
import { getEvolutionChainObject } from "../utils/toolkit"

export default function PokemonEvolution() {
	const { pokemon_id } = useParams()

	const { data, isLoading, isError } = useQuery({
		queryKey: ["getEvolutionChain", pokemon_id],
		queryFn: () => getEvolutionChain(parseInt(pokemon_id!)),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	const evolution_form = getEvolutionChainObject(
		data.chain.species,
		data.chain.evolves_to
	)

	return (
		<div>
			<div className="text-2xl">Evolution Chain</div>

			{evolution_form.form.map((pokemon, index, rows) => {
				if (index === rows.length - 1) return null
				return (
					<div className="flex items-center justify-between md:px-5 pt-3 ">
						<div className="md:px-8 sm:px-0 text-center text-lg">
							<div className="bg-pokeball">
								<img src={pokemon.image} alt="pokemon" className="w-32 h-32" />
							</div>
							<div className="">{pokemon.name}</div>
						</div>
						<div className="bg-right-arrow w-72">
							<div className="md:text-4xl text-3xl text-center">
								{rows[index + 1].detail}
							</div>
						</div>
						<div className="md:px-8 sm:px-0 text-center text-lg">
							<div className="bg-pokeball">
								<img
									src={rows[index + 1].image}
									alt="pokemon"
									className="w-32 h-32"
								/>
							</div>
							<div className="text-sm">{rows[1].name}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
