const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//an array of pokémon objects where the id is evenly divisible by 3.
const pkmDvi3 = pokemon.filter(el => el.id % 3 === 0);

//an array of pokémon objects that are "fire" type.
const pkmFire = pokemon.filter(el => el.types.includes("fire"));
const pkmFire2 = pokemon.find(el => el.types.includes("fire"));

//an array of pokémon objects that have more than one type.
const pkmMulti = pokemon.filter(el => el.types.length > 1);

//an array with just the names of the pokémon.
const pkmNames = pokemon.map(el => el.name);

//an array with just the names of pokémon with an id greater than 99.
const pkmNames99 = pokemon.filter(el => el.id > 99).map(el => el.name);

//an array with just the names of the pokémon whose only type is poison.
const pkmNamesPoison = pokemon.filter(el => el.types.length === 1 && el.types.includes("poison")).map(el => el.name);

//an array containing just the first type of all the pokémon whose second type is "flying".
const pkmFly = pokemon.filter(el => el.types[1] === "flying").map(el => el.types[0]);

//a count of the number of pokémon that are "normal" type.
const pkmNormal = pokemon.filter(el => el.types.includes("normal")).length;

//an array with all pokemon except the pokemon with the id of 148.
const pkmNot148 = pokemon.filter(el => el.id !== 148);

//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy".
const pkmFairy = pokemon.map(el => el.id === 35 ? {...el, types: ["fairy"]} : el);
