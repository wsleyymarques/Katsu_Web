"use client"

import { useQuery } from "@tanstack/react-query"
import { Trophy, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const fetchTopRated = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    {
      id: 1,
      rank: 1,
      title: "Fullmetal Alchemist: Brotherhood",
      rating: 9.1,
      votes: "1.5M",
      image: "/fullmetal-alchemist-poster.jpg",
    },
    {
      id: 2,
      rank: 2,
      title: "Steins;Gate",
      rating: 9.0,
      votes: "890K",
      image: "/steins-gate-poster.jpg",
    },
    {
      id: 3,
      rank: 3,
      title: "Attack on Titan",
      rating: 9.0,
      votes: "1.2M",
      image: "/attack-on-titan-inspired-poster.png",
    },
    {
      id: 4,
      rank: 4,
      title: "Hunter x Hunter",
      rating: 8.9,
      votes: "950K",
      image: "/hunter-x-hunter-poster.jpg",
    },
    {
      id: 5,
      rank: 5,
      title: "Gintama",
      rating: 8.9,
      votes: "780K",
      image: "/gintama-poster.jpg",
    },
  ]
}

export function TopRated() {
  const { data: animes, isLoading } = useQuery({
    queryKey: ["top-rated"],
    queryFn: fetchTopRated,
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Top Rated Anime</h2>
            <p className="mt-1 text-muted-foreground">Highest rated by the community</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="flex gap-4 p-4">
                    <Skeleton className="h-24 w-16 rounded" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </CardContent>
                </Card>
              ))
            : animes?.map((anime) => (
                <Card
                  key={anime.id}
                  className="group cursor-pointer border-border bg-card transition-all hover:shadow-lg"
                >
                  <CardContent className="flex gap-4 p-4">
                    <div className="relative">
                      <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-bold text-white shadow-lg">
                        {anime.rank}
                      </div>
                      <img
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        className="h-24 w-16 rounded object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-center">
                      <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {anime.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-foreground">{anime.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{anime.votes} votes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}
