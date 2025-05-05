import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

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
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Ganesh Bhel Blog</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Insights into Indian street food culture, our hygiene practices, recipe innovations, and more.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg subtle-hover-grow border-secondary/10 transition-all duration-300 hover:shadow-xl">
            <div className="relative w-full h-48">
               <Image
                 src={post.imageUrl}
                 alt={post.title}
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint={post.dataAiHint}
               />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground flex items-center gap-4 pt-1">
                 <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                 <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              {/* Link to full blog post page - Assuming structure /blog/[slug] */}
              <Button variant="link" asChild className="p-0 h-auto text-accent">
                <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

       {/* Placeholder for potential pagination or load more */}
       <div className="text-center mt-8">
         <Button variant="outline" disabled>Load More Posts</Button>
       </div>
    </div>
  );
}
