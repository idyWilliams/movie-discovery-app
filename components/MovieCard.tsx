"use client"

import Link from "next/link"
import type { Movie } from "@/data/movies"
import { useMovieContext } from "@/context/MovieContext"
import { Heart, Clock } from "lucide-react"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const { likedMovies, watchLaterMovies, toggleLike, toggleWatchLater } = useMovieContext()
  const isLiked = likedMovies.has(movie.id)
  const isWatchLater = watchLaterMovies.has(movie.id)

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-4 bg-card border border-border">
          <img
            src={movie.poster || "/placeholder.svg"}
            alt={movie.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
            <div className="flex gap-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleLike(movie.id)
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                  isLiked
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                Like
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleWatchLater(movie.id)
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                  isWatchLater
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Clock className={`w-4 h-4 ${isWatchLater ? "fill-current" : ""}`} />
                Later
              </button>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{movie.category}</span>
          <span className="text-sm font-semibold text-primary">{movie.rating}/10</span>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="text-xs px-2 py-1 bg-card border border-border rounded text-muted-foreground">
            {movie.kind}
          </span>
          <span className="text-xs px-2 py-1 bg-card border border-border rounded text-muted-foreground">
            {movie.type}
          </span>
        </div>
      </div>
    </Link>
  )
}
