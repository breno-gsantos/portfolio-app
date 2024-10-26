import { SiGit, SiInstagram, SiLinkedin, SiMongodb, SiNextdotjs, SiPrisma, SiShadcnui, SiTailwindcss, SiTypescript, SiWhatsapp, SiX } from "react-icons/si";

export const navItems = [
  {
    id: 1,
    label: 'Sobre',
    href: '#sobre'
  },
  {
    id: 2,
    label: 'Projetos',
    href: '#projetos'
  },
  {
    id: 3,
    label: 'Habilidades',
    href: '#habilidades'
  },
  {
    id: 4,
    label: 'Contato',
    href: '#contato'
  },
]

export const skillsItems = [
  {
    id: 1,
    title: 'Next.js',
    description: 'Hábil no desenvolvimento de aplicativos renderizados em servidor, estáticos e renderizados no lado do cliente com Next.js.',
    icon: SiNextdotjs
  },
  {
    id: 2,
    title: 'TypeScript',
    description: 'Proficiente no uso de TypeScript para escrever código robusto e com segurança de tipagem.',
    icon: SiTypescript
  },
  {
    id: 3,
    title: 'Tailwind',
    description: 'Habilidade no uso do Tailwind CSS para criar interfaces de usuário responsivas e visualmente atraentes.',
    icon: SiTailwindcss
  },
  {
    id: 4,
    title: 'Shadcn',
    description: 'Proficiente no uso do shadcn para a criação de interfaces de usuário modulares e acessíveis, com componentes estilizados que simplificam o desenvolvimento de UI com grande flexibilidade.',
    icon: SiShadcnui
  },
  {
    id: 5,
    title: 'Prisma',
    description: 'Experiência no uso do Prisma como ORM para modelagem de dados, migrações e consultas eficientes, integrando-se com bancos de dados relacionais de forma rápida e segura.',
    icon: SiPrisma
  },
  {
    id: 6,
    title: 'MongoDB',
    description: 'Experiência com MongoDB para armazenamento de dados flexível e escalável, com domínio na modelagem e consulta de dados em um ambiente NoSQL.',
    icon: SiMongodb
  },
  {
    id: 7,
    title: 'Git',
    description: 'Experiência no uso de Git para controle de versão e desenvolvimento colaborativo.',
    icon: SiGit
  },
]

export const footerItems = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/breno-giovanni-98658125b/',
    icon: SiLinkedin
  },
  {
    id: 2,
    href: 'https://www.instagram.com/breno.gsantos/',
    icon: SiInstagram
  },
  {
    id: 3,
    href: 'https://wa.me/5513991546612?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato!',
    icon: SiWhatsapp
  },
]