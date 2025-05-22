import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 glass-effect">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-violet-600 purple-glow">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold font-mono">
                  TS
                </div>
              </div>
              <span className="text-xl font-bold glow-text">TradeShield</span>
            </div>
            <p className="text-sm text-purple-200/70">
              Protecting your brand with Web3 technology and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium font-mono">PRODUCT</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium font-mono">RESOURCES</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium font-mono">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium font-mono">LEGAL</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-300/60 hover:text-purple-400">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-purple-500/20 pt-6 text-center text-sm text-purple-300/60 font-mono">
          <p>&copy; {new Date().getFullYear()} TradeShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
