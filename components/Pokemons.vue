<template>
  <div class="container pokemons w-100">
    <p v-if="$fetchState.pending">Fetching Pokemons...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="w-100 d-flex flex-wrap justify-content-between">
      <div v-for="pokemon of pokemons.results" :key="pokemon" class="card text-center">
        <img class="card-img-top" src="../static/background.svg">
        <div class="card-body">
          <img v-bind:src="image" alt="">
          <h3 class="card-title">{{ pokemon.name }}</h3>
        </div>
      </div>
  </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        pokemons: [],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      }
    },
    
    async fetch() {
      this.pokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/`, 
      ).then(res => res.json())
    }
  }
</script>

<style>
  @import url('./styles/Cards.css');
</style>