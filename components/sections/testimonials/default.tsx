import { Quote } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Section } from "../../ui/section";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: ReactNode;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials?: TestimonialProps[];
  className?: string;
}

export default function Testimonials({
  title = "Loved by developers",
  description = "See what our users have to say about their experience",
  testimonials = [
    {
      quote:
        "This is the best landing page template I've ever used. The components are beautiful and easy to customize.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
    },
    {
      quote:
        "Launch UI saved me countless hours. I was able to ship a professional landing page in just a few hours.",
      author: "Michael Chen",
      role: "Product Designer",
    },
    {
      quote:
        "The attention to detail is incredible. Everything just works out of the box with perfect dark mode support.",
      author: "Emily Rodriguez",
      role: "Startup Founder",
    },
    {
      quote:
        "Clean code, great documentation, and beautiful design. This is exactly what I needed for my SaaS project.",
      author: "David Kim",
      role: "Full Stack Engineer",
    },
  ],
  className,
}: TestimonialsProps) {
  return (
    <Section className={cn("bg-muted/50", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[640px] text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-border flex flex-col gap-4 rounded-xl border p-6 shadow-sm"
            >
              <Quote className="text-brand size-8" />
              <p className="text-foreground text-base leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
