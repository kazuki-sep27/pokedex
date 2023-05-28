export interface PokemonForm {
	name: string
	image: string
	trigger: string
	detail: string
}

export interface Evolution {
	form: PokemonForm[]
}
