import { Component } from "react";

class CardList extends Component {
    
  render() {
    console.log('Props: ', this.props)
    const { characters } = this.props;
    return (
      <div className="card-list">
        {characters.map((c) => (
            <div key={c.id}>
              <h3>
                {c.name.first} {c.name.middle} {c.name.last}
              </h3>
              <img src={c.images.main} alt={c.name.first}></img>
            </div>
          ))}
      </div>
    );
  }
}

export default CardList;
