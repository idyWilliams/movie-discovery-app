"use client"

import { moviesData } from "@/data/movies"
import { useMovieContext } from "@/context/MovieContext"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, Clock, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import { MovieProvider } from "@/context/MovieContext"
import { useParams } from "next/navigation"

function MovieDetailContent() {
  const params = useParams()
  const movieId = params.id as string
  const movie = moviesData.find((m) => m.id === movieId)
  const { likedMovies, watchLaterMovies, toggleLike, toggleWatchLater } = useMovieContext()

  if (!movie) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">Movie not found</p>
      </div>
    )
  }

  const isLiked = likedMovies.has(movie.id)
  const isWatchLater = watchLaterMovies.has(movie.id)

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Movies
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              className="w-full rounded-lg border border-border shadow-lg"
            />
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => toggleLike(movie.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                  isLiked
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Liked" : "Like"}
              </button>
              <button
                onClick={() => toggleWatchLater(movie.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                  isWatchLater
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                <Clock className={`w-5 h-5 ${isWatchLater ? "fill-current" : ""}`} />
                {isWatchLater ? "Saved" : "Watch Later"}
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-foreground mb-4">{movie.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-lg font-semibold text-foreground">{movie.rating}/10</span>
              </div>
              <span className="px-3 py-1 bg-card border border-border rounded-full text-foreground">{movie.kind}</span>
              <span className="px-3 py-1 bg-card border border-border rounded-full text-foreground">
                {movie.category}
              </span>
              <span className="px-3 py-1 bg-card border border-border rounded-full text-foreground">{movie.type}</span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Synopsis</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{movie.epilogue}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Release Date</h3>
                <p className="text-foreground text-lg">
                  {new Date(movie.dateReleased).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Rating</h3>
                <p className="text-foreground text-lg">{movie.kind}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.actors.map((actor) => (
                  <span key={actor} className="px-3 py-2 bg-card border border-border rounded-lg text-foreground">
                    {actor}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {movie.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {movie.trailer && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Trailer</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    src={movie.trailer}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function MovieDetail() {
  return (
    <MovieProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <MovieDetailContent />
      </div>
    </MovieProvider>
  )
}
