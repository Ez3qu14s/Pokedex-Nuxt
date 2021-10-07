const axios = require('axios')

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

async function api() {
  let promises = [];

  for(let i = 1; i <= 20; i++) {
    promises.push(pokeApi.get(`/pokemon/${i}`));

  }

    const responses = await Promise.all(promises);

    const pokemons = responses.map(response => {
      const { data } = response;

      return {
        name: data.name,
        imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        abilities: data.abilities.map(abilities => abilities.ability.name),
        types: data.types.map(types => types.type.name)
      };
    });

    return pokemons
}

export default api()