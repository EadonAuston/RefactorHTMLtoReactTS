import "./CSS/character-ratings.css";
type fmaDataType = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

function CharacterRatings({ fmaData }: { fmaData: fmaDataType[] }) {
  const sortedData = [...fmaData].sort((a, b) => b.votes - a.votes);
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {sortedData.map((character: fmaDataType, index) =>
            index < 5 ? (
              <tr className={index % 2 === 0 ? "dark" : "light"} key={index}>
                <td>{character.name}</td>
                <td>
                  {character.skillset[0]}, {character.skillset[1]}
                </td>
                <td>{character.votes}</td>
              </tr>
            ) : null
          )}
        </table>
      </section>
    </>
  );
}

export default CharacterRatings;
