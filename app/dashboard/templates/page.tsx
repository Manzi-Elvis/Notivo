"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, TrendingUp, Trophy, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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

export default function TemplatesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Templates</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Pre-configured monitors to get started quickly</p>
      </motion.div>

      <motion.div initial="initial" animate="animate" variants={stagger} className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {templates.map((template, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card
              className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 sm:p-8 overflow-hidden relative ${
                i % 4 === 0
                  ? "hover:shadow-lg hover:shadow-primary/20"
                  : i % 4 === 1
                    ? "hover:shadow-lg hover:shadow-secondary/20"
                    : i % 4 === 2
                      ? "hover:shadow-lg hover:shadow-accent/20"
                      : "hover:shadow-lg hover:shadow-warning/20"
              }`}
            >
              {i % 2 === 1 && (
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-6">
                <div
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br flex items-center justify-center ${
                    i % 4 === 0
                      ? "from-primary to-accent"
                      : i % 4 === 1
                        ? "from-secondary to-primary"
                        : i % 4 === 2
                          ? "from-accent to-secondary"
                          : "from-warning to-accent"
                  }`}
                >
                  <template.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{template.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 flex-1">{template.description}</p>

                <div className="mb-4 sm:mb-6">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">INCLUDES:</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {template.includes.map((item, j) => (
                      <li key={j} className="text-xs sm:text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group text-sm sm:text-base">
                  Use Template
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const templates = [
  {
    icon: Trophy,
    title: "Scholarship Tracker",
    description: "Monitor scholarship opportunities and application deadlines",
    includes: ["Deadline alerts", "Eligibility changes", "Requirements updates"],
  },
  {
    icon: Briefcase,
    title: "Job Portal Tracker",
    description: "Get notified about new job postings and career opportunities",
    includes: ["New job alerts", "Salary changes", "Position updates"],
  },
  {
    icon: TrendingUp,
    title: "Crypto Price Tracker",
    description: "Monitor cryptocurrency prices and market changes",
    includes: ["Price alerts", "Volume tracking", "Market updates"],
  },
  {
    icon: BookOpen,
    title: "Exam Results",
    description: "Get notified when exam results are published",
    includes: ["Result availability", "Score updates", "Announcement notifications"],
  },
]
