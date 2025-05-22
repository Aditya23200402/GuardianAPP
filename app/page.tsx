"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Globe, FileText, Zap, Users, BarChart3, Layers } from "lucide-react"
import { useInView } from "react-intersection-observer"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Animation refs
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const connectWallet = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <span className="font-mono">POWERED BY STORY PROTOCOL</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
                Revolutionizing <span className="gradient-text">Trademark Protection</span> with Web3
              </h1>
              <p className="text-lg md:text-xl text-purple-200/80 mb-8 font-light">
                Experience the future of brand protection with our AI-powered trademark protection system built on
                decentralized technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={connectWallet} className="group">
                  {isConnected ? "Dashboard" : "Connect Wallet"}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </Button>
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-background flex items-center justify-center text-xs font-mono"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-purple-300/80">Trusted by 1.2k+ brands</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] w-full"
            >
              {isMounted && <SplineViewer url="https://prod.spline.design/aTHv57EsCQjJdV1D/scene.splinecode" />}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 border-y border-purple-500/20 bg-background/80 backdrop-blur-md">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 rounded-lg glass-effect purple-glow">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-mono">+2M</h3>
              <p className="text-sm text-purple-300/80">Protected Trademarks</p>
            </div>
            <div className="text-center p-6 rounded-lg glass-effect purple-glow">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-mono">+$1B</h3>
              <p className="text-sm text-purple-300/80">Brand Value Protected</p>
            </div>
            <div className="text-center p-6 rounded-lg glass-effect purple-glow">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-mono">99%</h3>
              <p className="text-sm text-purple-300/80">Detection Accuracy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="absolute inset-0 hexagon-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <span className="font-mono">KEY FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Unlock the <span className="gradient-text">Potential</span> of Web3 Brand Protection
            </h2>
            <p className="text-purple-200/80">
              Boost your brand protection operations with our innovative Web3 platform, combining security, efficiency,
              and transparency.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Shield className="h-6 w-6 text-purple-400" />,
                title: "Enhanced Asset Protection",
                description: "Advanced security for digital asset protection through blockchain verification.",
              },
              {
                icon: <Clock className="h-6 w-6 text-purple-400" />,
                title: "Lower Transaction Costs",
                description: "Reduce costs by streamlining operational processes with smart contracts.",
              },
              {
                icon: <Zap className="h-6 w-6 text-purple-400" />,
                title: "Fast Transaction Processing",
                description: "Efficient, fast transactions without intermediaries using blockchain technology.",
              },
              {
                icon: <Globe className="h-6 w-6 text-purple-400" />,
                title: "Global Protection Solutions",
                description: "Effortlessly manage trademark protection across the globe with our platform.",
              },
              {
                icon: <FileText className="h-6 w-6 text-purple-400" />,
                title: "Automated Contract Execution",
                description: "Automate licensing and protection through smart contracts on Story Protocol.",
              },
              {
                icon: <Layers className="h-6 w-6 text-purple-400" />,
                title: "Transparent Operations",
                description: "Blockchain guarantees full transaction visibility and immutable records.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full cyber-border hover:border-purple-500/50 transition-all duration-300 hover:purple-glow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-purple-200/70">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={howItWorksRef}
        className="py-20 md:py-32 bg-gradient-to-b from-background to-background/90 border-y border-purple-500/20"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <span className="font-mono">PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Simplifying Web3 <span className="gradient-text">Trademark Protection</span> for Everyone
            </h2>
            <p className="text-purple-200/80">
              Our Web3 platform simplifies complex brand protection for everyone. With innovative technology, we make
              navigating the protection landscape easier.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Register Your Trademark On-Chain",
                    description:
                      "Create a digital representation of your trademark using Story Protocol's registry, securing your brand assets on the blockchain.",
                  },
                  {
                    number: "02",
                    title: "AI-Powered Infringement Detection",
                    description:
                      "Our system continuously scans marketplaces and platforms to identify potential trademark infringements using advanced AI algorithms.",
                  },
                  {
                    number: "03",
                    title: "Programmable Licensing",
                    description:
                      "Create customizable license templates for your brand assets, enabling automated enforcement and royalty distribution.",
                  },
                  {
                    number: "04",
                    title: "Dispute Resolution",
                    description:
                      "Access a decentralized dispute resolution system that provides fair and transparent arbitration for trademark conflicts.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={howItWorksInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-purple-200/70">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg blur-3xl"></div>
                <div className="relative h-full w-full rounded-lg border border-purple-500/30 overflow-hidden glass-effect p-6 flex items-center justify-center">
                  <div className="w-full h-full max-w-xs max-h-xs relative animate-float">
                    <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-32 h-32 md:w-48 md:h-48">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/30 to-violet-500/30 blur-xl"></div>
                        <div className="relative h-full w-full rounded-lg border border-purple-500/30 flex items-center justify-center">
                          <Shield className="h-16 w-16 text-purple-400" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="w-3 h-3 rounded-full bg-purple-500 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                          <div
                            className="w-3 h-3 rounded-full bg-purple-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-ping"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          <div
                            className="w-3 h-3 rounded-full bg-purple-500 absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 animate-ping"
                            style={{ animationDelay: "1.5s" }}
                          ></div>
                          <div
                            className="w-3 h-3 rounded-full bg-purple-500 absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
        <div className="absolute inset-0 hexagon-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <span className="font-mono">DASHBOARD</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Powerful <span className="gradient-text">Management Tools</span> at Your Fingertips
            </h2>
            <p className="text-purple-200/80">
              Our intuitive dashboard provides real-time insights and control over your trademark protection strategy.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg blur-3xl"></div>
            <div className="relative rounded-lg border border-purple-500/30 overflow-hidden glass-effect p-1">
              <div className="rounded-md bg-background/80 backdrop-blur-sm p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-purple-300/80 font-mono">TradeShield Dashboard</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="h-3 w-3 text-purple-400" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Bell className="h-3 w-3 text-purple-400" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Settings className="h-3 w-3 text-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="glass-effect rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">Protected Assets</h4>
                      <BarChart3 className="h-4 w-4 text-purple-300/80" />
                    </div>
                    <p className="text-2xl font-bold font-mono">24</p>
                    <div className="mt-2 text-xs text-green-500 flex items-center gap-1">
                      <ArrowUp className="h-3 w-3" /> +2 this month
                    </div>
                  </div>
                  <div className="glass-effect rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">Active Licenses</h4>
                      <FileText className="h-4 w-4 text-purple-300/80" />
                    </div>
                    <p className="text-2xl font-bold font-mono">12</p>
                    <div className="mt-2 text-xs text-green-500 flex items-center gap-1">
                      <ArrowUp className="h-3 w-3" /> +3 this month
                    </div>
                  </div>
                  <div className="glass-effect rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">Potential Infringements</h4>
                      <AlertTriangle className="h-4 w-4 text-purple-300/80" />
                    </div>
                    <p className="text-2xl font-bold font-mono">3</p>
                    <div className="mt-2 text-xs text-red-500 flex items-center gap-1">
                      <ArrowDown className="h-3 w-3" /> -2 this month
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 glass-effect rounded-md p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium">Recent Activity</h4>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        View All
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Shield className="h-4 w-4" />,
                          text: "New trademark registered: 'MetaVerse Pro'",
                          time: "2h ago",
                        },
                        {
                          icon: <AlertTriangle className="h-4 w-4" />,
                          text: "Potential infringement detected on OpenSea",
                          time: "5h ago",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "License agreement signed with Partner Inc.",
                          time: "1d ago",
                        },
                        { icon: <Check className="h-4 w-4" />, text: "Dispute resolved in your favor", time: "2d ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs">
                          <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                            {item.icon}
                          </div>
                          <div className="flex-1">{item.text}</div>
                          <div className="text-purple-300/60 font-mono">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-effect rounded-md p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium">Protection Status</h4>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        Details
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)]">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                        <div
                          className="absolute inset-0 rounded-full border-4 border-purple-500"
                          style={{
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            transform: "rotate(90deg) scale(0.92)",
                            transformOrigin: "center",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-2xl font-bold font-mono">92%</span>
                          <span className="text-xs text-purple-300/80">Protected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/90 border-t border-purple-500/20"
      >
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
        <div className="absolute inset-0 hexagon-pattern opacity-10"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Ready to <span className="gradient-text">Protect Your Brand</span> with Web3 Technology?
            </h2>
            <p className="text-lg text-purple-200/80 mb-8">
              Join thousands of brands already using our platform to secure their intellectual property on the
              blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={connectWallet} className="group">
                {isConnected ? "Go to Dashboard" : "Get Started"}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Acme Inc.", logo: "A" },
                { name: "TechCorp", logo: "T" },
                { name: "Innovate LLC", logo: "I" },
                { name: "Future Brands", logo: "F" },
              ].map((client, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono mb-2">
                    {client.logo}
                  </div>
                  <p className="text-sm text-purple-300/80">{client.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Additional components used in the page
const Bell = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
    </svg>
  )
}

const Settings = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}

const ArrowUp = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 7-7 7 7"></path>
      <path d="M12 19V5"></path>
    </svg>
  )
}

const ArrowDown = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14"></path>
      <path d="m19 12-7 7-7-7"></path>
    </svg>
  )
}

const AlertTriangle = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <path d="M12 9v4"></path>
      <path d="M12 17h.01"></path>
    </svg>
  )
}

const Check = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  )
}
