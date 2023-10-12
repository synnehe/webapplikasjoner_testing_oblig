"use client"
import { useState } from "react"

export default function Character() {
  const [character, setCharacter] = useState("Randomised character")

  const characters = ["Harry Potter", "Hermoine Granger", "Ron Weasley", "Sirius Black", "Voldemort", "Cho Chang", "Vincent Crabbe", "Barty Crouch Sr", 
      "Barty Crouch Jr", "Fleur Delacour", "Cedric Diggory", "Albus Dumbledore", "Argus Filch", "Gregory Goyle", "Rubeus Hagrid", "Igor Karkaroff",
      "Bellatrix Lestrange", "Gilderoy Lockhart", "Neville Longbottom", "Luna Lovegood", "Remus Lupin", "Draco Malfoy", "Lucius Malfoy", "Narcissa Malfoy",
      "Olympe Maxime", "Minerva McGonagall", "Alastor Mad Eye Moody", "Garrick Ollivander", "Peter Pettigrew", "James Potter", "Lily Potter", "Nymphadora Tonks", 
      "Dolores Umbridge", "Moaning Myrtle", "Arthur Weasley", "Bill Weasley", "Charlie Weasley", "Fred Weasley", "George Weasley", "Ginny Weasley", "Molly Weasley",
      "Oliver Wood"]

  function getCharacter(){
    setCharacter(characters[Math.floor(Math.random() * characters.length)])
  }

  return(
  <>
  <p id="character">{character}</p>
  <button id="randomise" onClick={getCharacter}>Get new character</button>
  </>
  )
}