/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  pronoun.forEach(c =>
    adj.forEach(d => noun.forEach(e => console.log(`${c}${d}${e}.com`)))
  );
};
