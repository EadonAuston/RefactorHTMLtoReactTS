import CharacterCards from './CharacterCards'
import CharacterRatings from './CharacterRatings'
import { data } from "../public/fma-data"

function App() {

  return (
    <>
     <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>about us</li>
        <li>info</li>
        <li>support us</li>
      </nav>
    </header>
    <CharacterRatings data={data}/>
    <CharacterCards data={data}/>
    </>
  )
}

export default App
