"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Slack, Mail, MessageSquare, Plus } from "lucide-react"

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

export default function IntegrationsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Integrations</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Connect Notivo with your favorite tools</p>
      </motion.div>

      <motion.div initial="initial" animate="animate" variants={stagger} className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {integrations.map((integration, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <integration.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                {integration.connected && (
                  <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    Connected
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2">{integration.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 flex-1">{integration.description}</p>

              <Button
                className={`w-full text-sm sm:text-base ${
                  integration.connected ? "border border-border" : "bg-primary hover:bg-primary/90"
                }`}
                variant={integration.connected ? "outline" : "default"}
              >
                {integration.connected ? "Manage" : "Connect"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const integrations = [
  {
    icon: Slack,
    name: "Slack",
    description: "Receive monitor alerts directly in your Slack channels",
    connected: true,
  },
  {
    icon: Mail,
    name: "Email",
    description: "Get instant email notifications for all monitor changes",
    connected: true,
  },
  {
    icon: MessageSquare,
    name: "Discord",
    description: "Send alerts to your Discord server in real-time",
    connected: false,
  },
  {
    icon: Plus,
    name: "Webhooks",
    description: "Custom webhooks for unlimited integration possibilities",
    connected: false,
  },
]
