import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPokemonSpecies } from "../api/pokemonAPI"

export default function PokemonAbout() {
	const { pokemon_id } = useParams()

	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonSpecies", pokemon_id],
		queryFn: () => getPokemonSpecies(parseInt(pokemon_id!)),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	console.log(data)

	return (
		<div>
			<div>{data.form_descriptions[0]?.description}</div>
		</div>
	)
}
