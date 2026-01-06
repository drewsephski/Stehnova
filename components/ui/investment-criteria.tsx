"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CriteriaCategory {
  title: string;
  items: string[];
}

const INVESTMENT_CRITERIA: CriteriaCategory[] = [
  {
    title: "Asset Type",
    items: [
      "Multifamily: 5-50 units, Class B/C locations",
      "Mixed-Use: Retail + residential or commercial components",
      "Commercial: Office, retail, or industrial with value-add potential"
    ]
  },
  {
    title: "Geography",
    items: [
      "Primary focus: Underserved markets with demographic and economic tailwinds",
      "Secondary markets: Adjacent areas with growth potential",
      "Target neighborhoods: Areas with demographic growth, job growth, or infrastructure investment"
    ]
  },
  {
    title: "Financial Parameters",
    items: [
      "Purchase price: $1M - $10M",
      "Cash-on-cash return target: 8-12%+",
      "Hold period: 3-7 years",
      "Value-add opportunity: Minimum 15% upside through improvements or repositioning"
    ]
  },
  {
    title: "Operational Requirements",
    items: [
      "Clear path to value creation (physical improvements, operational changes, or market repositioning)",
      "Defensible competitive advantage (location, tenant mix, or unique asset characteristics)",
      "Exit strategy identified at acquisition (sale to institutional buyer, refinance, or 1031 exchange)"
    ]
  }
];

interface InvestmentCriteriaProps {
  title?: string;
  subtitle?: string;
  criteria?: CriteriaCategory[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function InvestmentCriteria({
  title = "Investment Criteria",
  subtitle = "We evaluate opportunities based on the following parameters",
  criteria = INVESTMENT_CRITERIA,
  ctaText = "Submit a Deal That Fits",
  onCtaClick,
  className,
}: InvestmentCriteriaProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onCtaClick?.()
  };

  return (
    <section id="investment-criteria" className={cn("py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {criteria.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-lg p-4 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-2 md:space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {ctaText && (
          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full md:w-auto px-8 py-6 text-base md:text-lg"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
