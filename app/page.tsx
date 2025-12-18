import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrendingAnimes } from "@/components/trending-animes"
import { Categories } from "@/components/categories"
import { TopRated } from "@/components/top-rated"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrendingAnimes />
        <Categories />
        <TopRated />
      </main>
      <Footer />
    </div>
  )
}
