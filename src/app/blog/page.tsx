import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react"; // Added ArrowRight

// Sample blog post data - replace with actual data fetching
const blogPosts = [
  {
    id: 1,
    title: "The Story Behind Pune's Favorite Pani Puri",
    excerpt: "Discover the history and evolution of Pani Puri at Ganesh Bhel, from its humble beginnings to becoming an iconic street food.",
    author: "Ganesh Bhel Team",
    date: "2024-07-15",
    imageUrl: "https://picsum.photos/seed/pani-puri-history/400/250",
    slug: "story-of-pani-puri",
     dataAiHint: "pani puri street food history vintage"
  },
  {
    id: 2,
    title: "Why Hygiene Matters: Our Commitment to Quality",
    excerpt: "Learn about our ISO-certified practices and the steps we take to ensure every bite is safe and delicious.",
    author: "Quality Assurance Dept.",
    date: "2024-07-08",
    imageUrl: "https://picsum.photos/seed/hygiene-commitment/400/250",
    slug: "hygiene-commitment",
     dataAiHint: "clean kitchen food preparation quality"
  },
  {
    id: 3,
    title: "Fusion Chaats: A Modern Twist on Tradition",
    excerpt: "Explore our innovative fusion chaat recipes that blend classic flavors with contemporary tastes.",
    author: "Chef Innovator",
    date: "2024-06-28",
    imageUrl: "https://picsum.photos/seed/fusion-chaats/400/250",
    slug: "fusion-chaats-innovation",
     dataAiHint: "fusion food indian creative plating"
  },
   {
    id: 4,
    title: "Indian Street Food Culture: More Than Just Snacks",
    excerpt: "Delve into the vibrant culture surrounding Indian street food and its significance in daily life.",
    author: "Cultural Correspondent",
    date: "2024-06-15",
    imageUrl: "https://picsum.photos/seed/street-food-culture/400/250",
    slug: "indian-street-food-culture",
     dataAiHint: "indian street market busy colorful people"
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Ganesh Bhel Blog</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Insights into Indian street food culture, our hygiene practices, recipe innovations, and more.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden card-hover-effect group"> {/* Applied hover effect, group */}
            <div className="relative w-full h-52 overflow-hidden"> {/* Increased height, added overflow hidden */}
               <Image
                 src={post.imageUrl}
                 alt={post.title}
                 layout="fill"
                 objectFit="cover"
                 className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Added scale effect
                 data-ai-hint={post.dataAiHint}
               />
            </div>
            <CardHeader className="pb-3"> {/* Adjusted padding */}
              <CardTitle className="text-xl font-heading text-primary line-clamp-2 group-hover:text-accent transition-colors"> {/* Title hover effect */}
                  {post.title}
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 pt-2"> {/* Wrap metadata, adjust gap/padding */}
                 <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span> {/* Formatted date */}
                 <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-4"> {/* Adjusted padding */}
              <p className="text-sm text-foreground/80 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="pt-0"> {/* Adjusted padding */}
              {/* Link to full blog post page */}
              <Button variant="link" asChild className="p-0 h-auto text-accent font-medium group-hover:underline">
                <Link href={`/blog/${post.slug}`} className="flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

       {/* Placeholder for pagination */}
       <div className="text-center mt-10">
         <Button variant="outline" disabled className="rounded-full">Load More Posts</Button>
       </div>
    </div>
  );
}
