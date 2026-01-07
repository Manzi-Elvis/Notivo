"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { User, Mail, Lock, LogOut } from "lucide-react"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Settings</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Manage your account and preferences</p>
      </motion.div>

      {/* Profile Settings */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <Label className="text-sm">Full Name</Label>
              <Input placeholder="John Doe" className="bg-input border-border mt-2" />
            </div>
            <div>
              <Label className="text-sm">Email Address</Label>
              <Input type="email" placeholder="john@example.com" className="bg-input border-border mt-2" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">Save Changes</Button>
          </div>
        </Card>
      </motion.div>

      {/* Security */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
        <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <Label className="text-sm">Current Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-input border-border mt-2"
              />
            </div>
            <div>
              <Label className="text-sm">New Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-input border-border mt-2"
              />
            </div>
            <div>
              <Label className="text-sm">Confirm Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-input border-border mt-2"
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              Show passwords
            </label>
            <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">Update Password</Button>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
        <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Notifications
          </h2>

          <div className="space-y-2 sm:space-y-3">
            <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              <input type="checkbox" defaultChecked className="w-4 h-4 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-xs sm:text-sm">Email alerts for changes</p>
                <p className="text-xs text-muted-foreground">Get notified via email when monitors detect changes</p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              <input type="checkbox" defaultChecked className="w-4 h-4 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-xs sm:text-sm">Daily digest</p>
                <p className="text-xs text-muted-foreground">Receive a daily summary of all changes</p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              <input type="checkbox" className="w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-xs sm:text-sm">Marketing emails</p>
                <p className="text-xs text-muted-foreground">Receive updates about new features and offers</p>
              </div>
            </label>
          </div>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
        <Card className="border-destructive/50 bg-destructive/5 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-destructive">
            <LogOut className="h-5 w-5" />
            Danger Zone
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <Button
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive/10 bg-transparent text-sm sm:text-base"
            >
              Log Out
            </Button>
            <Button
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive/10 bg-transparent text-sm sm:text-base"
            >
              Delete Account
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
