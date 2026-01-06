import { cn } from "@/lib/utils";
import { Building2, MapPin, TrendingUp, DollarSign } from "lucide-react";

interface InvestmentFocusItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const INVESTMENT_FOCUS_ITEMS: InvestmentFocusItem[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Asset Classes",
    description: "Multifamily, mixed-use, and commercial properties with value-add potential"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Geography",
    description: "Underserved markets with demographic and economic tailwinds"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Strategy",
    description: "Acquire underperforming assets, improve operations, reposition for higher yields"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Deal Size",
    description: "$1M - $10M acquisition range with flexible capital structures"
  }
];

interface InvestmentFocusProps {
  title?: string;
  subtitle?: string;
  items?: InvestmentFocusItem[];
  className?: string;
}

export function InvestmentFocus({
  title = "What We Invest In",
  subtitle = "Our investment focus is clear and disciplined",
  items = INVESTMENT_FOCUS_ITEMS,
  className,
}: InvestmentFocusProps) {
  return (
    <section id="investment-focus" className={cn("py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-background", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card border border-border rounded-lg p-4 md:p-8",
                "hover:border-primary/50 transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center",
                  "group-hover:bg-primary/20 transition-colors duration-300"
                )}>
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
