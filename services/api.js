const axios = require('axios');

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

async function api() {
  let promises = [];

  for(let i = 1; i <= 57; i++) {
    promises.push(pokeApi.get(`/pokemon/${i}`));

  }

    const responses = await Promise.all(promises);

    const pokemons = responses.map(response => {
      const { data } = response;

      return {
        name: data.name,
        imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`,
        abilities: data.abilities.map(abilities => abilities.ability.name),
        types: data.types.map(types => types.type.name),
        imageType: `/typeImages/${data.types.map(types => types.type.name)[0]}.png`
      };
    });

    return pokemons
}

export default api()