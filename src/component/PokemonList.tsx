import PokemonCard from "./PokemonCard"

export default function PokemonList() {
	return (
		<div className="py-5 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
		</div>
	)
}
