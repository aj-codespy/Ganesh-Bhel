import { BrandTimeline } from '@/components/brand-timeline';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const timelineEvents = [
    { year: 1978, title: 'The Beginning', description: 'Ramesh Gudmewar starts Ganesh Bhel from a humble street cart in Pune.' },
    { year: 1985, title: 'Pioneering "Pani Puri"', description: 'Ganesh Bhel popularizes the term "Pani Puri", setting a trend.' },
    { year: 1995, title: 'Focus on Hygiene', description: 'Introduced high standards of hygiene and quality, using mineral water.' },
    { year: 2005, title: 'Expansion', description: 'Opened multiple outlets across Pune, becoming a household name.' },
    { year: 2010, title: 'ISO Certification', description: 'Achieved ISO certification, reinforcing commitment to quality.' },
    { year: 2015, title: 'Fusion & Innovation', description: 'Launched innovative fusion chaats alongside traditional offerings.' },
    { year: 2020, title: 'Global Reach', description: 'Started offering packaged products for international markets.' },
    { year: 'Present', title: 'Continuing the Legacy', description: 'Expanding franchise network and continuing to serve authentic taste with modern standards.' },
  ];

  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted base spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Our Journey</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto px-2 sm:px-0"> {/* Responsive text size, added horizontal padding for very small screens */}
          From a small cart in 1978 to a celebrated name in Indian street food, Ganesh Bhel's story is one of passion, quality, and innovation.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"> {/* Default to 1 column, adjusted gap */}
         <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"> {/* Responsive height */}
            <Image
              src="https://picsum.photos/600/400"
              alt="Founder Ramesh Gudmewar"
              layout="fill"
              objectFit="cover"
              data-ai-hint="indian founder portrait restaurant kitchen"
              priority
            />
         </div>
        <Card className="bg-card card-hover-effect">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Founder's Vision</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 text-foreground/90"> {/* Responsive spacing */}
            <p className="text-sm sm:text-base"> {/* Responsive text */}
              Ramesh Gudmewar envisioned bringing hygienic, delicious, and authentic street food to everyone. His dedication to quality and innovation laid the foundation for what Ganesh Bhel is today.
            </p>
            <blockquote className="border-l-4 border-primary pl-3 sm:pl-4 italic text-sm sm:text-base text-foreground/70"> {/* Responsive padding/text */}
              "We started with a simple dream: to share the joy of authentic Pune chaat, prepared with care and the best ingredients. Our journey continues with the same passion." - Ramesh Gudmewar
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="py-8 md:py-10 bg-muted/50 rounded-lg"> {/* Adjusted padding */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 font-heading text-primary">Milestones Through the Years</h2> {/* Responsive heading */}
        <div className="px-2 sm:px-0"> {/* Add padding on small screens for timeline */}
          <BrandTimeline events={timelineEvents} />
        </div>
      </section>

       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"> {/* Default to 1 column, adjusted gap */}
         <Card className="bg-card card-hover-effect order-2 md:order-1">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Quality & Hygiene</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 text-foreground/90"> {/* Responsive spacing */}
            <p className="text-sm sm:text-base"> {/* Responsive text */}
             Our commitment to quality is unwavering. We are ISO-certified and meticulously follow strict hygiene protocols, including the use of mineral water in all our preparations, ensuring a safe and delightful experience for our customers.
            </p>
             <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-foreground/80"> {/* Responsive text */}
                <li>ISO 9001:2015 Certified</li>
                <li>Use of Mineral Water</li>
                <li>Regular Quality Checks</li>
                <li>Trained Staff & Hygienic Practices</li>
            </ul>
          </CardContent>
        </Card>
         <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2"> {/* Responsive height */}
            <Image
              src="https://picsum.photos/600/401" // Slightly different dimensions
              alt="Quality Check Process"
              layout="fill"
              objectFit="cover"
              data-ai-hint="food preparation quality check kitchen clean"
            />
         </div>
      </section>
    </div>
  );
}
