const pokemonData = [
    {
        name: "Bulbasaur",
        type: "Grass / Poison",
        attacks: ["Vine Whip", "Razor Leaf", "Poison Powder"],
        description: "Bulbasaur is a dual-type Pokemon, Grass and Poison. It has a plant bulb on its back that grows as it evolves.",
        evolvesTo: "Ivysaur"
    },
    {
        name: "Ivysaur",
        type: "Grass / Poison",
        attacks: ["Vine Whip", "Razor Leaf", "Poison Powder"],
        description: "Ivysaur is the evolved form of Bulbasaur. It is a dual-type Pokemon, Grass and Poison, known for the large plant bulb on its back.",
        evolvesTo: "Venusaur"
    },
    {
        name: "Venusaur",
        type: "Grass / Poison",
        attacks: ["Vine Whip", "Razor Leaf", "Poison Powder", "Solar Beam"],
        description: "Venusaur is the final evolved form of Bulbasaur. It is a dual-type Pokemon, Grass and Poison, known for its large flower on its back and powerful grass-based attacks."
    },
    {
        name: "Charmander",
        type: "Fire",
        attacks: ["Ember", "Flamethrower", "Scratch"],
        description: "Charmander is a small Fire-type Pokemon. It is very friendly and has a tail that burns with fire, which goes out when it's sad or unwell.",
        evolvesTo: "Charmeleon"
    },
    {
        name: "Charmeleon",
        type: "Fire",
        attacks: ["Flamethrower", "Dragon Rage", "Ember"],
        description: "Charmeleon is the evolved form of Charmander. It is a Fire-type Pokemon known for its fiery temper and powerful flame attacks.",
        evolvesTo: "Charizard"
    },
    {
        name: "Charizard",
        type: "Fire / Flying",
        attacks: ["Flamethrower", "Dragon Claw", "Fire Spin"],
        description: "Charizard is the final evolved form of Charmander. It is a Fire and Flying-type Pokemon known for its powerful flame-based attacks and ability to fly."
    },
    {
        name: "Squirtle",
        type: "Water",
        attacks: ["Water Gun", "Hydro Pump", "Tackle"],
        description: "Squirtle is a Water-type Pokemon known for its ability to shoot water at enemies.",
        evolvesTo: "Wartortle"
    },
    {
        name: "Wartortle",
        type: "Water",
        attacks: ["Water Gun", "Hydro Pump", "Aqua Tail"],
        description: "Wartortle is the evolved form of Squirtle. It is a Water-type Pokemon known for its powerful water-based attacks and strong shell.",
        evolvesTo: "Blastoise"
    },
    {
        name: "Blastoise",
        type: "Water",
        attacks: ["Hydro Pump", "Water Pulse", "Ice Beam"],
        description: "Blastoise is the final evolved form of Wartortle. It is a Water-type Pokemon known for its immense water cannon on its back and powerful water-based attacks."
    }
];

function searchPokemon() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase();

    const searchResults = pokemonData.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm);
    });

    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = "<p>No matching Pokemon found.</p>";
        return;
    }

    results.forEach(pokemon => {
        const pokemonElement = document.createElement("div");
        pokemonElement.classList.add("pokemon");

        let evolutionInfo = "";
        if (pokemon.evolvesTo) {
            evolutionInfo = `<p>Evolves into: <a href="pokemons/${pokemon.evolvesTo.toLowerCase()}.html">${pokemon.evolvesTo}</a></p>`;
        }

        pokemonElement.innerHTML = `
            <img src="pokemons/img/${pokemon.name.toLowerCase()}.png" alt="${pokemon.name}">
            <div class="pokemon-info">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <p>Attacks: 
                    <ul>
                        ${pokemon.attacks.map(attack => `<li>${attack}</li>`).join("")}
                    </ul>
                </p>
                <p>Description: ${pokemon.description}</p>
                ${evolutionInfo}
                <p><a href="pokemons/${pokemon.name.toLowerCase()}.html">More Information</a></p>
            </div>
        `;

        container.appendChild(pokemonElement);
    });
}
