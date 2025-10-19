"use client"

import { useMovieContext } from "@/context/MovieContext"
import { Search } from "lucide-react"

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useMovieContext()

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search by title, category, or actor..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />
    </div>
  )
}
