import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount(){
     this.props.requestAllPokemon();
   }

   render () {
     const pokeProps = this.props;
       const pokemonItems = pokeProps.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

     return (
      <div className="pokemon-index">
        <ul className="pokemon-list">
            {pokemonItems}
          </ul>
        <Route exact path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>


     </div>
   );
   }
}
//


export default PokemonIndex;
