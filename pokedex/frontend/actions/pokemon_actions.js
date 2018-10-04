import React from 'react';
import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = payload => ({
  type: RECEIVE_ALL_POKEMON,
  payload
});
