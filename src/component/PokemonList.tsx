import React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getPokemonList } from "../api/pokemonAPI"
import { useInView } from "react-intersection-observer"

import PokemonCard from "./PokemonCard"
import PokemonResponse from "../interface/PokemonResponse"

export default function PokemonList() {
	const { ref, inView } = useInView()

	React.useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	const {
		data,
		isLoading,
		isError,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useInfiniteQuery<PokemonResponse>({
		queryKey: ["getAllPokemonList"],
		queryFn: getPokemonList,
		getNextPageParam: (lastPage) => lastPage.next,
	})

	if (isLoading) return <h1>Loading...</h1>
	if (isError) return <h1>Something Went Wrong !!!</h1>

	return (
		<>
			<div className="py-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data?.pages.map((page) => {
					return page.results.map((result) => {
						const key = result.url.split("/")[6]
						return <PokemonCard key={key} name={result.name} url={result.url} />
					})
				})}
			</div>
			<div>
				<button
					ref={ref}
					key="nextPageButton"
					onClick={() => fetchNextPage()}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Loading more..."
						: hasNextPage
						? "Load Newer"
						: "Nothing more to load"}
				</button>
			</div>
		</>
	)
}
