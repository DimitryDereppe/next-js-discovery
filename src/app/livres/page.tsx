"use cache"
import LikeCounter from "@/components/likeCounter/LikeCounter"
import Image from "next/image"

export default async function Books() {
  //executé coté serveur = safe !
  const response = await fetch(
    "https://potterapi-fedeperin.vercel.app/fr/books",
  )
  const books = await response.json()

  return (
    <section>
      <h1>Mes livres Harry Potter</h1>
      <ul>
        {books.map((book) => (
          <li key={book.number}>
            <h2>{book.title}</h2>
            <p>{book.releaseDate}</p>
            <Image src={book.cover} alt={book.title} width={300} height={300} />
            <p>{book.description}</p>
            <LikeCounter />
          </li>
        ))}
      </ul>
    </section>
  )
}
