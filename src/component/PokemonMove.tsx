import { useQuery } from "@tanstack/react-query"
import { getPokemonByID } from "../api/pokemonAPI"
import { useParams } from "react-router-dom"
import PokemonMoveDetail from "./PokemonMoveDetail"
import { Move } from "../interface/PokemonInfo"

export default function PokemonMove() {
	const { pokemon_id } = useParams()

	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonByID", pokemon_id],
		queryFn: () => getPokemonByID(parseInt(pokemon_id!)),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	const pokemon_move_set = data.moves
	return (
		<div className="w-full">
			<h1>All Moves</h1>
			<div className="flow-root overflow-y-auto max-h-[32rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					{pokemon_move_set.map((move: Move) => {
						return <PokemonMoveDetail key={move.move.name} {...move} />
					})}
				</ul>
			</div>
		</div>
	)
}
