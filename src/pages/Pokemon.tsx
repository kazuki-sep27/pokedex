import { useParams } from "react-router-dom"
import PokemonData from "../component/PokemonData"
import PokemonTap from "../component/PokemonTap"

export default function Pokemon() {
	const { pokemon_name } = useParams()

	return (
		<div className="container max-w-screen-lg mx-auto px-0">
			<PokemonData key={pokemon_name} pokemon_name={pokemon_name!} />
			<PokemonTap />
		</div>
	)
}
