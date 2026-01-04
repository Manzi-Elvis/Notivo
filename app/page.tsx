"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Check, Eye, Bell, Clock, Code2, Zap, Shield, Smartphone, Chrome, Laptop } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-background via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pt-12 pb-24 sm:pt-20 sm:pb-32 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="gradient-badge mb-6 justify-center mx-auto">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm text-accent">Get notified when things change</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Never Miss a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
                Change Again
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Monitor any website in real-time. Get instant alerts when content changes. Perfect for tracking
              scholarships, job postings, prices, and more.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-base text-primary-foreground"
                >
                  Start Monitoring Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary/50 hover:bg-primary/10 text-base hover:text-primary"
              >
                View Demo
              </Button>
            </div>

            {/* Device Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-secondary" />
                <span>Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <Chrome className="h-4 w-4 text-accent" />
                <span>Web</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="h-4 w-4 text-primary" />
                <span>Desktop</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Grid Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:py-20 md:px-6 lg:px-8 border-t border-border relative">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl sm:text-4xl font-bold"
          >
            Powerful Features
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br ${
                      i % 3 === 0
                        ? "from-primary/30 to-accent/20"
                        : i % 3 === 1
                          ? "from-secondary/30 to-primary/20"
                          : "from-accent/30 to-secondary/20"
                    }`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${
                        i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-secondary" : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:py-20 md:px-6 lg:px-8 border-t border-border relative">
        <div className="absolute inset-0 bg-linear-to-l from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="mx-auto max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl sm:text-4xl font-bold"
          >
            How It Works
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8 sm:space-y-12"
          >
            {[
              { num: 1, title: "Paste a Link", desc: "Enter any website URL you want to monitor" },
              { num: 2, title: "Choose What to Track", desc: "Select the text, sections, or elements to monitor" },
              { num: 3, title: "Get Notified Instantly", desc: "Receive alerts the moment anything changes" },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeInUp} className="flex gap-6 sm:gap-8">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary via-accent to-secondary text-white font-bold text-lg shadow-lg shadow-primary/30">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 sm:py-20 md:px-6 lg:px-8 border-t border-border relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 sm:gap-8 md:grid-cols-3"
          >
            {pricing.map((plan, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card
                  className={`rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col relative overflow-hidden transition-all duration-300 ${
                    plan.highlighted
                      ? "border-primary/50 bg-card shadow-xl shadow-primary/20 ring-1 ring-primary/30"
                      : "hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/10"
                  }`}
                >
                  {plan.highlighted && (
                    <>
                      <div className="absolute -right-12 -top-12 h-24 w-24 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
                      <div className="absolute -left-8 -bottom-8 h-20 w-20 bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-3xl" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-secondary/60" />
                    </>
                  )}
                  <div className="relative z-10">
                    {plan.highlighted && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/30 to-accent/30 text-primary mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="mb-2 text-xl sm:text-2xl font-bold">{plan.name}</h3>
                    <p className="mb-6 text-muted-foreground text-sm">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <Link href="/dashboard" className="w-full block mb-8">
                      <Button
                        className={`w-full font-semibold ${
                          plan.highlighted
                            ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                            : "border border-primary/50 text-primary hover:bg-primary/10"
                        }`}
                        variant={plan.highlighted ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const features = [
  {
    icon: Eye,
    title: "Visual Monitoring",
    description: "Monitor specific text, sections, or entire pages with pixel-perfect accuracy.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get instant notifications via email, SMS, or browser push notifications.",
  },
  {
    icon: Clock,
    title: "Change Timeline",
    description: "View the complete history of all changes with timestamps and diffs.",
  },
  {
    icon: Code2,
    title: "No Code Required",
    description: "Set up monitors in seconds. No coding or technical knowledge needed.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop",
    description: "Works perfectly on web, mobile, and desktop. Stay notified everywhere.",
  },
  {
    icon: Shield,
    title: "Always Secure",
    description: "Enterprise-grade security with end-to-end encryption for your data.",
  },
]

const pricing = [
  {
    name: "Starter",
    description: "For individuals",
    price: 0,
    features: ["Up to 5 monitors", "Email alerts", "24-hour history", "Basic support", "Community templates"],
  },
  {
    name: "Pro",
    description: "Most popular",
    price: 29,
    highlighted: true,
    features: [
      "Unlimited monitors",
      "All alert types",
      "90-day history",
      "Priority support",
      "Custom templates",
      "API access",
      "Advanced filters",
    ],
  },
  {
    name: "Teams",
    description: "For organizations",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "1-year history",
      "Dedicated support",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
]
