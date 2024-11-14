import { citations } from "./citations.js";
import { abbreviations } from "./abbreviatedWords.js";

Object.keys(abbreviations).forEach((abbreviation) => {
    const needsAbbreviation = citations.includes(abbreviation)
    if(needsAbbreviation) console.log(abbreviation, abbreviations[abbreviation])
})