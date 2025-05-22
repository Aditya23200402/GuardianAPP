"use client"

import { useEffect, useState } from "react"

interface SplineViewerProps {
  url: string
  className?: string
}

export default function SplineViewer({ url, className = "" }: SplineViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Add Spline script if it doesn't exist
    const script = document.querySelector(
      'script[src="https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js"]',
    )
    if (!script) {
      const newScript = document.createElement("script")
      newScript.src = "https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js"
      newScript.type = "module"
      newScript.onload = () => setIsLoaded(true)
      document.head.appendChild(newScript)
    } else {
      setIsLoaded(true)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className={`spline-container ${className}`}>
      {isLoaded ? (
        <spline-viewer url={url}></spline-viewer>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}
    </div>
  )
}
