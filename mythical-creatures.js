const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

// - Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
const firstWaterType = mythicalCreatures.find(
	function (water) {
		return water.type === "Water"
	})
console.log(firstWaterType.name);

// - Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
const griffinIndex = mythicalCreatures.findIndex(
	function (griffin) {
		return griffin.name === "Griffin";
	})
console.log('Griffin Index = ' + griffinIndex)

// - Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".
const firstLastInForest = mythicalCreatures.find(
	function (EnchantedForest) {
		return EnchantedForest.lastSeen === "Enchanted Forest";
	})
console.log(firstLastInForest.name + ' was the first creature last seen if Enchanted Forest.')