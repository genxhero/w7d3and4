import React from 'react';
import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const itemReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return {[action.payload.pokemon.id]: action.payload.pokemon};

    default:
      return state;

  }

};

export default itemReducer;
