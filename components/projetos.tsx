import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"

const projectsItems = [
  {
    id: 1,
    title: 'Blog Pessoal',
    description: 'Um blog moderno construído com Next.js, MDX e Tailwind CSS.',
    href: "https://github.com/yourusername/taskmaster",
    tags: ["Next.js", "Prisma", "NextAuth.js"],
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação e banco de dados.',
    href: "https://github.com/yourusername/taskmaster",
    tags: ["Next.js", "Prisma", "Auth.js"],
  },
  {
    id: 3,
    title: 'Aplicação SaaS',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação e banco de dados.',
    href: "https://github.com/yourusername/taskmaster",
    tags: ["Next.js", "Prisma", "Server Actions"],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Confira alguns dos projetos que desenvolvi usando Next.js e outras tecnologias web modernas.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projectsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <Image src='https://github.com/shadcn.png' alt="Project Image" height={192} width={190} className="w-full object-cover" />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant='secondary'>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={item.href} target="_blank" rel="noreferrer">Ver projeto</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}