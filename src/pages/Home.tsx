import Header from "../component/Header"
import PokemonList from "../component/PokemonList"
import Search from "../component/Search"

export default function Home() {
	return (
		<div className="container justify-center h-screen mx-auto">
			<Header />
			<Search />
			<PokemonList />
		</div>
	)
}
