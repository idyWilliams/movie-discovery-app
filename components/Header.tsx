"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🎬</span>
          </div>
          <span className="text-xl font-bold text-foreground">CineHub</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Discover
          </Link>
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  )
}
