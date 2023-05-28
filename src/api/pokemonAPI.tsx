import axios from "axios"
import PokemonInfo from "../interface/PokemonInfo"
import { EvolutionChain } from "../interface/PokemonEvolutionChain"
import { PokemonSpecies } from "../interface/PokemonSpecies"

export async function getPokemonList<PokemonResponse>({
	pageParam = "",
}): Promise<PokemonResponse> {
	let url = pageParam
	if (pageParam === "") {
		url = "https://pokeapi.co/api/v2/pokemon"
	}

	const res = await axios.get<PokemonResponse>(url)
	return res.data
}

export async function getPokemonByID(pokemon_id: number): Promise<PokemonInfo> {
	const call_url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_id

	const res = await axios.get<PokemonInfo>(call_url)
	return res.data
}

export async function getPokemonByName(
	pokemon_name: string
): Promise<PokemonInfo> {
	const call_url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_name

	const res = await axios.get<PokemonInfo>(call_url)
	return res.data
}

export async function getPokemonSpecies(
	pokemon_id: number
): Promise<PokemonSpecies> {
	const call_url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemon_id

	const res = await axios.get<PokemonSpecies>(call_url)
	return res.data
}

export async function getEvolutionChain(
	pokemon_id: number
): Promise<EvolutionChain> {
	const pokemon_species = await getPokemonSpecies(pokemon_id)
	const call_url = pokemon_species.evolution_chain.url

	const res = await axios.get<EvolutionChain>(call_url)
	return res.data
}
