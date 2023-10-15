import { Component } from "react";
import "./CSS/character-cards.css";

type fmaDataType = {
   name: string;
   skillset: string[];
   votes: number;
   imageUrl: string;
   background: string;
   nickName: null | string;
 };

class CharacterCards extends Component<{characters: fmaDataType[]}> {

   render() {

      return (
         <>
           <section id="character-cards">
             {this.props.characters.map((character) => (
               <div className="card" key={character.name}>
                 <div className="card-titles">
                   <h3>{character.name}</h3>
                   <h4>{character.nickName}</h4>
                 </div>
                 <img src={character.imageUrl} alt="" />
                 {/* most of the images were not working so I deleted the part of the url after the extension, i.e. "png" "jpeg" */}
                 <p>{character.background}</p>
               </div>
             ))}
           </section>
         </>
      )
   }
}

export default CharacterCards;