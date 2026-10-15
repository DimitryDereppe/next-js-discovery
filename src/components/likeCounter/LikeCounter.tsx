"use client"
import { useState } from "react"

export default function LikeCounter() {
  const [like, setLike] = useState(1)

  const handleClick = () => {
    setLike((prevState) => prevState + 1)
  }

  return (
    <button onClick={handleClick} type="button">
      Like :{like}
    </button>
  )
}
