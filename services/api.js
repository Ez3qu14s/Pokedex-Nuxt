const axios = require('axios').default;

axios.get('https://pokeapi.co/api/v2/')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error("Erro! " + err)
    })