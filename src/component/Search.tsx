import { useRef } from "react"

export default function Search() {
	const searchRef = useRef<HTMLInputElement>(null)
	return (
		<div>
			<input
				id="search"
				ref={searchRef}
				className="py-2 px-5 border border-gray-300 focus:border-red-500 outline-none rounded-full w-full placeholder-gray-300"
				placeholder="Search Pokemon, Move, Ability etc."
			/>
		</div>
	)
}
