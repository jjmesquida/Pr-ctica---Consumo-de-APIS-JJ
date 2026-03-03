const pokemonListDiv = document.getElementById('pokemonList');
const pokemonDetailDiv = document.getElementById('pokemonDetail');
const searchInput = document.getElementById('searchInput');
const popularListDiv = document.getElementById('popularList');

let allPokemons = [];

const popularRanking = [
    { name: "pikachu", rank: 1 },
    { name: "charizard", rank: 2 },
    { name: "mewtwo", rank: 3 },
    { name: "bulbasaur", rank: 4 },
    { name: "squirtle", rank: 5 }
];

async function loadPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    allPokemons = await Promise.all(
        data.results.map(async p => {
            const r = await fetch(p.url);
            return await r.json();
        })
    );

    displayPokemonList(allPokemons);
    displayPopular();
}

function displayPokemonList(pokemons){
    pokemonListDiv.innerHTML = '';
    pokemons.forEach(p => {
        const div = document.createElement('div');
        div.className = 'pokemon-item';
        div.dataset.id = p.id;
        div.innerHTML = `<img src="${p.sprites.front_default}" width="50"><span>${capitalize(p.name)}</span>`;
        div.addEventListener('click', ()=>showPokemonDetail(p,div));
        pokemonListDiv.appendChild(div);
    });
}

function showPokemonDetail(pokemon,itemDiv){
    document.querySelectorAll('.pokemon-item').forEach(i=>i.classList.remove('active'));
    itemDiv.classList.add('active');
    pokemonDetailDiv.innerHTML = `
        <img src="${pokemon.sprites.front_default}">
        <div class="pokemon-name">${capitalize(pokemon.name)}</div>
        <div>ID: ${pokemon.id}</div>
        <div class="pokemon-types">
            ${pokemon.types.map(t=>`<span class="pokemon-type type-${capitalize(t.type.name)}">${capitalize(t.type.name)}</span>`).join('')}
        </div>
        <div class="pokemon-info">
            Altura: ${pokemon.height} | Peso: ${pokemon.weight}
        </div>
    `;
}

function displayPopular(){
    popularListDiv.innerHTML = '';
    popularRanking.forEach(p => {
        const pokemon = allPokemons.find(x => x.name === p.name);
        if(!pokemon) return;

        const div = document.createElement('div');
        div.className = 'popular-card';
        div.innerHTML = `
            <div class="popular-rank">#${p.rank} Popularidad</div>
            <img src="${pokemon.sprites.front_default}">
            <h3>${capitalize(pokemon.name)}</h3>
            <div class="pokemon-types">
                ${pokemon.types.map(t=>`<span class="pokemon-type type-${capitalize(t.type.name)}">${capitalize(t.type.name)}</span>`).join('')}
            </div>
        `;
        popularListDiv.appendChild(div);
    });
}

searchInput.addEventListener('input', ()=>{
    const q = searchInput.value.toLowerCase();
    const filtered = allPokemons.filter(p => 
        p.name.includes(q) || p.id.toString() === q
    );
    displayPokemonList(filtered);
});

function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

loadPokemons();