import { Evolution, PokemonForm } from "../interface/PokemonEvolution"
import {
	EvolvesTo,
	Species,
	EvolutionDetail,
} from "../interface/PokemonEvolutionChain"
import { PokemonInfo } from "../interface/PokemonInfo"
import PokemonObject from "../interface/PokemonOject"

function getPokemonObjectInfo(data: PokemonInfo): PokemonObject {
	const pokemon_id = data?.id
	const pokemon_name = data?.name
	const pokemon_image = data?.sprites?.other?.dream_world?.front_default
	const pokemon_element = data?.types.map((type: any) => {
		return type.type.name
	})

	const pokemon_object: PokemonObject = {
		id: pokemon_id,
		name: pokemon_name,
		image: pokemon_image,
		types: pokemon_element,
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
