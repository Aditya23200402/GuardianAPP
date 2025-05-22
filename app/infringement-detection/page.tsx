"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  AlertTriangle,
  Eye,
  Check,
  X,
  Filter,
  Download,
  BarChart3,
  ArrowUpRight,
  Globe,
  FileText,
  ImageIcon,
  RefreshCw,
  Settings,
  Zap,
} from "lucide-react"

export default function InfringementDetectionPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [confidenceThreshold, setConfidenceThreshold] = useState(75)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScanning, setIsScanning] = useState(false)

  // Dummy data
  const infringements = [
    {
      id: 1,
      trademark: "CryptoShield",
      platform: "OpenSea",
      date: "2023-09-05",
      status: "pending",
      confidence: 92,
      image: "/placeholder.svg?height=100&width=100",
      url: "https://example.com/listing/123",
      type: "Visual",
    },
    {
      id: 2,
      trademark: "CryptoShield",
      platform: "Rarible",
      date: "2023-09-12",
      status: "pending",
      confidence: 87,
      image: "/placeholder.svg?height=100&width=100",
      url: "https://example.com/listing/456",
      type: "Name",
    },
    {
      id: 3,
      trademark: "BlockGuard",
      platform: "Foundation",
      date: "2023-08-28",
      status: "resolved",
      confidence: 95,
      image: "/placeholder.svg?height=100&width=100",
      url: "https://example.com/listing/789",
      type: "Visual",
    },
    {
      id: 4,
      trademark: "MetaVerse Pro",
      platform: "Twitter",
      date: "2023-09-18",
      status: "dismissed",
      confidence: 68,
      image: "/placeholder.svg?height=100&width=100",
      url: "https://example.com/tweet/123",
      type: "Name",
    },
    {
      id: 5,
      trademark: "DeFi Secure",
      platform: "Blur",
      date: "2023-09-20",
      status: "pending",
      confidence: 89,
      image: "/placeholder.svg?height=100&width=100",
      url: "https://example.com/listing/321",
      type: "Visual",
    },
  ]

  const platforms = [
    { name: "OpenSea", count: 156, active: true },
    { name: "Rarible", count: 89, active: true },
    { name: "Foundation", count: 42, active: true },
    { name: "Blur", count: 78, active: true },
    { name: "Twitter", count: 210, active: true },
    { name: "Discord", count: 65, active: false },
    { name: "Instagram", count: 120, active: false },
    { name: "ENS Domains", count: 35, active: true },
  ]

  const filteredInfringements = infringements
    .filter(
      (infringement) =>
        infringement.trademark.toLowerCase().includes(searchQuery.toLowerCase()) ||
        infringement.platform.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((infringement) => infringement.confidence >= confidenceThreshold)

  const startScan = () => {
    setIsScanning(true)
    // Simulate scan completion
    setTimeout(() => {
      setIsScanning(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Infringement Detection</h1>
            <p className="text-muted-foreground">Monitor and manage potential trademark infringements</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2" onClick={startScan} disabled={isScanning}>
              {isScanning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
              <span>{isScanning ? "Scanning..." : "Scan Now"}</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              <span>Configure AI</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Potential Infringements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{infringements.filter((i) => i.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {infringements.filter((i) => i.status === "resolved").length} resolved,{" "}
                {infringements.filter((i) => i.status === "dismissed").length} dismissed
              </p>
              <div className="mt-2">
                <Progress value={30} className="h-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                Platforms Monitored
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platforms.filter((p) => p.active).length}</div>
              <p className="text-xs text-muted-foreground mt-1">{platforms.length} total available platforms</p>
              <div className="mt-2">
                <Progress value={(platforms.filter((p) => p.active).length / platforms.length) * 100} className="h-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-green-500" />
                Detection Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">Based on user feedback and verification</p>
              <div className="mt-2">
                <Progress value={92} className="h-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="infringements">Infringements</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="settings">AI Settings</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full md:w-[200px] pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detection Overview</CardTitle>
                <CardDescription>AI-powered infringement detection metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Infringement Types</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Visual Similarity", value: 65, color: "bg-blue-500" },
                        { label: "Name/Text Match", value: 25, color: "bg-purple-500" },
                        { label: "Combined Elements", value: 10, color: "bg-amber-500" },
                      ].map((type, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{type.label}</span>
                            <span className="font-medium">{type.value}%</span>
                          </div>
                          <Progress value={type.value} className={`h-2 ${type.color}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-4">Platform Distribution</h3>
                    <div className="space-y-4">
                      {[
                        { label: "NFT Marketplaces", value: 45, color: "bg-green-500" },
                        { label: "Social Media", value: 30, color: "bg-indigo-500" },
                        { label: "Web3 Domains", value: 15, color: "bg-red-500" },
                        { label: "DApps", value: 10, color: "bg-yellow-500" },
                      ].map((platform, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{platform.label}</span>
                            <span className="font-medium">{platform.value}%</span>
                          </div>
                          <Progress value={platform.value} className={`h-2 ${platform.color}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium mb-4">Recent Detections</h3>
                  <div className="space-y-4">
                    {infringements.slice(0, 3).map((infringement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-md hover:bg-accent/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded bg-muted flex items-center justify-center overflow-hidden">
                          <img
                            src={infringement.image || "/placeholder.svg"}
                            alt={infringement.trademark}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{infringement.trademark}</p>
                            <Badge
                              variant={
                                infringement.status === "pending"
                                  ? "secondary"
                                  : infringement.status === "resolved"
                                    ? "outline"
                                    : "destructive"
                              }
                              className="capitalize"
                            >
                              {infringement.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {infringement.platform} • {infringement.date} • {infringement.confidence}% match
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <span className="text-xs">View</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infringements">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Potential Infringements</CardTitle>
                  <CardDescription>AI-detected trademark infringements</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="confidence" className="text-sm">
                      Confidence Threshold:
                    </Label>
                    <Slider
                      id="confidence"
                      min={50}
                      max={100}
                      step={5}
                      value={[confidenceThreshold]}
                      onValueChange={(value) => setConfidenceThreshold(value[0])}
                      className="w-32"
                    />
                    <span className="text-sm font-medium">{confidenceThreshold}%</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-7 p-4 bg-muted/50 text-sm font-medium">
                    <div>Trademark</div>
                    <div>Platform</div>
                    <div>Type</div>
                    <div>Detection Date</div>
                    <div>Confidence</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {filteredInfringements.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      No infringements found matching your criteria.
                    </div>
                  ) : (
                    filteredInfringements.map((infringement) => (
                      <div key={infringement.id} className="grid grid-cols-7 p-4 border-t items-center text-sm">
                        <div className="font-medium">{infringement.trademark}</div>
                        <div>{infringement.platform}</div>
                        <div>{infringement.type}</div>
                        <div>{infringement.date}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={infringement.confidence}
                              className={`h-2 w-16 ${
                                infringement.confidence >= 90
                                  ? "bg-red-500"
                                  : infringement.confidence >= 75
                                    ? "bg-amber-500"
                                    : "bg-blue-500"
                              }`}
                            />
                            <span>{infringement.confidence}%</span>
                          </div>
                        </div>
                        <div>
                          <Badge
                            variant={
                              infringement.status === "pending"
                                ? "secondary"
                                : infringement.status === "resolved"
                                  ? "outline"
                                  : "destructive"
                            }
                            className="capitalize"
                          >
                            {infringement.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {infringement.status === "pending" && (
                            <>
                              <Button variant="ghost" size="icon" className="text-green-500">
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500">
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="platforms">
            <Card>
              <CardHeader>
                <CardTitle>Monitored Platforms</CardTitle>
                <CardDescription>Configure which platforms to monitor for infringements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platforms.map((platform, i) => (
                    <Card key={i} className="border-border/40">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{platform.name}</CardTitle>
                          <Switch checked={platform.active} />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-muted-foreground mb-2">
                          {platform.count} items scanned this month
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={platform.active ? 100 : 0} className="h-1 flex-1" />
                          <Badge variant={platform.active ? "default" : "outline"}>
                            {platform.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>AI Detection Settings</CardTitle>
                <CardDescription>Configure the AI detection parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Detection Sensitivity</Label>
                      <div className="flex items-center gap-4">
                        <Slider defaultValue={[75]} max={100} step={5} className="flex-1" />
                        <span className="text-sm font-medium w-8">75%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Higher sensitivity may result in more false positives
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Scan Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Detection Types</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Visual Similarity</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Text/Name Matching</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Domain Similarity</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Notification Settings</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Email Alerts</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Dashboard Notifications</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Weekly Report</span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>AI Model Selection</Label>
                      <Select defaultValue="advanced">
                        <SelectTrigger>
                          <SelectValue placeholder="Select AI model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Detection</SelectItem>
                          <SelectItem value="advanced">Advanced Detection</SelectItem>
                          <SelectItem value="premium">Premium Detection</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Advanced model provides better accuracy for visual similarity
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Automatic Actions</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Auto-generate takedown notices</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Auto-flag high confidence matches</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Auto-dismiss low confidence matches</span>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button>Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
