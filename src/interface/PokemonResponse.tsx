import PokemonUrl from "./pokemonUrl"

export default interface PokemonResponse {
	count: number
	next: string
	previous: string
	results: PokemonUrl[]
	status: string
	error: string
}
