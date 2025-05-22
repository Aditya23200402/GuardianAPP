"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 glass-effect">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-violet-600 purple-glow">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold font-mono">TS</div>
            </div>
            <span className="text-xl font-bold glow-text">TradeShield</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="group">
            Get Started
            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-purple-500/20 glass-effect"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/features"
                className="px-4 py-2 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Button>
                <Button className="w-full group" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
