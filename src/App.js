import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchField: "",
    };
  }

  //onMount
  componentDidMount() {
    fetch("https://api.sampleapis.com/futurama/characters")
      .then((response) => response.json()) //Cualquier cosa devuelta de la API se guarda en response
      .then((users) =>
        this.setState(
          () => {
            return { characters: users };
          },
        )
      ); //Cualquier cosa devuulta por el then anterior se guardará en users
  }

  //función que ejecutamos a cada cambio en el input
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }; //Mismo nombre propiedad y variable, no hace falta poner los dos: { searchField: searchField }
    });
  };

  //template
  render() {
    const { onSearchChange } = this; // Traigo la función a una variable dentro del render().
    const { characters, searchField } = this.state; //Traigo las variables de estado

    const filterCharacters = characters.filter(
      (c) =>
        c.name.first.toLowerCase().includes(searchField) ||
        c.name.middle.toLowerCase().includes(searchField) ||
        c.name.last.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>My favourite characters of Futurama</h1>

          <input
            className="search-box"
            type="search"
            placeholder="search characters"
            onChange={onSearchChange}
          />

          <CardList characters={filterCharacters}/>
        </header>
      </div>
    );
  }
}

export default App;
