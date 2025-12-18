"use client"

import { Button } from "@/components/ui/button"
import { Play, Plus } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/placeholder.svg?height=600&width=1920&query=anime+hero+background+with+vibrant+colors+and+action+scene)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full max-w-2xl flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary bg-primary/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Currently Airing</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Attack on Titan: Final Season
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Humanity's fight for survival reaches its climax as the truth behind the Titans is finally revealed. Join
            Eren and the Survey Corps in their ultimate battle.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">Action</span>
            <span className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Drama
            </span>
            <span className="rounded-md bg-primary/20 px-3 py-1 text-sm font-medium text-primary">Fantasy</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Watch Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Plus className="h-5 w-5" />
              Add to List
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
