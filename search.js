import { fillPokemonCard, getPokemonByNameOrId } from './const.js';
import { Pokemon } from './classes.js';
const form = document.querySelector('.search');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
        pokemonName: { value },
    } = event.target;
    // 1 - empty input
    // 2 - case sensetive
    // 3 - alert if no pokemon

    if (!value) {
        alert('Введите имя покемона плиииз');
    } else {
        try {
            const pokemon = await getPokemonByNameOrId(value.toLowerCase());
            fillPokemonCard(pokemon);
        } catch (error) {
            alert(error.message);
        }

        // fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        //     .then((response) => response.json())
        //     .then((result) => {
        //         const {
        //             name,
        //             base_experience: experience,
        //             // abilities,
        //             abilities: rawAbilities,
        //             sprites: { front_default: image },
        //             // sprites: { front_default },
        //         } = result;
        //         const serailizedAbilities = rawAbilities.map((el) => {
        //             const {
        //                 ability: { name },
        //             } = el;
        //             return name;
        //         });
        //         const pokemon = new Pokemon(name, serailizedAbilities, experience, image);
        //         fillPokemonCard(pokemon);
        //     })
        //     .catch((err) => {
        //         alert('Такого покемона нет' + err.message);
        //     });
    }
});
