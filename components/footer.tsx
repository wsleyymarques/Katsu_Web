import { Github, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
              <span className="text-xl font-bold text-foreground">AnimeHub</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for discovering and tracking anime. Join millions of fans worldwide.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Classics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Categories</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Romance
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Comedy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fantasy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 AnimeHub. All rights reserved. Made with ❤️ for anime fans.</p>
        </div>
      </div>
    </footer>
  )
}
