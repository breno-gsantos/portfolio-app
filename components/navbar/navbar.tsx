import { footerItems, navItems } from "@/constants/data";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-background px-4 lg:px-6 h-14 flex items-center border-b">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href='/' className="text-3xl font-bold">Breno Giovanni</Link>
        <nav className="flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          {footerItems.map((item) => (
            <Link key={item.id} href={item.href} target="_blank" rel='noreferrer'>
              <item.icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}