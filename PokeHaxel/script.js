const pokemonData = [
    {
        name: "Charmander",
        type: "Fire",
        attacks: ["Ember", "Flamethrower", "Scratch"],
        description: "Charmander is a small Fire-type Pokemon. It is very friendly and has a tail that burns with fire, which goes out when it's sad or unwell.",
        evolvesTo: "Charmeleon"
    },
    {
        name: "Squirtle",
        type: "Water",
        attacks: ["Water Gun", "Hydro Pump", "Tackle"],
        description: "Squirtle is a Water-type Pokemon known for its ability to shoot water at enemies.",
        evolvesTo: "Wartortle"
    },
    {
        name: "Bulbasaur",
        type: "Grass / Poison",
        attacks: ["Vine Whip", "Razor Leaf", "Poison Powder"],
        description: "Bulbasaur is a dual-type Pokemon, Grass and Poison. It has a plant bulb on its back that grows as it evolves.",
        evolvesTo: "Ivysaur"
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
            </div>
        `;

        container.appendChild(pokemonElement);
    });
}
