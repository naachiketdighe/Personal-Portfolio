"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, Plus, X, Camera, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"
import { AdminLogin } from "@/components/admin-login"

// Showcase data with honors portfolio format
const showcaseData = [
  {
    id: "student-orientation-leader",
    title: "Student Orientation Leader",
    summary:
      "As a Student Orientation Leader, I welcomed new students to campus and facilitated their transition to college life. I led campus tours, answered questions about academic programs, and assisted with orientation events. This role developed my communication and leadership skills while teaching me to engage with diverse groups of people. The experience transformed my understanding of what it means to be a Global Citizen Scholar by highlighting the importance of creating inclusive environments where all students feel welcome. I learned that being a Global Citizen Scholar means actively helping others navigate new situations with empathy and cultural awareness. By guiding students from various backgrounds, I gained perspective on different educational journeys and the challenges many face when entering higher education.",
    visualExplanation:
      "I've chosen these photographs from orientation events to represent my learning because they capture the collaborative spirit and community-building aspects of the role. These images show moments of connection between new students and demonstrate how orientation activities help create a sense of belonging. The photos reflect my growth as a facilitator and mentor, showcasing my ability to create welcoming spaces for diverse groups of students.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "honors-belong-coordinator",
    title: "Honors Belong Coordinator",
    summary:
      "As Honors Belong Coordinator, I designed and implemented programs promoting diversity, equity, and inclusion within our Honors community. I organized educational events like the Women's History Month Jeopardy game, which combined fun competition with learning about women's historical contributions. This experience deepened my understanding of what it means to be a Global Citizen Scholar by highlighting the importance of creating spaces where diverse perspectives are valued and celebrated. I learned to facilitate difficult conversations about social issues while ensuring all participants felt heard and respected. This role taught me that being a Global Citizen Scholar requires active engagement with different viewpoints and a commitment to fostering inclusive communities.",
    visualExplanation:
      "I've selected this image from our Women's History Month event as it represents the intersection of education and community building that defined my role. The visual captures students actively engaging with historical content in a collaborative setting, demonstrating how educational programming can bring people together while expanding their worldviews. This representation shows my ability to create meaningful learning experiences that connect academic content with real-world issues of equity and inclusion.",
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    id: "spain-study-work-abroad",
    title: "Spain Study & Work Abroad",
    summary:
      "My study abroad experience in Bilbao, Spain transformed my academic and personal development. I immersed myself in Spanish culture, improved my language skills, and gained international work experience. Living in Bilbao allowed me to explore Basque culture, visit historical sites, and engage with local traditions. This experience redefined my understanding of being a Global Citizen Scholar by demonstrating the value of cultural immersion and perspective-taking. I learned that true global citizenship requires stepping outside one's comfort zone to engage authentically with different worldviews. The challenges of navigating a new culture and language taught me resilience and adaptability, while working alongside Spanish colleagues showed me different approaches to problem-solving and collaboration.",
    visualExplanation:
      "These photographs from my time in Spain represent my learning journey because they capture both the cultural immersion and personal growth aspects of my experience. The images show my engagement with my friends from Spain, Germany and France, who I got very close to during my 4 months in Spain,",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    summary:
      "Developing my personal portfolio website allowed me to showcase my technical skills while creating a professional online presence. I implemented modern web technologies including TypeScript, React, and Tailwind CSS to build a responsive site that adapts to different devices. This project challenged me to think critically about how to present my work and experiences effectively to different audiences. The experience enhanced my understanding of being a Global Citizen Scholar by emphasizing the importance of digital literacy and professional communication in our interconnected world. I learned that sharing my work globally requires thoughtful design choices that consider accessibility and cross-cultural communication. The project also taught me to reflect deeply on my experiences and articulate their significance.",
    visualExplanation:
      "I've chosen screenshots of my portfolio website to represent my learning because they demonstrate both my technical skills and my ability to communicate my experiences effectively. These visuals show how I've organized and presented my work in a way that's accessible to a global audience. The design elements reflect my attention to detail and understanding of user experience, while the content demonstrates my capacity for self-reflection and professional presentation.",
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    id: "ceas-ambassador-treasurer",
    title: "CEAS Ambassador, Treasurer",
    summary:
      "As a CEAS Ambassador and Treasurer, I represented the College of Engineering to prospective students while managing the organization's finances. I conducted specialized tours of engineering facilities, shared my experiences with interested students, and participated in recruitment events. As Treasurer, I handled budget planning, expense tracking, and financial reporting. This dual role expanded my understanding of being a Global Citizen Scholar by highlighting the importance of responsible stewardship and effective communication. I learned that global citizenship includes financial accountability and the ability to make complex technical information accessible to diverse audiences. The experience taught me to bridge the gap between technical expertise and public engagement, a crucial skill for engineers working in global contexts.",
    visualExplanation:
      "These images from engineering tours and budget presentations represent my learning because they capture both aspects of my role: public representation and financial management. The visuals show me engaging with prospective students and presenting financial information to stakeholders, demonstrating my ability to communicate effectively in different contexts. I selected these representations because they illustrate how I've developed professional skills that combine technical knowledge with interpersonal communication.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

// Maximum number of images allowed per showcase item
const MAX_IMAGES = 5

// Maximum size for compressed images (in bytes)
const MAX_IMAGE_SIZE = 500 * 1024 // 500KB

export default function ShowcaseItemPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { isAdmin } = useAuth()
  const [images, setImages] = useState<string[]>([])
  const [showImageForm, setShowImageForm] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isCompressing, setIsCompressing] = useState(false)

  // Find the showcase item by ID
  const showcaseItem = showcaseData.find((item) => item.id === params.id)

  // Initialize images from the showcase data
  useEffect(() => {
    if (showcaseItem) {
      try {
        // Load images from localStorage if available, otherwise use default images
        const savedImages = localStorage.getItem(`showcase-images-${params.id}`)
        if (savedImages) {
          setImages(JSON.parse(savedImages))
        } else {
          setImages(showcaseItem.images || [])
        }
      } catch (err) {
        console.error("Error loading images:", err)
        // Fallback to default images if there's an error
        setImages(showcaseItem.images || [])
      }
    }
  }, [showcaseItem, params.id])

  // Save images to localStorage when they change
  useEffect(() => {
    if (images.length > 0) {
      try {
        localStorage.setItem(`showcase-images-${params.id}`, JSON.stringify(images))
      } catch (err) {
        console.error("Error saving images:", err)
        setError("Unable to save images. Storage quota may be exceeded.")
      }
    }
  }, [images, params.id])

  // If item not found, show error
  if (!showcaseItem) {
    return (
      <div className="bg-gradient-to-br from-teal-950 via-cyan-900 to-teal-950 text-emerald-50 min-h-screen p-6 md:p-12">
        <Button
          variant="ghost"
          className="text-amber-200 mb-6 flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Button>
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h2 className="text-3xl font-serif text-amber-200 mb-4">Showcase Item Not Found</h2>
          <p className="text-cyan-200">The showcase item you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // Compress image before adding
  const compressImage = (file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.7): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsCompressing(true)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const img = new Image()
        img.crossOrigin = "anonymous" // Add crossOrigin attribute
        img.src = event.target?.result as string

        img.onload = () => {
          try {
            // Calculate new dimensions while maintaining aspect ratio
            let width = img.width
            let height = img.height
            if (width > maxWidth) {
              height = (height * maxWidth) / width
              width = maxWidth
            }
            if (height > maxHeight) {
              width = (width * maxHeight) / height
              height = maxHeight
            }

            // Create canvas and draw image
            const canvas = document.createElement("canvas")
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext("2d")

            if (!ctx) {
              setIsCompressing(false)
              reject(new Error("Could not get canvas context"))
              return
            }

            ctx.drawImage(img, 0, 0, width, height)

            // Get compressed image as data URL
            const compressedDataUrl = canvas.toDataURL("image/jpeg", quality)

            // Check if the compressed image is still too large
            const base64Data = compressedDataUrl.split(",")[1]
            const byteSize = Math.ceil((base64Data.length * 3) / 4)

            if (byteSize > MAX_IMAGE_SIZE && quality > 0.3) {
              // Try again with lower quality
              resolve(compressImage(file, maxWidth, maxHeight, quality - 0.1))
            } else {
              setIsCompressing(false)
              resolve(compressedDataUrl)
            }
          } catch (err) {
            setIsCompressing(false)
            console.error("Canvas operation failed:", err)
            reject(new Error("Image processing failed"))
          }
        }

        img.onerror = (err) => {
          console.error("Image loading error:", err)
          setIsCompressing(false)
          reject(new Error("Failed to load image"))
        }
      }
      reader.onerror = () => {
        setIsCompressing(false)
        reject(new Error("Failed to read file"))
      }
    })
  }

  const addImage = async () => {
    if (selectedFile && previewUrl) {
      if (images.length >= MAX_IMAGES) {
        setError(`Maximum of ${MAX_IMAGES} images allowed. Please remove some images first.`)
        return
      }

      try {
        let imageToAdd = previewUrl

        // Try to compress the image, but use the original if compression fails
        try {
          const compressedImage = await compressImage(selectedFile)
          imageToAdd = compressedImage
        } catch (err) {
          console.warn("Image compression failed, using original image:", err)
          // Continue with the original preview URL
        }

        // Add the image
        const newImages = [...images, imageToAdd]
        setImages(newImages)

        // Try to save to localStorage
        try {
          localStorage.setItem(`showcase-images-${params.id}`, JSON.stringify(newImages))
        } catch (err) {
          console.error("Error saving images:", err)
          setError("Unable to save all images. Storage quota exceeded. Try using smaller or fewer images.")
          // Remove the last added image if we couldn't save it
          setImages(images)
          return
        }

        // Reset form
        setSelectedFile(null)
        setPreviewUrl(null)
        setShowImageForm(false)
        setError(null)
      } catch (err) {
        console.error("Error processing image:", err)
        setError("Failed to process image. Please try a different image.")
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size before processing
      if (file.size > 5 * 1024 * 1024) {
        // 5MB
        setError("File is too large. Please select an image smaller than 5MB.")
        return
      }

      setError(null)
      setSelectedFile(file)

      // Create a preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages)
    try {
      if (newImages.length > 0) {
        localStorage.setItem(`showcase-images-${params.id}`, JSON.stringify(newImages))
      } else {
        localStorage.removeItem(`showcase-images-${params.id}`)
      }
      setError(null)
    } catch (err) {
      console.error("Error saving images after removal:", err)
    }
  }

  return (
    <div className="bg-gradient-to-br from-teal-950 via-cyan-900 to-teal-950 text-emerald-50 min-h-screen p-6 md:p-12">
      <AdminLogin />

      <Button variant="ghost" className="text-amber-200 mb-6 flex items-center gap-2" onClick={() => router.push("/")}>
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200">{showcaseItem.title}</h1>

        {/* Honors Learning Portfolio Format */}
        <Card className="bg-gradient-to-br from-cyan-900/60 to-teal-800/60 backdrop-blur-sm border-cyan-600/50 mb-8">
          <CardContent className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-serif text-amber-200 mb-3">Experience Summary</h2>
              <p className="text-cyan-100">{showcaseItem.summary}</p>
              <div className="mt-2 text-xs text-cyan-400 text-right">
                ~{showcaseItem.summary.split(" ").length} words
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-serif text-amber-200">Visual Representation</h2>
            {isAdmin && images.length < MAX_IMAGES && (
              <Button
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-900 hover:from-amber-300 hover:to-yellow-200 border-none"
                onClick={() => setShowImageForm(true)}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Image
              </Button>
            )}
          </div>

          <Card className="bg-gradient-to-br from-cyan-900/60 to-teal-800/60 backdrop-blur-sm border-cyan-600/50 mb-6">
            <CardContent className="p-6">
              <p className="text-cyan-100">{showcaseItem.visualExplanation}</p>
            </CardContent>
          </Card>

          {error && (
            <div className="bg-red-900/30 border border-red-700 rounded-md p-3 mb-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {isAdmin && showImageForm && (
            <Card className="bg-gradient-to-br from-cyan-900/60 to-teal-800/60 backdrop-blur-sm border-cyan-600/50 mb-4">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-amber-200 font-medium">Add New Image</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-cyan-300"
                      onClick={() => {
                        setShowImageForm(false)
                        setSelectedFile(null)
                        setPreviewUrl(null)
                        setError(null)
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-cyan-200 text-sm mb-1 block">
                        Select an image from your device (max {MAX_IMAGES} images, 5MB per image)
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-cyan-200
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0
                          file:text-sm file:font-medium
                          file:bg-cyan-800 file:text-cyan-100
                          hover:file:bg-cyan-700
                          cursor-pointer"
                      />
                    </label>

                    {previewUrl && (
                      <div className="mt-2">
                        <p className="text-cyan-200 text-sm mb-2">Preview:</p>
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Preview"
                          className="max-h-40 rounded-md border border-cyan-700"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      className="bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-900 hover:from-amber-300 hover:to-yellow-200 border-none"
                      onClick={addImage}
                      disabled={!selectedFile || isCompressing}
                    >
                      {isCompressing ? (
                        <>Compressing...</>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" /> Add Image
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image || "/placeholder.svg?height=200&width=400"}
                    alt={`${showcaseItem.title} image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border border-cyan-600/50"
                    onError={(e) => {
                      console.warn(`Image failed to load: ${index}`)
                      ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=400"
                    }}
                  />
                  {isAdmin && (
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cyan-900/30 border border-cyan-700 rounded-lg p-8 flex flex-col items-center justify-center">
              <Camera className="h-12 w-12 text-cyan-600 mb-4" />
              <p className="text-cyan-300 mb-2">No images available</p>
              <p className="text-cyan-400 text-sm text-center max-w-md">
                {isAdmin
                  ? "Add images to showcase your experience using the 'Add Image' button above."
                  : "The gallery for this showcase item is currently empty."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
