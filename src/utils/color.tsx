function getColorByElement(element: string): string {
	if (element === "Normal") return "bg-gray-400"
	if (element === "Fighting") return "bg-red-800"
	if (element === "Flying") return "bg-blue-500"
	if (element === "Poison") return "bg-purple-500"
	if (element === "Ground") return "bg-yellow-800"
	if (element === "Rock") return "bg-gray-800"
	if (element === "Bug") return "bg-green-800"
	if (element === "Ghost") return "bg-purple-800"
	if (element === "Steel") return "bg-gray-800"
	if (element === "Grass") return "bg-green-500"
	if (element === "Psychic") return "bg-purple-500"
	if (element === "Ice") return "bg-blue-300"
	if (element === "Dragon") return "bg-blue-900"
	if (element === "Dark") return "bg-black"
	if (element === "Fairy") return "bg-pink-500"
	if (element === "Electric") return "bg-yellow-800"
	if (element === "Fire") return "bg-red-500"
	if (element === "Water") return "bg-blue-800"
	return "bg-gray-500"
}

export { getColorByElement }
