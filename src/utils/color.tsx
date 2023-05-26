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

export { getColorByElement }
