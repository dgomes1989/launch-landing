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
  title = "Trusted by forward-thinking companies",
  description = "See how Cilantro has helped enterprises accelerate their AI initiatives",
  testimonials = [
    {
      quote:
        "Cilantro's forward-deployed model was a game changer. Their engineers integrated seamlessly with our team and delivered a production-ready LLM system in weeks, not months.",
      author: "Jennifer Martinez",
      role: "VP of Engineering, Fortune 500 Fintech",
    },
    {
      quote:
        "Working with Cilantro felt like extending our own team with world-class AI expertise. They understood our business context and built solutions that actually moved the needle.",
      author: "Alex Thompson",
      role: "CTO, Healthcare Tech Startup",
    },
    {
      quote:
        "Unlike traditional consultants who just provide recommendations, Cilantro rolled up their sleeves and built our computer vision pipeline alongside our engineers. The results exceeded expectations.",
      author: "Priya Patel",
      role: "Head of Product, E-commerce Platform",
    },
    {
      quote:
        "Cilantro helped us navigate the complex AI landscape and implement solutions that delivered real ROI. Their strategic guidance was as valuable as their technical expertise.",
      author: "Marcus Johnson",
      role: "Chief Innovation Officer, Manufacturing Corp",
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
