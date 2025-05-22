"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, ArrowRight, Check, Info, AlertTriangle } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFileUpload = (e) => {
    // Simulate file upload
    const files = Array.from(e.target.files)
    setUploadedFiles(files.map((file) => ({ name: file.name, size: file.size })))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  const steps = [
    { number: 1, title: "Trademark Details" },
    { number: 2, title: "Asset Upload" },
    { number: 3, title: "Protection Settings" },
    { number: 4, title: "Review & Submit" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Register Your Trademark</h1>
            <p className="text-muted-foreground">Protect your brand with blockchain-based trademark registration</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step > s.number
                        ? "bg-primary text-primary-foreground"
                        : step === s.number
                          ? "bg-primary/20 text-primary border-2 border-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.number ? <Check className="h-5 w-5" /> : s.number}
                  </div>
                  <div className="text-xs font-medium text-center">{s.title}</div>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-muted w-full rounded-full"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {isComplete ? (
            <Card className="border-green-500/20 shadow-lg shadow-green-500/5">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl">Registration Complete!</CardTitle>
                <CardDescription>Your trademark has been successfully registered on the blockchain</CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm">
                  <div className="font-medium mb-1">Transaction Hash</div>
                  <div className="text-muted-foreground break-all">
                    0x7a9d853e4b2fc3a43b5f1a0c856c7b6940d81a2e5c6db4c17acb1e0a6f3a8e12
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your trademark is now protected by Story Protocol. You can view and manage it from your dashboard.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline">View Transaction</Button>
                <Button>Go to Dashboard</Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Trademark Information"}
                  {step === 2 && "Upload Trademark Assets"}
                  {step === 3 && "Protection Settings"}
                  {step === 4 && "Review & Submit"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Provide details about your trademark"}
                  {step === 2 && "Upload visual assets for your trademark"}
                  {step === 3 && "Configure protection parameters"}
                  {step === 4 && "Review your information before submission"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Trademark Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Trademark Name</Label>
                          <Input id="name" placeholder="Enter trademark name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="type">Trademark Type</Label>
                          <Select defaultValue="wordmark">
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wordmark">Wordmark</SelectItem>
                              <SelectItem value="logo">Logo</SelectItem>
                              <SelectItem value="combined">Combined (Word + Logo)</SelectItem>
                              <SelectItem value="slogan">Slogan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Describe your trademark in detail" rows={4} />
                      </div>

                      <div className="space-y-2">
                        <Label>Categories</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {["Technology", "Finance", "Entertainment", "Healthcare", "Education", "Retail"].map(
                            (category) => (
                              <div key={category} className="flex items-center space-x-2">
                                <Checkbox id={`category-${category}`} />
                                <label
                                  htmlFor={`category-${category}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {category}
                                </label>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Ownership Type</Label>
                        <RadioGroup defaultValue="individual">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="individual" id="individual" />
                              <Label htmlFor="individual">Individual</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="company" id="company" />
                              <Label htmlFor="company">Company/Organization</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="dao" id="dao" />
                              <Label htmlFor="dao">DAO</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Asset Upload */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <Upload className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Upload Trademark Assets</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Drag and drop your files here, or click to browse
                          </p>
                          <Input type="file" className="hidden" id="file-upload" multiple onChange={handleFileUpload} />
                          <Label
                            htmlFor="file-upload"
                            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                          >
                            Select Files
                          </Label>
                          <p className="text-xs text-muted-foreground mt-2">
                            Supported formats: PNG, JPG, SVG, PDF (max 10MB)
                          </p>
                        </div>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <Label>Uploaded Files</Label>
                          <div className="border rounded-md divide-y">
                            {uploadedFiles.map((file, i) => (
                              <div key={i} className="flex items-center justify-between p-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                                    <FileIcon className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label>Asset Information</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="creation-date">Creation Date</Label>
                            <Input type="date" id="creation-date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="first-use">First Use Date</Label>
                            <Input type="date" id="first-use" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Protection Settings */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Protection Scope</Label>
                        <Tabs defaultValue="standard">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="basic">Basic</TabsTrigger>
                            <TabsTrigger value="standard">Standard</TabsTrigger>
                            <TabsTrigger value="comprehensive">Comprehensive</TabsTrigger>
                          </TabsList>
                          <TabsContent value="basic" className="p-4 border rounded-md mt-2">
                            <h4 className="font-medium mb-2">Basic Protection</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Essential protection for your trademark with basic monitoring.
                            </p>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>On-chain registration</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Basic infringement detection</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Simple licensing templates</span>
                              </li>
                            </ul>
                          </TabsContent>
                          <TabsContent value="standard" className="p-4 border rounded-md mt-2">
                            <h4 className="font-medium mb-2">Standard Protection</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Enhanced protection with advanced monitoring and licensing.
                            </p>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>All Basic features</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Advanced AI infringement detection</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Custom licensing options</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Cross-chain protection</span>
                              </li>
                            </ul>
                          </TabsContent>
                          <TabsContent value="comprehensive" className="p-4 border rounded-md mt-2">
                            <h4 className="font-medium mb-2">Comprehensive Protection</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Maximum protection with real-time monitoring and legal support.
                            </p>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>All Standard features</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Real-time monitoring</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Automated takedown notices</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Priority dispute resolution</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Legal action templates</span>
                              </li>
                            </ul>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <div className="space-y-2">
                        <Label>Monitoring Settings</Label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label className="text-base">Marketplaces</Label>
                              <p className="text-sm text-muted-foreground">
                                Monitor NFT and digital asset marketplaces
                              </p>
                            </div>
                            <Checkbox defaultChecked id="marketplaces" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label className="text-base">Social Media</Label>
                              <p className="text-sm text-muted-foreground">Monitor social media platforms</p>
                            </div>
                            <Checkbox defaultChecked id="social" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label className="text-base">Web3 Domains</Label>
                              <p className="text-sm text-muted-foreground">Monitor Web3 domain registrations</p>
                            </div>
                            <Checkbox defaultChecked id="domains" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label className="text-base">DApps</Label>
                              <p className="text-sm text-muted-foreground">Monitor decentralized applications</p>
                            </div>
                            <Checkbox id="dapps" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Licensing Preferences</Label>
                        <Select defaultValue="custom">
                          <SelectTrigger>
                            <SelectValue placeholder="Select licensing model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restrictive">Restrictive (No Derivatives)</SelectItem>
                            <SelectItem value="permissive">Permissive (Allow Derivatives)</SelectItem>
                            <SelectItem value="commercial">Commercial License</SelectItem>
                            <SelectItem value="custom">Custom License</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                        <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium">Registration Information</p>
                          <p className="text-muted-foreground">
                            Please review all information carefully before submitting. Once registered on the
                            blockchain, some information cannot be changed.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="border rounded-md p-4">
                          <h3 className="text-sm font-medium mb-2">Trademark Details</h3>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <div className="text-muted-foreground">Name:</div>
                            <div>MetaVerse Pro</div>
                            <div className="text-muted-foreground">Type:</div>
                            <div>Combined (Word + Logo)</div>
                            <div className="text-muted-foreground">Categories:</div>
                            <div>Technology, Finance</div>
                            <div className="text-muted-foreground">Ownership:</div>
                            <div>Company/Organization</div>
                          </div>
                        </div>

                        <div className="border rounded-md p-4">
                          <h3 className="text-sm font-medium mb-2">Assets</h3>
                          <div className="flex gap-3 mb-2">
                            {uploadedFiles.length > 0 ? (
                              uploadedFiles.map((file, i) => (
                                <div
                                  key={i}
                                  className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center"
                                >
                                  <FileIcon className="h-6 w-6 text-primary" />
                                </div>
                              ))
                            ) : (
                              <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                                <FileIcon className="h-6 w-6 text-primary" />
                              </div>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <div className="text-muted-foreground">Creation Date:</div>
                            <div>2023-01-15</div>
                            <div className="text-muted-foreground">First Use:</div>
                            <div>2023-02-01</div>
                          </div>
                        </div>

                        <div className="border rounded-md p-4">
                          <h3 className="text-sm font-medium mb-2">Protection Settings</h3>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <div className="text-muted-foreground">Protection Level:</div>
                            <div>Standard</div>
                            <div className="text-muted-foreground">Monitoring:</div>
                            <div>Marketplaces, Social Media, Web3 Domains</div>
                            <div className="text-muted-foreground">Licensing Model:</div>
                            <div>Custom License</div>
                          </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-md p-4 flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium">Registration Fee</p>
                            <p className="text-muted-foreground">
                              A one-time registration fee of 0.05 ETH will be charged to register your trademark on the
                              blockchain.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                ) : (
                  <Button variant="outline" asChild>
                    <a href="/">Cancel</a>
                  </Button>
                )}
                {step < 4 ? (
                  <Button onClick={() => setStep(step + 1)}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Register Trademark</>
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

// Additional components
const FileIcon = ({ className }) => {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  )
}

const X = ({ className }) => {
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
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  )
}

const Spinner = ({ className }) => {
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
  )
}
