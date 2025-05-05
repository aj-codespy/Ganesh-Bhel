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
    <div className="relative pl-6 after:absolute after:inset-y-0 after:w-0.5 after:bg-border/70 after:left-0"> {/* Softer line */}
      {events.map((event, index) => (
        <div key={index} className="relative mb-10 pl-10 group"> {/* Increased bottom margin and left padding */}
          <div className="absolute left-[-13px] top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background shadow-md group-hover:bg-accent transition-colors duration-200"> {/* Larger dot, added shadow */}
             <span className="text-xs font-bold">{typeof event.year === 'number' ? event.year.toString().slice(-2) : '★'}</span> {/* Use star for Present */}
          </div>
           <Card className="shadow-md transition-shadow duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm border-primary/20"> {/* Slightly transparent background */}
              <CardHeader className="pb-2 pt-4"> {/* Adjusted padding */}
                 <CardTitle className="text-xl font-heading text-primary">
                   <span className="font-bold mr-2">{event.year}</span> - {event.title}
                 </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-4"> {/* Adjusted padding */}
                 <p className="text-foreground/80">{event.description}</p>
              </CardContent>
           </Card>
        </div>
      ))}
    </div>
  );
}
