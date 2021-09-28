import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "happy",
  "🥱": "bored",
  "😟": "sad",
  "❤️": "love",
  "🤷🏼": "doubt",
  "🎉": "party",
  "💔": "heart broken",
  "😕": "confused",
  "😨": "scared",
  "🤗": "hug"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function changeHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (inputEmoji == "") {
      meaning = "";
    }
    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 class="heading">Emoji Interpreter</h1>
      <input
        class="input"
        placeholder="Put your emoji here"
        onChange={changeHandler}
      />
      <h2>{meaning}</h2>
      <h3 class="heading1"> Emojis we know:</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            class="emo"
            style={{ cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
