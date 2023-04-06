import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import pokedex from '../ressources/logo.png';
import Langue from "./Languages";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  header: {
    backgroundColor: "#282C34",
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  logo: {
    textAlign: "left",
  },
  searchbar: {
    padding: "10px",
    borderColor: "white",
  },
  logoPokedex: {
    width: "250px",
    height: "50px",
  },
  langue_select: {
    borderColor: "white",
  },
});

const Header = ({ searchtext, langtype }) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [searchValue, setSearchValue] = useState("");

  // eslint-disable-next-line
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    searchtext(value);
  };

  const changeSearch = (value) => {
    setSearchValue(value);
    searchtext(value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img className={classes.logoPokedex} src={pokedex} alt="logo" />
        </div>
        <div className="langue_select">
          <Langue languetype={langtype} />
        </div>
      </div>
      <div className={classes.searchbar}>
        <TextField id="filled-search" label="Rechercher un pokemon..." type="search" variant="outlined" onChange={event => changeSearch(event.target.value)} fullWidth InputLabelProps={{ style: { color: 'white' } }}
                   inputProps={{ style: { color: 'white' } }}/>
      </div>
    </div>
  );
};

export default Header;