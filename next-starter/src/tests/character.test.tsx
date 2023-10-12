import Character from "@/components/Character"
import { fireEvent, render, screen } from "@testing-library/react"

it("should contain a harry potter character", () => {
render(<Character />)
 const characters = ["Harry Potter", "Hermoine Granger", "Ron Weasley", "Sirius Black", "Voldemort", "Cho Chang", "Vincent Crabbe", "Barty Crouch Sr", 
 "Barty Crouch Jr", "Fleur Delacour", "Cedric Diggory", "Albus Dumbledore", "Argus Filch", "Gregory Goyle", "Rubeus Hagrid", "Igor Karkaroff",
 "Bellatrix Lestrange", "Gilderoy Lockhart", "Neville Longbottom", "Luna Lovegood", "Remus Lupin", "Draco Malfoy", "Lucius Malfoy", "Narcissa Malfoy",
 "Olympe Maxime", "Minerva McGonagall", "Alastor Mad Eye Moody", "Garrick Ollivander", "Peter Pettigrew", "James Potter", "Lily Potter", "Nymphadora Tonks", 
 "Dolores Umbridge", "Moaning Myrtle", "Arthur Weasley", "Bill Weasley", "Charlie Weasley", "Fred Weasley", "George Weasley", "Ginny Weasley", "Molly Weasley",
 "Oliver Wood"]

  const button = screen.getByText("Get new character")
  const paragraph = screen.getByText("Randomised character")

  fireEvent.click(button)

  expect(characters).toContain(paragraph.textContent)
})

// Har sett på koden i smoke.test.tsx som fantes i dette repositoriet
// og da sett hvilke metoder som brukes for å kunne løse slike tester 