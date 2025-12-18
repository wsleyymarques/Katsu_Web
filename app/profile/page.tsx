"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Camera, Save, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage() {
  const { user, updateProfile, logout } = useAuth()
  const router = useRouter()
  const [name, setName] = useState(user?.name || "")
  const [bio, setBio] = useState(user?.bio || "")
  const [isSaving, setIsSaving] = useState(false)

  if (!user) {
    router.push("/login")
    return null
  }

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    updateProfile({ name, bio })
    setIsSaving(false)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header do perfil */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-0 right-0 rounded-full shadow-lg"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
                    <p className="text-muted-foreground mb-4">{user.email}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{user.watchlist}</p>
                        <p className="text-sm text-muted-foreground">Animes na lista</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">156</p>
                        <p className="text-sm text-muted-foreground">Episódios assistidos</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">23</p>
                        <p className="text-sm text-muted-foreground">Resenhas escritas</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
                    <LogOut className="h-4 w-4" />
                    Sair
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Informações pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>Atualize suas informações de perfil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={user.email} disabled className="bg-muted" />
                  <p className="text-xs text-muted-foreground">O email não pode ser alterado</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Conte um pouco sobre você e seus animes favoritos..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                  />
                </div>

                <Button onClick={handleSave} disabled={isSaving} className="gap-2">
                  <Save className="h-4 w-4" />
                  {isSaving ? "Salvando..." : "Salvar alterações"}
                </Button>
              </CardContent>
            </Card>

            {/* Gêneros favoritos */}
            <Card>
              <CardHeader>
                <CardTitle>Gêneros Favoritos</CardTitle>
                <CardDescription>Seus gêneros de anime preferidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.favoriteGenres?.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-sm px-3 py-1">
                      {genre}
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm">
                    + Adicionar gênero
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Suas últimas interações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <img src="/anime-poster.png" alt="Anime" className="w-10 h-14 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Assistiu episódio 12</p>
                      <p className="text-sm text-muted-foreground">Attack on Titan • Há 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <img src="/anime-poster-2.jpg" alt="Anime" className="w-10 h-14 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Adicionou à lista</p>
                      <p className="text-sm text-muted-foreground">Demon Slayer • Há 1 dia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <img src="/anime-poster-3.jpg" alt="Anime" className="w-10 h-14 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Escreveu uma resenha</p>
                      <p className="text-sm text-muted-foreground">One Piece • Há 3 dias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
