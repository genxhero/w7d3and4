import values from 'lodash/values';

export const selectAllPokemon = (state) => values(state.entities.pokemon);
// export const selectOnePokemon = (state) => state.entities.pokemon;
