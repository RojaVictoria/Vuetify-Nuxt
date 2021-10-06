import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () =>({
    characters: [
        {id:"1", name: 'Rick Sanchez', src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
        {id:"2", name: 'Morty Smith', src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
        {id:"3", name: 'Summer Smith', src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
        {id:"4", name: 'Beth Smith', src: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg' },
        {id:"5", name: 'Jerry Smith', src: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' },
    ],
})