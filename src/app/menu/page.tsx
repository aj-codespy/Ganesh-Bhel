import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Sample data structure - replace with actual menu data fetching
const menuCategories = [
  {
    name: "Traditional Chaats",
    items: [
      { name: "Bhel Puri", description: "Puffed rice, vegetables, and tangy tamarind sauce.", price: "₹60", dataAiHint: "bhel puri bowl indian street food" },
      { name: "Pani Puri (6 pcs)", description: "Crispy shells filled with spiced water, potatoes, and chickpeas.", price: "₹50", dataAiHint: "pani puri plate indian street food close up" },
      { name: "Sev Puri", description: "Flat puris topped with potatoes, onions, chutneys, and sev.", price: "₹70", dataAiHint: "sev puri plate close up delicious" },
      { name: "Dahi Puri (6 pcs)", description: "Like Pani Puri, but filled with yogurt, chutneys, and spices.", price: "₹80", dataAiHint: "dahi puri plate delicious yogurt snack" },
    ],
  },
  {
    name: "Fusion Delights",
    items: [
      { name: "Cheese Bhel", description: "Classic Bhel Puri topped generously with cheese.", price: "₹80", dataAiHint: "cheese bhel fusion food indian snack" },
      { name: "Schezwan Pani Puri", description: "A spicy Indo-Chinese twist on the classic Pani Puri.", price: "₹70", dataAiHint: "schezwan pani puri spicy fusion" },
      { name: "Corn Chaat", description: "Sweet corn mixed with onions, tomatoes, and chaat masala.", price: "₹65", dataAiHint: "corn chaat healthy snack bowl" },
    ],
  },
   {
    name: "Healthy Options",
    items: [
      { name: "Sprout Bhel", description: "Healthy sprouts mixed with vegetables and light spices.", price: "₹75", dataAiHint: "sprout bhel healthy salad indian" },
      { name: "Fruit Chaat", description: "A refreshing mix of seasonal fruits with chaat masala.", price: "₹90", dataAiHint: "fruit chaat salad bowl fresh colorful" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted base spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Our Menu</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0"> {/* Responsive text, padding */}
          Explore our wide range of authentic and innovative chaats, made with the freshest ingredients and utmost hygiene.
        </p>
      </section>

      {menuCategories.map((category) => (
        <section key={category.name}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 font-heading text-primary">{category.name}</h2> {/* Responsive heading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Responsive grid and gap */}
            {category.items.map((item) => (
              <Card key={item.name} className="overflow-hidden card-hover-effect group flex flex-col">
                 <div className="relative w-full h-40 sm:h-48"> {/* Responsive height */}
                    <Image
                       src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '-')}/400/300`}
                       alt={item.name}
                       layout="fill"
                       objectFit="cover"
                       className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                       data-ai-hint={item.dataAiHint}
                    />
                 </div>
                <CardContent className="p-4 sm:p-5 flex-grow flex flex-col justify-between"> {/* Responsive padding */}
                  <div>
                      <div className="flex justify-between items-start mb-1.5 sm:mb-2"> {/* Responsive margin */}
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">{item.name}</h3> {/* Responsive text, tighter leading */}
                        <span className="text-base sm:text-lg font-semibold text-accent whitespace-nowrap ml-3 sm:ml-4">{item.price}</span> {/* Responsive text/margin */}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p> {/* Responsive text */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
