import React from "react" 

function Keypad() {
  return (
    <input type="password" onChange={handleInput}></input>
  )
}

function handleInput() {
  console.log("Entering password...")
}

export default Keypad