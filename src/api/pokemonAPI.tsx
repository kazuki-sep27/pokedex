import axios from "axios"
import PokemonInfo from "../interface/pokemonInfo"

export async function getPokemonList<PokemonResponse>({
	pageParam = "",
}): Promise<PokemonResponse> {
	let url = pageParam
	if (pageParam === "") {
		url = "https://pokeapi.co/api/v2/pokemon"
	}

	return axios.get<PokemonResponse>(url).then((res) => {
		return res.data
	})
}

export function getPokemonByUrl(url: string): Promise<PokemonInfo> {
	return axios.get<PokemonInfo>(url).then((res) => {
		return res.data
	})
}

/*
async ({ pageParam = 0 }) => {
	const res = await axios.get('/api/projects?cursor=' + pageParam)
	return res.data
  },
  {
	getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
	getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  },
*/
