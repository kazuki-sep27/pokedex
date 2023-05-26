interface PokemonSprite {
	front_default: string
}

interface PokemonTypes {
	type: {
		name: string
		url: string
	}
}

export default interface PokemonInfo {
	name: string
	sprites: PokemonSprite
	types: PokemonTypes[]
}
