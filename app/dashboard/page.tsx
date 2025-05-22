"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Search,
  Bell,
  Settings,
  FileText,
  AlertTriangle,
  Check,
  Clock,
  ArrowUpRight,
  Filter,
  Download,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  // Dummy data
  const trademarks = [
    { id: 1, name: "MetaVerse Pro", status: "active", registrationDate: "2023-05-15", type: "Logo", infringements: 0 },
    { id: 2, name: "CryptoShield", status: "active", registrationDate: "2023-06-22", type: "Name", infringements: 2 },
    {
      id: 3,
      name: "BlockGuard",
      status: "pending",
      registrationDate: "2023-08-10",
      type: "Logo + Name",
      infringements: 1,
    },
    { id: 4, name: "DeFi Secure", status: "active", registrationDate: "2023-04-05", type: "Name", infringements: 0 },
    { id: 5, name: "Web3 Innovate", status: "active", registrationDate: "2023-07-18", type: "Logo", infringements: 0 },
  ]

  const infringements = [
    { id: 1, trademark: "CryptoShield", platform: "OpenSea", date: "2023-09-05", status: "pending", confidence: 92 },
    { id: 2, name: "CryptoShield", platform: "Rarible", date: "2023-09-12", status: "pending", confidence: 87 },
    { id: 3, name: "BlockGuard", platform: "Foundation", date: "2023-08-28", status: "resolved", confidence: 95 },
  ]

  const licenses = [
    {
      id: 1,
      trademark: "MetaVerse Pro",
      licensee: "Tech Corp",
      type: "Commercial",
      date: "2023-06-10",
      status: "active",
    },
    { id: 2, trademark: "CryptoShield", licensee: "Secure Inc", type: "Limited", date: "2023-07-22", status: "active" },
    {
      id: 3,
      trademark: "DeFi Secure",
      licensee: "Finance LLC",
      type: "Commercial",
      date: "2023-05-15",
      status: "expired",
    },
  ]

  const disputes = [
    { id: 1, trademark: "CryptoShield", opponent: "Shield Crypto", date: "2023-09-01", status: "in progress" },
    { id: 2, trademark: "BlockGuard", opponent: "GuardChain", date: "2023-08-15", status: "resolved" },
  ]

  const filteredTrademarks = trademarks.filter((trademark) =>
    trademark.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Manage and monitor your trademark protection</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Notifications</span>
              <Badge className="ml-1 bg-primary text-xs h-5 w-5 flex items-center justify-center p-0">3</Badge>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Settings</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              <span>New Trademark</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Protected Trademarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{trademarks.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {trademarks.filter((t) => t.status === "active").length} active,{" "}
                {trademarks.filter((t) => t.status === "pending").length} pending
              </p>
              <div className="mt-2">
                <Progress value={80} className="h-1" />
              </div>
            </CardContent>
          </Card>
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
                {infringements.filter((i) => i.status === "resolved").length} resolved this month
              </p>
              <div className="mt-2">
                <Progress value={30} className="h-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-500" />
                Active Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{licenses.filter((l) => l.status === "active").length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {licenses.filter((l) => l.status === "expired").length} expired, 0 pending renewal
              </p>
              <div className="mt-2">
                <Progress value={60} className="h-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trademarks">Trademarks</TabsTrigger>
              <TabsTrigger value="infringements">Infringements</TabsTrigger>
              <TabsTrigger value="licenses">Licenses</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
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

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your trademark protection activity over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Shield className="h-4 w-4" />,
                      text: "New trademark registered: 'MetaVerse Pro'",
                      time: "2h ago",
                      color: "text-green-500",
                    },
                    {
                      icon: <AlertTriangle className="h-4 w-4" />,
                      text: "Potential infringement detected on OpenSea",
                      time: "5h ago",
                      color: "text-amber-500",
                    },
                    {
                      icon: <FileText className="h-4 w-4" />,
                      text: "License agreement signed with Tech Corp",
                      time: "1d ago",
                      color: "text-blue-500",
                    },
                    {
                      icon: <Check className="h-4 w-4" />,
                      text: "Dispute resolved in your favor",
                      time: "2d ago",
                      color: "text-green-500",
                    },
                    {
                      icon: <Clock className="h-4 w-4" />,
                      text: "Trademark renewal reminder: 'Web3 Innovate'",
                      time: "3d ago",
                      color: "text-blue-500",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-md hover:bg-accent/50 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-background flex items-center justify-center ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{item.text}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <span className="text-xs">Details</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trademark Status</CardTitle>
                  <CardDescription>Overview of your trademark portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                      <div
                        className="absolute inset-0 rounded-full border-8 border-primary"
                        style={{
                          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                          transform: "rotate(90deg) scale(0.8)",
                          transformOrigin: "center",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 rounded-full border-8 border-green-500"
                        style={{
                          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                          transform: "rotate(90deg) scale(0.6)",
                          transformOrigin: "center",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold">80%</span>
                        <span className="text-sm text-muted-foreground">Protected</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Active</div>
                      <div className="text-sm font-medium">4</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Pending</div>
                      <div className="text-sm font-medium">1</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Expired</div>
                      <div className="text-sm font-medium">0</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Protection Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "Infringement Detection Rate", value: 92, color: "bg-green-500" },
                      { label: "Resolution Time (avg)", value: 65, color: "bg-amber-500" },
                      { label: "License Compliance", value: 100, color: "bg-green-500" },
                      { label: "Cross-Chain Coverage", value: 75, color: "bg-blue-500" },
                    ].map((metric, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{metric.label}</span>
                          <span className="font-medium">{metric.value}%</span>
                        </div>
                        <Progress value={metric.value} className={`h-2 ${metric.color}`} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trademarks">
            <Card>
              <CardHeader>
                <CardTitle>Your Trademarks</CardTitle>
                <CardDescription>Manage your registered trademarks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 p-4 bg-muted/50 text-sm font-medium">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Registration Date</div>
                    <div>Status</div>
                    <div>Infringements</div>
                    <div>Actions</div>
                  </div>
                  {filteredTrademarks.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      No trademarks found matching your search.
                    </div>
                  ) : (
                    filteredTrademarks.map((trademark) => (
                      <div key={trademark.id} className="grid grid-cols-6 p-4 border-t items-center text-sm">
                        <div className="font-medium">{trademark.name}</div>
                        <div>{trademark.type}</div>
                        <div>{trademark.registrationDate}</div>
                        <div>
                          <Badge variant={trademark.status === "active" ? "default" : "outline"} className="capitalize">
                            {trademark.status}
                          </Badge>
                        </div>
                        <div>
                          {trademark.infringements > 0 ? (
                            <Badge variant="destructive">{trademark.infringements}</Badge>
                          ) : (
                            <Badge variant="outline">None</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infringements">
            <Card>
              <CardHeader>
                <CardTitle>Potential Infringements</CardTitle>
                <CardDescription>AI-detected trademark infringements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 p-4 bg-muted/50 text-sm font-medium">
                    <div>Trademark</div>
                    <div>Platform</div>
                    <div>Detection Date</div>
                    <div>Confidence</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {infringements.map((infringement) => (
                    <div key={infringement.id} className="grid grid-cols-6 p-4 border-t items-center text-sm">
                      <div className="font-medium">{infringement.trademark}</div>
                      <div>{infringement.platform}</div>
                      <div>{infringement.date}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Progress value={infringement.confidence} className="h-2 w-16" />
                          <span>{infringement.confidence}%</span>
                        </div>
                      </div>
                      <div>
                        <Badge
                          variant={infringement.status === "resolved" ? "outline" : "secondary"}
                          className="capitalize"
                        >
                          {infringement.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Take Action
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="licenses">
            <Card>
              <CardHeader>
                <CardTitle>License Agreements</CardTitle>
                <CardDescription>Manage your trademark licenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 p-4 bg-muted/50 text-sm font-medium">
                    <div>Trademark</div>
                    <div>Licensee</div>
                    <div>Type</div>
                    <div>Issue Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {licenses.map((license) => (
                    <div key={license.id} className="grid grid-cols-6 p-4 border-t items-center text-sm">
                      <div className="font-medium">{license.trademark}</div>
                      <div>{license.licensee}</div>
                      <div>{license.type}</div>
                      <div>{license.date}</div>
                      <div>
                        <Badge variant={license.status === "active" ? "default" : "outline"} className="capitalize">
                          {license.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disputes">
            <Card>
              <CardHeader>
                <CardTitle>Dispute Resolution</CardTitle>
                <CardDescription>Track and manage trademark disputes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 p-4 bg-muted/50 text-sm font-medium">
                    <div>Trademark</div>
                    <div>Opposing Party</div>
                    <div>Filing Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {disputes.map((dispute) => (
                    <div key={dispute.id} className="grid grid-cols-5 p-4 border-t items-center text-sm">
                      <div className="font-medium">{dispute.trademark}</div>
                      <div>{dispute.opponent}</div>
                      <div>{dispute.date}</div>
                      <div>
                        <Badge variant={dispute.status === "resolved" ? "outline" : "secondary"} className="capitalize">
                          {dispute.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          {dispute.status === "resolved" ? "View Resolution" : "Manage"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
