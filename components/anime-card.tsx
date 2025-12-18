import { Star, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AnimeCardProps {
  anime: {
    id: number
    title: string
    image: string
    rating: number
    year: number
    episodes: number
    genre: string
  }
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <Card className="group relative overflow-hidden border-border bg-card transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={anime.image || "/placeholder.svg"}
            alt={anime.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="h-12 w-12 rounded-full">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 backdrop-blur">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-white">{anime.rating}</span>
          </div>
        </div>

        <CardContent className="p-3">
          <h3 className="font-semibold text-card-foreground line-clamp-2 text-balance">{anime.title}</h3>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{anime.year}</span>
            <span>•</span>
            <span>{anime.episodes} eps</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
