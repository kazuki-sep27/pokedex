import PokemonCard from "./PokemonCard"

type PokemonInfo = {
	pokemon_name: string
	pokemon_image: string
	pokemon_element: string[]
}

export default function PokemonList() {
	const pokemon: PokemonInfo = {
		pokemon_name: "Rattata",
		pokemon_image:
			"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/19.svg",
		pokemon_element: ["Ice", "Fire", "Water"],
	}
	return (
		<div className="py-5 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
			<PokemonCard {...pokemon} />
		</div>
	)
}
