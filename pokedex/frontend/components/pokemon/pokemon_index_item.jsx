import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <li className="pokemon-item">
          <Link to={`/pokemon/${this.props.pokemon.id}`}>
            <h6 className="pokemon-index-name">{this.props.pokemon.name}</h6>
            <img className="poke-thumbs" src={this.props.pokemon.image_url}/>
          </Link>
        </li>
      </div>
    );

  }

}

export default PokemonIndexItem;
