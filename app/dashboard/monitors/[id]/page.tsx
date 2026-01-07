"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MonitorDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <Link
        href="/dashboard/monitors"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Monitors
      </Link>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold">Tech News Daily</h1>
        <p className="text-muted-foreground">technewsdaily.com</p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
          <h2 className="text-xl font-bold mb-8">Change Timeline</h2>

          <div className="space-y-8">
            {changeHistory.map((change, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline line */}
                {i !== changeHistory.length - 1 && (
                  <div className="absolute left-1.75 top-10 w-0.5 h-12 bg-linear-to-b from-primary to-primary/20" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background bg-primary ring-4 ring-background" />

                <div>
                  <p className="font-medium mb-2">{change.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{change.time}</p>

                  {change.diff && (
                    <div className="space-y-2 text-sm font-mono mb-4">
                      <div className="bg-destructive/10 text-destructive p-3 rounded border border-destructive/20">
                        <span className="text-red-400">- </span>
                        {change.diff.removed}
                      </div>
                      <div className="bg-green-500/10 text-green-400 p-3 rounded border border-green-500/20">
                        <span>+ </span>
                        {change.diff.added}
                      </div>
                    </div>
                  )}

                  <Button variant="outline" size="sm" className="border-border bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    View Full Diff
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

const changeHistory = [
  {
    title: "Breaking News section updated",
    time: "2 hours ago",
    diff: {
      removed: "Major Tech Companies Report Q4 Losses",
      added: "AI Breakthroughs Drive Tech Stock Rally",
    },
  },
  {
    title: "Homepage banner changed",
    time: "5 hours ago",
    diff: {
      removed: "Subscribe for our newsletter",
      added: "Subscribe for exclusive insights and analysis",
    },
  },
  {
    title: "New article published",
    time: "1 day ago",
    diff: null,
  },
]
