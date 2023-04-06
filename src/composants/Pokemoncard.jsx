import React, { Component } from 'react';
import "../styles/pokemoncard.css";
import Type from "./Types.jsx";
import PokemonDialog from "./PokemonContent.jsx";
import ReactModal from "react-modal";

class Pokemoncard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { id, name, image, typeP, typeS } = this.props;

    return (
      <div className="pokedexcards">
        <div onClick={this.handleOpen} className="card">
          <i className="pokedexid">N° : {id}</i><br />
          <h2 className="pokedexnom">{name}</h2>
          <img src={image} alt="pokemon" />
          <Type pType={typeP} sType={typeS} />
        </div>
        <ReactModal isOpen={this.state.open} onRequestClose={this.handleClose}>
          <PokemonDialog id={id}></PokemonDialog>
        </ReactModal>
      </div>
    );
  }
}

export default Pokemoncard;

