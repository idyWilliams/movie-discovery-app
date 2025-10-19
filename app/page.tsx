"use client"

import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { Filters } from "@/components/Filters"
import { MovieList } from "@/components/MovieList"
import { MovieProvider } from "@/context/MovieContext"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <MovieProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Discover Movies</h1>
            <p className="text-muted-foreground">Find your next favorite film</p>
          </div>

          <div className="mb-8">
            <SearchBar />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <Filters />
              </div>
            </aside>
            <div className="lg:col-span-3">
              <MovieList />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </MovieProvider>
  )
}
