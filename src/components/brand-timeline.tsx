import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineEvent {
  year: number | string;
  title: string;
  description: string;
}

interface BrandTimelineProps {
  events: TimelineEvent[];
}

export function BrandTimeline({ events }: BrandTimelineProps) {
  return (
    // Adjusted base padding for mobile
    <div className="relative pl-4 sm:pl-6 after:absolute after:inset-y-0 after:w-0.5 after:bg-border/70 after:left-0">
      {events.map((event, index) => (
        <div key={index} className="relative mb-8 sm:mb-10 pl-8 sm:pl-10 group"> {/* Responsive margin/padding */}
          {/* Adjusted dot positioning and size for mobile */}
          <div className="absolute left-[-10px] sm:left-[-13px] top-1 z-10 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 sm:ring-4 ring-background shadow-md group-hover:bg-accent transition-colors duration-200">
             <span className="text-[10px] sm:text-xs font-bold">{typeof event.year === 'number' ? event.year.toString().slice(-2) : '★'}</span> {/* Responsive font size */}
          </div>
           <Card className="shadow-md transition-shadow duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-1 pt-3 sm:pb-2 sm:pt-4"> {/* Adjusted padding */}
                 <CardTitle className="text-base sm:text-lg md:text-xl font-heading text-primary leading-tight"> {/* Responsive font size, leading */}
                   <span className="font-bold mr-1.5 sm:mr-2">{event.year}</span> - {event.title}
                 </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3 sm:pb-4"> {/* Adjusted padding */}
                 <p className="text-sm sm:text-base text-foreground/80">{event.description}</p> {/* Responsive text size */}
              </CardContent>
           </Card>
        </div>
      ))}
    </div>
  );
}
