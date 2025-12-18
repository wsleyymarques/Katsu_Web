import { Swords, Heart, Laugh, Sparkles, Ghost, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Action", icon: Swords, color: "from-red-500 to-orange-500" },
  { name: "Romance", icon: Heart, color: "from-pink-500 to-rose-500" },
  { name: "Comedy", icon: Laugh, color: "from-yellow-500 to-amber-500" },
  { name: "Fantasy", icon: Sparkles, color: "from-purple-500 to-indigo-500" },
  { name: "Horror", icon: Ghost, color: "from-gray-700 to-gray-900" },
  { name: "Sports", icon: Trophy, color: "from-green-500 to-emerald-500" },
]

export function Categories() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">Find your favorite anime genre</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className="group cursor-pointer border-border bg-card transition-all hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`mb-3 rounded-full bg-gradient-to-br ${category.color} p-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-card-foreground">{category.name}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
