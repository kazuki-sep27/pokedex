export interface PokemonForm {
	name: string
	image: string
	from?: PokemonForm
	detail?: string
}

export interface Evolution {
	form: PokemonForm[]
}
