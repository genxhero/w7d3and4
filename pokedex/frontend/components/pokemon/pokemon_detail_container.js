import React from 'react';
import {selectOnePokemon} from '../../reducers/selectors';
import {requestOnePokemon} from '../../actions/pokemon_actions';
import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {

  return (  {pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]});

};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
