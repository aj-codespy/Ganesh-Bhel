import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Sample data structure - replace with actual menu data fetching
const menuCategories = [
  {
    name: "Traditional Chaats",
    items: [
      { name: "Bhel Puri", description: "Puffed rice, vegetables, and tangy tamarind sauce.", price: "₹60", dataAiHint: "bhel puri bowl" },
      { name: "Pani Puri (6 pcs)", description: "Crispy shells filled with spiced water, potatoes, and chickpeas.", price: "₹50", dataAiHint: "pani puri plate" },
      { name: "Sev Puri", description: "Flat puris topped with potatoes, onions, chutneys, and sev.", price: "₹70", dataAiHint: "sev puri plate close up" },
      { name: "Dahi Puri (6 pcs)", description: "Like Pani Puri, but filled with yogurt, chutneys, and spices.", price: "₹80", dataAiHint: "dahi puri plate delicious" },
    ],
  },
  {
    name: "Fusion Delights",
    items: [
      { name: "Cheese Bhel", description: "Classic Bhel Puri topped generously with cheese.", price: "₹80", dataAiHint: "cheese bhel fusion food" },
      { name: "Schezwan Pani Puri", description: "A spicy Indo-Chinese twist on the classic Pani Puri.", price: "₹70", dataAiHint: "schezwan pani puri spicy" },
      { name: "Corn Chaat", description: "Sweet corn mixed with onions, tomatoes, and chaat masala.", price: "₹65", dataAiHint: "corn chaat healthy snack" },
    ],
  },
   {
    name: "Healthy Options",
    items: [
      { name: "Sprout Bhel", description: "Healthy sprouts mixed with vegetables and light spices.", price: "₹75", dataAiHint: "sprout bhel healthy salad" },
      { name: "Fruit Chaat", description: "A refreshing mix of seasonal fruits with chaat masala.", price: "₹90", dataAiHint: "fruit chaat salad bowl" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Our Menu</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore our wide range of authentic and innovative chaats, made with the freshest ingredients and utmost hygiene.
        </p>
      </section>

      {menuCategories.map((category) => (
        <section key={category.name}>
          <h2 className="text-3xl font-bold mb-6 font-heading text-primary">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <Card key={item.name} className="overflow-hidden subtle-hover-grow shadow-md border-secondary/10 transition-all duration-300 hover:shadow-xl">
                 <div className="relative w-full h-40">
                    <Image
                       src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '-')}/400/250`}
                       alt={item.name}
                       layout="fill"
                       objectFit="cover"
                       data-ai-hint={item.dataAiHint}
                    />
                 </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <span className="text-lg font-semibold text-accent">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {/* Add subtle animation/interaction on hover if desired */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
