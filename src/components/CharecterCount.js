import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CharecterCount = () => {
  const [word, setWord] = useState("");
  const [WordList, setWordList] = useState([]);

  const createWordList = (event) => {
    event.preventDefault();
    setWordList([...WordList, word]);
    setWord("");
  };

  return (
    <div>
      <div>
        <h1>Count the Characters like a Boss...</h1>
        {WordList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        ) : (
          <ul>
            {WordList.map((w) => (
              <li key={uuidv4()}>
                <p>
                  {w} : {w.length}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form onSubmit={createWordList}>
        <h1>Character Counter</h1>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter the Characters here"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default CharecterCount;
