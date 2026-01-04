"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [theme, setTheme] = useState("dark")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      setTheme("light")
    } else {
      html.classList.add("dark")
      setTheme("dark")
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-linear-to-r from-background/95 via-background/90 to-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary via-accent to-secondary flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/30">
              N
            </div>
            <span className="hidden sm:inline bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Notivo
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-card rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link href="/dashboard">
              <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border space-y-2">
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button variant="ghost" className="w-full justify-start">
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
