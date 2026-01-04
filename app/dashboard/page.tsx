"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, AlertCircle, Eye, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

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

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Welcome! Here's your monitoring overview.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card
              className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                i % 3 === 0
                  ? "hover:shadow-primary/20"
                  : i % 3 === 1
                    ? "hover:shadow-secondary/20"
                    : "hover:shadow-accent/20"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                </div>
                <div
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 ${
                    i % 3 === 0
                      ? "from-primary/30 to-accent/20"
                      : i % 3 === 1
                        ? "from-secondary/30 to-primary/20"
                        : "from-accent/30 to-secondary/20"
                  }`}
                >
                  <stat.icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-secondary" : "text-accent"
                    }`}
                  />
                </div>
              </div>
              {stat.trend && (
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  {stat.trend}
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Changes</h2>
          <div className="space-y-3 sm:space-y-4">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-lg border border-border/50 hover:bg-card/50 transition-colors"
              >
                <div className="mb-3 sm:mb-0">
                  <p className="font-medium text-sm sm:text-base">{activity.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary w-fit">
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/dashboard/monitors">
              <Button className="bg-primary hover:bg-primary/90 w-full text-sm sm:text-base">Add New Monitor</Button>
            </Link>
            <Link href="/dashboard/templates">
              <Button variant="outline" className="border-border w-full bg-transparent text-sm sm:text-base">
                View Templates
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

const stats = [
  { label: "Active Monitors", value: "12", icon: Eye, trend: "+2 this week" },
  { label: "Changes Detected", value: "47", icon: TrendingUp, trend: "+12 this week" },
  { label: "Alerts Sent", value: "156", icon: AlertCircle, trend: "+28 this week" },
  { label: "Uptime", value: "99.9%", icon: BarChart3 },
]

const recentActivity = [
  { title: "GitHub - Trending page updated", time: "2 hours ago", status: "Changed" },
  { title: "Job Portal - New positions added", time: "4 hours ago", status: "Changed" },
  { title: "News Site - Breaking news section", time: "1 day ago", status: "Changed" },
  { title: "Scholarship - No changes", time: "Just now", status: "Monitoring" },
]
