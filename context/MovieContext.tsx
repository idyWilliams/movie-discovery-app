"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface MovieContextType {
  likedMovies: Set<string>
  watchLaterMovies: Set<string>
  searchQuery: string
  selectedCategory: string | null
  selectedActor: string | null
  toggleLike: (movieId: string) => void
  toggleWatchLater: (movieId: string) => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string | null) => void
  setSelectedActor: (actor: string | null) => void
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

export function MovieProvider({ children }: { children: ReactNode }) {
  const [likedMovies, setLikedMovies] = useState<Set<string>>(new Set())
  const [watchLaterMovies, setWatchLaterMovies] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedActor, setSelectedActor] = useState<string | null>(null)

  const toggleLike = (movieId: string) => {
    setLikedMovies((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(movieId)) {
        newSet.delete(movieId)
      } else {
        newSet.add(movieId)
      }
      return newSet
    })
  }

  const toggleWatchLater = (movieId: string) => {
    setWatchLaterMovies((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(movieId)) {
        newSet.delete(movieId)
      } else {
        newSet.add(movieId)
      }
      return newSet
    })
  }

  return (
    <MovieContext.Provider
      value={{
        likedMovies,
        watchLaterMovies,
        searchQuery,
        selectedCategory,
        selectedActor,
        toggleLike,
        toggleWatchLater,
        setSearchQuery,
        setSelectedCategory,
        setSelectedActor,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error("useMovieContext must be used within MovieProvider")
  }
  return context
}
