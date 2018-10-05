import React from 'react';
import {RECEIVE_ONE_POKEMON, RECEIVE_ALL_POKEMON }  from '../actions/pokemon_actions';

 const pokemonReducer = (state={}, action) => {
  Object.freeze(state);
//  debugger;
  switch(action.type) {
  case RECEIVE_ALL_POKEMON:
       return action.payload;
  case RECEIVE_ONE_POKEMON:
      // debugger
       return {[action.payload.pokemon.id]: action.payload.pokemon};
  default:
    return state;
  }
};

export default pokemonReducer;
