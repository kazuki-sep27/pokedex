import { useQuery } from "@tanstack/react-query"
import { Move } from "../interface/PokemonInfo"
import { getPokemonMove } from "../api/pokemonAPI"
import "../assets/css/icons.css"

export default function PokemonMoveDetail({ move }: Move) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonMove", move.name],
		queryFn: () => getPokemonMove(move.name!),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	return (
		<li className="py-3 sm:py-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 my-3 me-3">
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0"></div>
				<div className="flex-1 min-w-0">
					<p className="text-lg font-bold truncate dark:text-white">
						{data?.name.toUpperCase()}
					</p>
					<p className="text-sm font-thin text-gray-500 dark:text-gray-400 py-3">
						{data?.effect_entries[0]?.short_effect}
					</p>
					<p className="text-sm font-medium grid grid-cols-2 md:grid-cols-none md:flex">
						<span className="me-5">
							{data.power !== null ? "Power: " + data?.power : "Power: -"}
						</span>
						<span className="me-5">
							{data.accuracy !== null
								? "Accuracy: " + data?.accuracy
								: "Accuracy: -"}
						</span>
						<span className="me-5">
							{data.pp !== null ? "PP: " + data?.accuracy : "PP: -"}
						</span>
						<span className="me-5">
							{data.pp !== null
								? "Effect_chance: " + data?.accuracy
								: "Effect_chance: -"}
						</span>
					</p>
				</div>
				<div
					className={`${data.type.name} inline-flex items-center text-base font-semibold text-gray-900 dark:text-white icon`}
				>
					<img src={`/images/icons/${data.type.name}.svg`} />
				</div>
			</div>
		</li>
	)
}
