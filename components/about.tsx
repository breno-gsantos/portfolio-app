import Image from "next/image"

const aboutItems = [
  {
    id: 1,
    label: "Sou um desenvolvedor full-stack apaixonado por criar aplicativos web modernos e responsivos usando as tecnologias mais recentes, incluindo Next.js, React e TypeScript."
  },
  {
    id: 2,
    label: "Embora não tenha nenhuma experiência formal de trabalho, concluí vários projetos pessoais que mostram minhas habilidades e habilidades. Estou sempre ansioso para aprender e crescer como desenvolvedor e estou animado para trazer meu paixão e dedicação a uma nova função."
  }
]

export function About() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto py-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Olá, sou o Breno</h1>
          {aboutItems.map((item) => (
            <p key={item.id} className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{item.label}</p>
          ))}
        </div>
        <div className="flex justify-center">
          <Image src='https://github.com/shadcn.png' alt="" width={400} height={400} className="rounded-full w-[300px] h-[300px] object-cover" />
        </div>
      </div>
    </section>
  )
}