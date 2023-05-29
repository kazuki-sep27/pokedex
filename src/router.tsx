import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/pokemon/:pokemon_id",
		element: <Pokemon />,
	},
])
