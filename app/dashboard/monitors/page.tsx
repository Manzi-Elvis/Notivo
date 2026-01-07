"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, MoreVertical, Plus, AlertCircle, CheckCircle, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export default function MonitorsPage() {
  const [monitors, setMonitors] = useState(initialMonitors)

  const deleteMonitor = (id: number) => {
    setMonitors(monitors.filter((m) => m.id !== id))
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Monitors</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Track and manage all your website monitors</p>
        </div>
        <Button className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground w-full sm:w-auto">
          <Plus className="mr-2 h-5 w-5" />
          New Monitor
        </Button>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {monitors.map((monitor, idx) => (
          <motion.div key={monitor.id} variants={fadeInUp}>
            <Card
              className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 h-full flex flex-col relative overflow-hidden ${
                idx % 3 === 0
                  ? "hover:shadow-lg hover:shadow-primary/20"
                  : idx % 3 === 1
                    ? "hover:shadow-lg hover:shadow-secondary/20"
                    : "hover:shadow-lg hover:shadow-accent/20"
              }`}
            >
              {idx % 3 !== 0 && (
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="relative z-10 flex items-start justify-between mb-4">
                <div
                  className={`h-10 w-10 rounded-lg bg-linear-to-br flex items-center justify-center ${
                    idx % 3 === 0
                      ? "from-primary to-accent"
                      : idx % 3 === 1
                        ? "from-secondary to-primary"
                        : "from-accent to-secondary"
                  }`}
                >
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative z-10">
                <h3 className="font-bold mb-1 text-base sm:text-lg">{monitor.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1 break-all">{monitor.url}</p>

                <div className="flex items-center gap-2 mb-4">
                  {monitor.status === "changed" ? (
                    <>
                      <AlertCircle className="h-4 w-4 text-warning shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-warning">Changed</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-success">Watching</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-4">Last checked: {monitor.lastChecked}</p>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteMonitor(monitor.id)}
                  className="w-full border-destructive/50 text-destructive hover:bg-destructive/10 text-xs sm:text-sm"
                >
                  <Trash2 className="h-3 w-3 mr-2" />
                  Delete
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {monitors.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No monitors yet</h3>
          <p className="text-muted-foreground mb-4">Create your first monitor to get started</p>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-5 w-5" />
            Create Monitor
          </Button>
        </motion.div>
      )}
    </div>
  )
}

const initialMonitors = [
  {
    id: 1,
    title: "Tech News Daily",
    url: "technewsdaily.com",
    status: "watching" as const,
    lastChecked: "5 minutes ago",
  },
  {
    id: 2,
    title: "Job Portal",
    url: "jobportal.com/careers",
    status: "changed" as const,
    lastChecked: "2 hours ago",
  },
  {
    id: 3,
    title: "Scholarship Database",
    url: "scholarships.com/opportunities",
    status: "watching" as const,
    lastChecked: "1 hour ago",
  },
  {
    id: 4,
    title: "Crypto Prices",
    url: "coinmarketcap.com/bitcoin",
    status: "watching" as const,
    lastChecked: "10 minutes ago",
  },
  {
    id: 5,
    title: "Product Launch",
    url: "product.example.com",
    status: "changed" as const,
    lastChecked: "30 minutes ago",
  },
  {
    id: 6,
    title: "Conference Schedule",
    url: "conference2025.com/schedule",
    status: "watching" as const,
    lastChecked: "3 hours ago",
  },
]
