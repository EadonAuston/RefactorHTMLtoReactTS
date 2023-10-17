import { Component } from "react";
import { fmaDataType } from "./types";
import "./CSS/character-cards.css";


class CharacterCards extends Component<{data: fmaDataType[]}> {

   render() {
    const {data} = this.props;

      return (
         <>
           <section id="character-cards">
             {data.map((character) => (
               <div className="card" key={character.name}>
                 <div className="card-titles">
                   <h3>{character.name}</h3>
                   <h4>{character.nickName}</h4>
                 </div>
                 <img src={character.imageUrl} alt="" />
                 <p>{character.background}</p>
               </div>
             ))}
           </section>
         </>
      )
   }
}

export default CharacterCards;