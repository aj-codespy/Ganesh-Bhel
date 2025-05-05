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
    <div className="relative pl-6 after:absolute after:inset-y-0 after:w-0.5 after:bg-border after:left-0">
      {events.map((event, index) => (
        <div key={index} className="relative mb-8 pl-8 group">
          <div className="absolute left-[-11px] top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background group-hover:bg-accent transition-colors duration-200">
             {/* Dot or tiny icon */}
             <span className="text-xs font-bold">{typeof event.year === 'number' ? event.year.toString().slice(-2) : 'P'}</span>
          </div>
           <Card className="shadow-md transition-shadow duration-200 hover:shadow-xl border-primary/30">
              <CardHeader>
                 <CardTitle className="text-xl font-heading text-primary">
                   <span className="font-bold">{event.year}</span> - {event.title}
                 </CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-foreground/80">{event.description}</p>
              </CardContent>
           </Card>
        </div>
      ))}
    </div>
  );
}
