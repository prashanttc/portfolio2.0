import Image from "next/image"
import { Calendar, User } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Web Design Trends in 2023",
      excerpt: "Discover the latest trends in web design that are dominating the industry this year.",
      date: "April 15, 2023",
      author: "Richard Hanrick",
      image: "/placeholder.svg?height=250&width=400",
      category: "Web Design",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Better Performance",
      excerpt: "Learn the best practices for optimizing your website to improve loading speed and user experience.",
      date: "March 22, 2023",
      author: "Richard Hanrick",
      image: "/placeholder.svg?height=250&width=400",
      category: "Development",
    },
    {
      id: 3,
      title: "The Importance of User Experience in Mobile App Design",
      excerpt: "Explore why user experience is crucial for the success of mobile applications.",
      date: "February 10, 2023",
      author: "Richard Hanrick",
      image: "/placeholder.svg?height=250&width=400",
      category: "UX Design",
    },
    {
      id: 4,
      title: "Creating Effective Brand Identity for Startups",
      excerpt: "A guide to developing a strong brand identity that resonates with your target audience.",
      date: "January 5, 2023",
      author: "Richard Hanrick",
      image: "/placeholder.svg?height=250&width=400",
      category: "Branding",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Blog</h2>
      <div className="w-12 h-1 bg-[#ffc254] mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-[#222222] rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#ffc254] text-black text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 hover:text-[#ffc254] transition-colors">{post.title}</h3>

              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

              <div className="flex items-center text-xs text-gray-400">
                <div className="flex items-center mr-4">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-3 h-3 mr-1" />
                  {post.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
