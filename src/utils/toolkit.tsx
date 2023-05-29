import { Evolution, PokemonForm } from "../interface/PokemonEvolution"
import {
	EvolvesTo,
	Species,
	EvolutionDetail,
} from "../interface/PokemonEvolutionChain"
import { PokemonInfo } from "../interface/PokemonInfo"
import PokemonObject from "../interface/PokemonOject"

function getColorByElement(element: string): string {
	element = element.toLowerCase()

	if (element === "normal") return "bg-gray-400"
	if (element === "fighting") return "bg-red-800"
	if (element === "flying") return "bg-blue-500"
	if (element === "poison") return "bg-purple-500"
	if (element === "ground") return "bg-yellow-800"
	if (element === "rock") return "bg-gray-800"
	if (element === "nug") return "bg-green-800"
	if (element === "ghost") return "bg-purple-800"
	if (element === "steel") return "bg-gray-800"
	if (element === "grass") return "bg-green-500"
	if (element === "Psychic") return "bg-purple-500"
	if (element === "Ice") return "bg-blue-300"
	if (element === "dragon") return "bg-blue-900"
	if (element === "dark") return "bg-black"
	if (element === "fairy") return "bg-pink-500"
	if (element === "electric") return "bg-yellow-800"
	if (element === "fire") return "bg-red-500"
	if (element === "water") return "bg-blue-800"
	return "bg-gray-500"
}

function getPokemonObjectInfo(data: PokemonInfo): PokemonObject {
	const pokemon_id = data?.id
	const pokemon_name = data?.name
	const pokemon_image = data?.sprites?.other?.dream_world?.front_default
	const pokemon_element = data?.types.map((type: any) => {
		return type.type.name
	})

	const card_color = getColorByElement(pokemon_element[0])

	const pokemon_object: PokemonObject = {
		id: pokemon_id,
		name: pokemon_name,
		image: pokemon_image,
		types: pokemon_element,
		card_color: card_color,
	}

	return pokemon_object
}

function getEvolutionDetail(evolution_details: EvolutionDetail): string {
	let show_detail: string = ""

	console.log(evolution_details)

	Object.entries(evolution_details).forEach((entry) => {
		const [key, value] = entry
		if (key != "trigger") {
			if (
				value !== null &&
				value !== undefined &&
				value !== "" &&
				value !== false
			) {
				if (key === "min_level") show_detail = `Level : ${value}`
				if (key === "item") show_detail = `Use Item : ${value.name}`
				if (key === "min_happiness") show_detail = `Happiness : ${value}`
				if (key === "min_beauty") show_detail = `Beauty : ${value}`
				if (key === "min_affection") show_detail = `Affection : ${value}`
				if (key === "time_of_day") show_detail = `Time : ${value}`
				if (key === "location") show_detail = `Location : ${value.name}`
			}
		}
	})

	return show_detail
}

function getPokemonForm(
	evolve: EvolvesTo,
	evolves_from: PokemonForm
): PokemonForm {
	return {
		name: evolve.species.name,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			evolve.species.url.split("/")[6]
		}.svg`,
		from: evolves_from,
		detail: getEvolutionDetail(evolve.evolution_details[0]),
	}
}

function pushPokemonForm(
	evolution_from: Evolution,
	evolves_to: EvolvesTo[],
	evolves_from: PokemonForm
): Evolution {
	evolves_to.map((evolve) => {
		const pokemon_form = getPokemonForm(evolve, evolves_from)
		evolution_from.form.push(pokemon_form)

		if (evolve.evolves_to.length > 0)
			pushPokemonForm(evolution_from, evolve.evolves_to, pokemon_form)
	})

	return evolution_from
}

function getEvolutionChainObject(
	species: Species,
	evolves_to: EvolvesTo[]
): Evolution {
	const start_form: PokemonForm = {
		name: species.name,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world//${
			species.url.split("/")[6]
		}.svg`,
	}

	let evolution_form: Evolution = {
		form: [start_form],
	}

	if (evolves_to.length > 0)
		evolution_form = pushPokemonForm(evolution_form, evolves_to, start_form)

	return evolution_form
}

export { getPokemonObjectInfo, getEvolutionChainObject }
