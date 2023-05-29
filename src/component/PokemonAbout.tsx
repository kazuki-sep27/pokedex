import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPokemonSpecies } from "../api/pokemonAPI"

export default function PokemonAbout() {
	const { pokemon_id } = useParams()

	const { data, isLoading, isError } = useQuery({
		queryKey: ["getPokemonSpecies", pokemon_id],
		queryFn: () => getPokemonSpecies(parseInt(pokemon_id!)),
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Sorry Something Went Wrong !!!</h1>

	console.log(data)

	return (
		<div>
			{data.form_descriptions[0]?.description && (
				<div className="pb-5">{data.form_descriptions[0]?.description}</div>
			)}
			<div className="md:flex gap-3 md:flex-row">
				<div className="md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							General
						</h5>
					</a>
					<div className="flex flex-row">
						<div className="w-1/3 truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Capture_Rate
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Base Happiness
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Growth Rate
							</p>
						</div>
						<div className="truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{((data.capture_rate / 255) * 100).toFixed(2)} %
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.base_happiness} / 255
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.growth_rate.name}
							</p>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 pt-5 px-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Breeding
						</h5>
					</a>
					<div className="font-normal text-gray-700 dark:text-gray-400">
						<div className="flex flex-row">
							<div className="w-1/3 truncate">
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Gender
								</p>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Egg Groups
								</p>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Hatch Counter
								</p>
							</div>
							<div className="truncate">
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{data.gender_rate === -1 ? (
										"Genderless"
									) : (
										<div className="flex gap-5">
											<div className="flex">
												<img src="/images/male.svg" className="h-6 me-2" />{" "}
												{(10 - data.gender_rate) * 10} %
											</div>
											<div className="flex">
												<img src="/images/female.svg" className="h-6 me-2" />{" "}
												{data.gender_rate * 10} %
											</div>
										</div>
									)}
								</p>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{data.egg_groups.map((egg_group) => (
										<span className="mr-2">{egg_group.name}</span>
									))}
								</p>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{((data.hatch_counter + 1) * 255).toLocaleString()}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:flex gap-3 flex-row">
				<div className="md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Special
						</h5>
					</a>
					<div className="flex flex-row">
						<div className="w-1/3 truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Baby
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Legendary
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Mythical
							</p>
						</div>
						<div className="truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.is_baby ? "Yes" : "No"}
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.is_legendary ? "Yes" : "No"}
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.is_mythical ? "Yes" : "No"}
							</p>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Other
						</h5>
					</a>
					<div className="flex flex-row">
						<div className="w-1/3 truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Generation
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Color
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Shape
							</p>
						</div>
						<div className="truncate">
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.generation.name}
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.color.name}
							</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{data.shape.name}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
