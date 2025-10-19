"use client"

import { moviesData } from "@/data/movies"
import { useMovieContext } from "@/context/MovieContext"
import { MovieCard } from "./MovieCard"

export function MovieList() {
  const { searchQuery, selectedCategory, selectedActor } = useMovieContext()

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.actors.some((actor) => actor.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = !selectedCategory || movie.category === selectedCategory
    const matchesActor = !selectedActor || movie.actors.includes(selectedActor)

    return matchesSearch && matchesCategory && matchesActor
  })

  return (
    <div>
      {filteredMovies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No movies found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
