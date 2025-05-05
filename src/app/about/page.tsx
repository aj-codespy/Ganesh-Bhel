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
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Our Journey</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          From a small cart in 1978 to a celebrated name in Indian street food, Ganesh Bhel's story is one of passion, quality, and innovation.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center"> {/* Increased gap */}
         <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"> {/* Increased height */}
            <Image
              src="https://picsum.photos/600/400"
              alt="Founder Ramesh Gudmewar"
              layout="fill"
              objectFit="cover"
              data-ai-hint="indian founder portrait restaurant kitchen"
            />
         </div>
        <Card className="bg-card card-hover-effect"> {/* Use card bg, added hover effect */}
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Founder's Vision</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Ramesh Gudmewar envisioned bringing hygienic, delicious, and authentic street food to everyone. His dedication to quality and innovation laid the foundation for what Ganesh Bhel is today.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70"> {/* Use blockquote for styling */}
              "We started with a simple dream: to share the joy of authentic Pune chaat, prepared with care and the best ingredients. Our journey continues with the same passion." - Ramesh Gudmewar
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="py-10 bg-muted/50 rounded-lg"> {/* Added subtle background and padding */}
        <h2 className="text-3xl font-bold text-center mb-10 font-heading text-primary">Milestones Through the Years</h2> {/* Increased margin */}
        <BrandTimeline events={timelineEvents} />
      </section>

       <section className="grid md:grid-cols-2 gap-10 items-center"> {/* Increased gap */}
         <Card className="bg-card card-hover-effect order-2 md:order-1"> {/* Use card bg, added hover effect */}
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Quality & Hygiene</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
             Our commitment to quality is unwavering. We are ISO-certified and meticulously follow strict hygiene protocols, including the use of mineral water in all our preparations, ensuring a safe and delightful experience for our customers.
            </p>
             <ul className="list-disc list-inside space-y-1 text-foreground/80"> {/* Adjusted text color */}
                <li>ISO 9001:2015 Certified</li>
                <li>Use of Mineral Water</li>
                <li>Regular Quality Checks</li>
                <li>Trained Staff & Hygienic Practices</li>
            </ul>
          </CardContent>
        </Card>
         <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2"> {/* Increased height */}
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
