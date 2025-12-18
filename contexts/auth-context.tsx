"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  favoriteGenres?: string[]
  watchlist?: number
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem("animehub_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simular chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock de usuário - em produção, isso viria da API
    const mockUser: User = {
      id: "1",
      name: "Otaku Master",
      email: email,
      avatar: "/anime-avatar.png",
      bio: "Apaixonado por animes desde sempre!",
      favoriteGenres: ["Action", "Shonen", "Fantasy"],
      watchlist: 42,
    }

    setUser(mockUser)
    localStorage.setItem("animehub_user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    // Simular chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      name: name,
      email: email,
      avatar: "/anime-avatar.png",
      bio: "",
      favoriteGenres: [],
      watchlist: 0,
    }

    setUser(newUser)
    localStorage.setItem("animehub_user", JSON.stringify(newUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("animehub_user")
  }

  const updateProfile = (data: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...data }
    setUser(updatedUser)
    localStorage.setItem("animehub_user", JSON.stringify(updatedUser))
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
