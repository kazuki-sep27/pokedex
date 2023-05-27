import PokemonInfo from "../interface/PokemonInfo"

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

function getPokemonObjectInfo(data: any): PokemonInfo {
	const pokemon_id = data?.id
	const pokemon_name = data?.name
	const pokemon_image = data?.sprites.front_default
	const pokemon_element = data?.types.map((type: any) => {
		return type.type.name
	})

	const card_color = getColorByElement(pokemon_element[0])

	const pokemon_object: PokemonInfo = {
		id: pokemon_id,
		name: pokemon_name,
		image: pokemon_image,
		types: pokemon_element,
		card_color: card_color,
	}

	return pokemon_object
}

export { getPokemonObjectInfo }
