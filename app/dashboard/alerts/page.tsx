"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Mail, MessageSquare, Smartphone, ToggleLeft, ToggleRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "email", monitor: "Tech News Daily", frequency: "Instantly", enabled: true },
    { id: 2, type: "browser", monitor: "Job Portal", frequency: "Instantly", enabled: true },
    { id: 3, type: "sms", monitor: "Scholarship Database", frequency: "Daily Digest", enabled: false },
    { id: 4, type: "push", monitor: "Crypto Prices", frequency: "Instantly", enabled: true },
  ])

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, enabled: !alert.enabled } : alert)))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return Mail
      case "browser":
        return Bell
      case "sms":
        return MessageSquare
      case "push":
        return Smartphone
      default:
        return Bell
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Alerts</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Configure how you want to be notified</p>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        className="space-y-3 sm:space-y-4"
      >
        {alerts.map((alert, idx) => {
          const IconComponent = getIcon(alert.type)
          return (
            <motion.div key={alert.id} variants={fadeInUp}>
              <Card
                className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 ${
                  idx % 4 === 0
                    ? "hover:shadow-lg hover:shadow-primary/20"
                    : idx % 4 === 1
                      ? "hover:shadow-lg hover:shadow-secondary/20"
                      : idx % 4 === 2
                        ? "hover:shadow-lg hover:shadow-accent/20"
                        : "hover:shadow-lg hover:shadow-warning/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-linear-to-br flex items-center justify-center shrink-0 ${
                      idx % 4 === 0
                        ? "from-primary to-accent"
                        : idx % 4 === 1
                          ? "from-secondary to-primary"
                          : idx % 4 === 2
                            ? "from-accent to-secondary"
                            : "from-warning to-accent"
                    }`}
                  >
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm sm:text-base capitalize">{alert.type} Alert</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{alert.monitor}</p>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right">
                      <p className="text-xs sm:text-sm font-medium">Frequency</p>
                      <p className="text-xs text-muted-foreground">{alert.frequency}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAlert(alert.id)}
                      className="h-10 w-10 p-0 flex-shrink-0"
                    >
                      {alert.enabled ? (
                        <ToggleRight className="h-6 w-6 text-primary" />
                      ) : (
                        <ToggleLeft className="h-6 w-6 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
