"use client"

import { useQuery } from "@tanstack/react-query"
import { AnimeCard } from "@/components/anime-card"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data - substitua com sua API real
const fetchTrendingAnimes = async () => {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      title: "Jujutsu Kaisen",
      image: "/jujutsu-kaisen-poster.png",
      rating: 8.9,
      year: 2023,
      episodes: 24,
      genre: "Action, Supernatural",
    },
    {
      id: 2,
      title: "Demon Slayer",
      image: "/demon-slayer-anime-poster.png",
      rating: 9.2,
      year: 2023,
      episodes: 11,
      genre: "Action, Fantasy",
    },
    {
      id: 3,
      title: "My Hero Academia",
      image: "/my-hero-academia-poster.png",
      rating: 8.5,
      year: 2023,
      episodes: 25,
      genre: "Action, Comedy",
    },
    {
      id: 4,
      title: "One Piece",
      image: "/anime-poster.png",
      rating: 9.0,
      year: 2023,
      episodes: 1090,
      genre: "Adventure, Comedy",
    },
    {
      id: 5,
      title: "Chainsaw Man",
      image: "/chainsaw-man-anime-poster.png",
      rating: 8.7,
      year: 2023,
      episodes: 12,
      genre: "Action, Horror",
    },
    {
      id: 6,
      title: "Spy x Family",
      image: "/spy-family-poster.png",
      rating: 8.8,
      year: 2023,
      episodes: 25,
      genre: "Comedy, Action",
    },
  ]
}

export function TrendingAnimes() {
  const {
    data: animes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trending-animes"],
    queryFn: fetchTrendingAnimes,
  })

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-destructive">Failed to load trending animes</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
            <p className="mt-2 text-muted-foreground">Most popular anime this season</p>
          </div>
          <Button variant="ghost" className="text-primary">
            View All →
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-[3/4] w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))
            : animes?.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
        </div>
      </div>
    </section>
  )
}

function Button({ children, variant = "default", className = "", ...props }: any) {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  )
}
