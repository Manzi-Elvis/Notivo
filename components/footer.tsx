import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-linear-to-b from-background/50 to-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <h3 className="mb-4 font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Notivo
            </h3>
            <p className="text-sm text-muted-foreground">
              Monitor websites. Get notified instantly. Peace of mind guaranteed.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors duration-200">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors duration-200">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-muted-foreground">© 2025 Notivo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
