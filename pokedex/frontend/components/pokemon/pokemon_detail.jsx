import React from 'react';


class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.pokemonId != this.props.pokemonId){
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){

    if (this.props.pokemon === undefined) {
      return "Loading";
    }

    return (
      <div className="poke-file">
        <h1>{this.props.pokemon.name}</h1>
          <img className="poke-splash" src={this.props.pokemon.image_url}/>
          <ul className="move-list" >
               {this.props.pokemon.moves.map(move => <li>{move}</li>)}
          </ul>
          <ul className="statblock">
            <li>Attack: {this.props.pokemon.attack}</li>
            <li>Defense: {this.props.pokemon.defense}</li>
          </ul>
      </div>
    );
  }
}

export default PokemonDetail;

//
