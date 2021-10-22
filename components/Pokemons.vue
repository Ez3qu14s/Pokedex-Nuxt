<template>
  <div class="container pokemons w-100">
    <div class="card text-center" v-for="pokemon in pokemons" :key="pokemon.id">
      <img :class="'card-img-top ' + pokemon.types[0]+'Image'" alt="Card Image top">
      <div class="card-body">
        <img class="image-pokemon" :src="pokemon.imageURL" :alt="pokemon.name">
        <div class="informations">
          <h3>{{pokemon.name}}</h3>
          <div class="pokemon-informations">
            <section>
              <div class="types" v-for="type of pokemon.types" :key="type">
                <span :class="type">{{type}}</span>
              </div>
              
            </section>
            
            <section>
              <div v-for="abilities of pokemon.abilities" :key="abilities">
                <span>{{abilities}}</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../services/api';
  

  export default {
    data() {
      return {
        pokemons: [],
      }
    },
    
    created() {
      api.then(value => {
        for(let val of value) {
            this.pokemons.push(val)
        }
      }).catch(error => {
        return error
      })
    },

    }  
</script>

<style>
  @import url('./styles/Cards.css');
  @import url('./styles/Types.css');
  @import url('./styles/TypePokeImages.css');
</style>