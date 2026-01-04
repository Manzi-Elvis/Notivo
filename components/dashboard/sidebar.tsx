"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Eye, Bell, Layout, Tag, Settings, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/monitors", icon: Eye, label: "Monitors" },
  { href: "/dashboard/alerts", icon: Bell, label: "Alerts" },
  { href: "/dashboard/templates", icon: Layout, label: "Templates" },
  { href: "/dashboard/integrations", icon: Tag, label: "Integrations" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
]

export function DashboardSidebar({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {open && <div className="fixed inset-0 z-30 bg-background/80 md:hidden" onClick={() => onOpenChange(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative left-0 top-16 md:top-0 h-[calc(100vh-4rem)] md:h-full w-56 sm:w-64 border-r border-primary/20 bg-linear-to-b from-card/60 via-card/40 to-background/40 transition-all duration-300 z-40 md:z-0 overflow-y-auto backdrop-blur-sm",
          !open && "-translate-x-full md:translate-x-0 md:w-16",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <div className="md:hidden p-4 border-b border-primary/20 flex justify-between items-center">
            <span className="font-bold">Menu</span>
            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-linear-to-r from-primary/30 to-accent/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:bg-card/50 hover:text-foreground hover:border-primary/20 border border-transparent",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {open && <span className="truncate">{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Toggle Button */}
          <div className="p-4 border-t border-primary/20 hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(!open)}
              className="w-full border-primary/30 hover:bg-primary/10 h-10"
            >
              {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
