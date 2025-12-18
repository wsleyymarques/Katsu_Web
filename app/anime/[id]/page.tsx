"use client"
import { Star, Calendar, Film, Clock, Users, Heart, BookmarkPlus, Share2, Play, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface AnimeDetails {
  id: number
  title: string
  synopsis: string
  image: string
  banner: string
  rating: number
  year: number
  episodes: number
  duration: string
  status: string
  genres: string[]
  studio: string
  producers: string[]
  characters: Array<{
    id: number
    name: string
    role: string
    image: string
  }>
  episodes_list: Array<{
    id: number
    title: string
    number: number
    duration: string
    aired: string
  }>
  reviews: Array<{
    id: number
    user: string
    rating: number
    comment: string
    date: string
  }>
}

// Mock function - substitua com sua API real
const fetchAnimeDetails = async (id: string): Promise<AnimeDetails> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    id: Number.parseInt(id),
    title: "Jujutsu Kaisen",
    synopsis:
      "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
    image: "/jujutsu-kaisen-poster.png",
    banner: "/anime-banner.png",
    rating: 8.9,
    year: 2023,
    episodes: 24,
    duration: "24 min per ep",
    status: "Finished Airing",
    genres: ["Action", "Fantasy", "Supernatural", "School"],
    studio: "MAPPA",
    producers: ["Mainichi Broadcasting System", "TOHO animation"],
    characters: [
      {
        id: 1,
        name: "Yuji Itadori",
        role: "Main",
        image: "/yuji-itadori.jpg",
      },
      {
        id: 2,
        name: "Megumi Fushiguro",
        role: "Main",
        image: "/megumi-fushiguro.jpg",
      },
      {
        id: 3,
        name: "Nobara Kugisaki",
        role: "Main",
        image: "/nobara-kugisaki.jpg",
      },
      {
        id: 4,
        name: "Satoru Gojo",
        role: "Supporting",
        image: "/satoru-gojo.jpg",
      },
    ],
    episodes_list: [
      { id: 1, title: "Ryomen Sukuna", number: 1, duration: "24 min", aired: "Oct 3, 2020" },
      { id: 2, title: "For Myself", number: 2, duration: "24 min", aired: "Oct 10, 2020" },
      { id: 3, title: "Girl of Steel", number: 3, duration: "24 min", aired: "Oct 17, 2020" },
      { id: 4, title: "Curse Womb Must Die", number: 4, duration: "24 min", aired: "Oct 24, 2020" },
    ],
    reviews: [
      {
        id: 1,
        user: "AnimeWatcher123",
        rating: 9,
        comment: "Absolutely fantastic! The animation is top-notch and the story keeps you hooked.",
        date: "2 days ago",
      },
      {
        id: 2,
        user: "OtakuMaster",
        rating: 8,
        comment: "Great anime with amazing fight scenes. Highly recommended!",
        date: "1 week ago",
      },
    ],
  }
}

export default async function AnimeDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params

  const anime = await fetchAnimeDetails(id)

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={anime.banner || "/placeholder.svg"} alt={anime.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute top-4 left-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="bg-black/50 backdrop-blur hover:bg-black/70">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex gap-6">
              <img
                src={anime.image || "/placeholder.svg"}
                alt={anime.title}
                className="w-48 h-72 object-cover rounded-lg shadow-2xl hidden sm:block"
              />

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{anime.title}</h1>

                <div className="flex flex-wrap gap-2 mb-4">
                  {anime.genres.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-xl">{anime.rating}</span>
                  </div>
                  <Badge variant="outline">{anime.status}</Badge>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Button className="gap-2">
                    <Play className="h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Heart className="h-4 w-4" />
                    Add to Favorites
                  </Button>
                  <Button variant="outline" size="icon">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="episodes">Episodes</TabsTrigger>
                  <TabsTrigger value="characters">Characters</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{anime.synopsis}</p>
                  </div>
                </TabsContent>

                <TabsContent value="episodes" className="mt-6">
                  <div className="space-y-3">
                    {anime.episodes_list.map((episode) => (
                      <Card key={episode.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary font-bold">
                            {episode.number}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{episode.title}</h4>
                            <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {episode.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {episode.aired}
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Play className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="characters" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {anime.characters.map((character) => (
                      <Card key={character.id} className="overflow-hidden hover:scale-105 transition-transform">
                        <img
                          src={character.image || "/placeholder.svg"}
                          alt={character.name}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-3">
                          <h4 className="font-semibold text-sm line-clamp-1">{character.name}</h4>
                          <p className="text-xs text-muted-foreground">{character.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-4">
                    {anime.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{review.user}</h4>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-bold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-pretty">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Film className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Episodes</p>
                      <p className="font-semibold">{anime.episodes}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{anime.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-semibold">{anime.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Studio</p>
                      <p className="font-semibold">{anime.studio}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Producers</h3>
                <div className="space-y-2">
                  {anime.producers.map((producer, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {producer}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
