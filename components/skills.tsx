import { skillsItems } from "@/constants/data";

export function Skills() {
  return (
    <section id="habilidades" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Habilidades Técnicas</h2>
            <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tenho proficiência em diversas tecnologias modernas de desenvolvimento web como Next.js,
              TypeScript, Tailwind e muito mais.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {skillsItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center space-y-2 shadow-md p-4">
              <item.icon className="size-12" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}