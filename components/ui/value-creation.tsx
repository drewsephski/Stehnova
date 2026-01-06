import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ValueCreationStep {
  number: number;
  title: string;
  description: string;
}

const VALUE_CREATION_STEPS: ValueCreationStep[] = [
  {
    number: 1,
    title: "Identify",
    description: "Rigorous underwriting with conservative assumptions and multiple exit scenarios"
  },
  {
    number: 2,
    title: "Optimize",
    description: "Operational improvements, tenant retention strategies, and physical upgrades"
  },
  {
    number: 3,
    title: "Reposition",
    description: "Strategic rebranding, lease restructuring, and market positioning"
  },
  {
    number: 4,
    title: "Exit",
    description: "Disciplined disposition through institutional buyers or refinance"
  }
];

interface ValueCreationProps {
  title?: string;
  subtitle?: string;
  steps?: ValueCreationStep[];
  className?: string;
}

export function ValueCreation({
  title = "How We Create Value",
  subtitle = "Our systematic approach to unlocking property value",
  steps = VALUE_CREATION_STEPS,
  className,
}: ValueCreationProps) {
  return (
    <section id="value-creation" className={cn("py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop: Horizontal process flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={cn(
                      "w-20 h-20 rounded-full bg-primary text-primary-foreground",
                      "flex items-center justify-center text-3xl font-bold",
                      "shadow-lg"
                    )}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow between steps (not on last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 -right-4 text-primary">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet: Vertical process flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                {/* Vertical line connecting steps */}
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-border" />
                )}
                
                {/* Step number */}
                <div className="absolute left-0 top-0">
                  <div className={cn(
                    "w-8 h-8 rounded-full bg-primary text-primary-foreground",
                    "flex items-center justify-center text-sm font-bold",
                    "shadow-md"
                  )}>
                    {step.number}
                  </div>
                </div>
                
                {/* Step content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
