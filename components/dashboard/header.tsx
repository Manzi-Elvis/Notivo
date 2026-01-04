"use client"

import { Button } from "@/components/ui/button"
import { Menu, Search, Bell, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export function DashboardHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const [theme, setTheme] = useState("dark")
  const [searchQuery, setSearchQuery] = useState("")

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
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-2 sm:gap-4 flex-1">
        <Button variant="ghost" size="sm" onClick={onMenuClick} className="md:hidden h-10 w-10 p-0">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden sm:flex items-center gap-2 bg-input border border-border rounded-lg px-3 py-2 flex-1 max-w-xs">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search monitors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-0 outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex h-10 w-10 p-0">
          <Bell className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme" className="h-10 w-10 p-0">
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}
