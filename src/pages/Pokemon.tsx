import PokemonData from "../component/PokemonData"
import PokemonTap from "../component/PokemonTap"

export default function Pokemon() {
	return (
		<div className="container max-w-screen-lg mx-auto px-0">
			<PokemonData />
			<PokemonTap />
		</div>
	)
}
