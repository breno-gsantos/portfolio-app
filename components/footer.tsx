import { footerItems } from "@/constants/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <small className="text-muted-foreground">&copy; 2024 Breno Giovanni. Todos os direitos reservados.</small>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {footerItems.map((item) => (
          <Link key={item.id} href={item.href} target="_blank" rel='noreferrer'>
            <item.icon className="size-4" />
          </Link>
        ))}
      </nav>
    </footer>
  )
}