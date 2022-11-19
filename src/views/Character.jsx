import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


import Details from "../components/Details.jsx"

const Character = () => {

  const { name } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json)

      })
      .catch((e) => console.log(e))

  }, [])


  return (
    <main>
      <Details character={character}></Details>
    </main >
  )
}

export default Character