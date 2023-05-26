import { useQuery } from "@tanstack/react-query"
import { getPokemonByUrl } from "../api/pokemonAPI"
import PokemonUrl from "../interface/pokemonUrl"
import PokemonInfo from "../interface/pokemonInfo"
import { getColorByElement } from "../utils/color"

export default function PokemonCard({ name, url }: PokemonUrl) {
	const { data, isLoading, isError } = useQuery<PokemonInfo>({
		queryKey: ["getPokemonByUrl", name],
		queryFn: () => getPokemonByUrl(url),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	const pokemon_name = name
	const pokemon_image = data?.sprites.front_default
	const pokemon_element = data?.types.map((type) => {
		return type.type.name
	})

	const cardColor = getColorByElement(pokemon_element[0])

	return (
		<div className={`${cardColor} rounded-3xl -z-10`}>
			<div className="flex justify-between h-22 text-white bg-no-repeat bg-right bg-contain py-5 px-5 relative overflow-hidden">
				<img
					src="/images/poke_ball_bg.svg"
					className="absolute -right-12 top-10 h-32 -z-10 opacity-80"
				/>
				<div>
					<div className="w-full text-2xl mb-2">{pokemon_name}</div>
					<div className="grid grid-rows-2 grid-flow-col gap-2">
						{pokemon_element.map((element, index) => {
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
					<img src={pokemon_image} className="h-24" />
				</div>
			</div>
		</div>
	)
}
