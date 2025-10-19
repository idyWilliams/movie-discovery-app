"use client"

import { useMovieContext } from "@/context/MovieContext"
import { moviesData } from "@/data/movies"
import { X } from "lucide-react"

export function Filters() {
  const { selectedCategory, setSelectedCategory, selectedActor, setSelectedActor } = useMovieContext()

  const categories = Array.from(new Set(moviesData.map((m) => m.category)))
  const actors = Array.from(new Set(moviesData.flatMap((m) => m.actors)))

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Actor</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {actors.map((actor) => (
            <button
              key={actor}
              onClick={() => setSelectedActor(selectedActor === actor ? null : actor)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                selectedActor === actor
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {actor}
            </button>
          ))}
        </div>
      </div>

      {(selectedCategory || selectedActor) && (
        <button
          onClick={() => {
            setSelectedCategory(null)
            setSelectedActor(null)
          }}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary transition-all"
        >
          <X className="w-4 h-4" />
          Clear Filters
        </button>
      )}
    </div>
  )
}
