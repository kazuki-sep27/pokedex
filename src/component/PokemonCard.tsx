type PokemonInfo = {
	name: string
	image: string
	element: string[]
}

export default function PokemonCard() {
	const pokemon: PokemonInfo = {
		name: "Rattata",
		image:
			"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/19.svg",
		element: ["Electric", "Fire", "Water"],
	}
	return (
		<div className="bg-green-500 rounded-3xl -z-10">
			<div className="flex justify-between h-22 text-white bg-no-repeat bg-right bg-contain py-5 px-5 relative overflow-hidden">
				<img
					src="/images/poke_ball_bg.svg"
					className="absolute -right-12 top-10 h-32 -z-10 opacity-80"
				/>
				<div>
					<div className="w-full text-2xl mb-2">{pokemon.name}</div>
					<div className="grid grid-rows-2 grid-flow-col gap-2">
						{pokemon.element.map((element, index) => {
							return (
								index < 6 && (
									<div className="rounded-full bg-slate-50 bg-opacity-20 flex justify-center items-center mt-2 text-sm w-16">
										<span>{element}</span>
									</div>
								)
							)
						})}
					</div>
				</div>
				<div>
					<img src={pokemon.image} className="h-24" />
				</div>
			</div>
		</div>
	)
}
