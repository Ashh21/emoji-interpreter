import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Tomato",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": " Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom"
};
var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our datbase";
    }
    setMeaning(meaning);
  }

  function emojiClickHander(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1> Food&Veggie Interpreter </h1>
      </nav>
      <div className="cont">
        <h1>
          <span role="img" aria-labelledby="mango">
            🥭
          </span>
        </h1>
        <input className="txt" onChange={emojiChangeHandler} />
        <h3> Meaning: {meaning} </h3>
        <h2> Emojis we have in our database : </h2>

        {emojis.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHander(emoji)}
              style={{
                cursor: "pointer",
                display: "inline-block",
                border: "1px #f54753",
                background: "#f54753",
                padding: "3px",
                borderRadius: "100%",
                boxShadow: "1px 1px 1px 1px ",
                margin: "0.5rem 1rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
