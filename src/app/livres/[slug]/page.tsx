interface BookProps {
  params: Promise<{ slug: string }>
}

export default async function Book({ params }: BookProps) {
  const { slug } = await params

  return (
    <section>
      <h1>{slug}</h1>
    </section>
  )
}
