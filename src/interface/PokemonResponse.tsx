import PokemonUrl from "./PokemonUrl"

export default interface PokemonResponse {
	count: number
	next: string
	previous: string
	results: PokemonUrl[]
	status: string
	error: string
}
