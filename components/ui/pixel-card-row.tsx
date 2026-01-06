import PixelCard from "@/components/react-bits/pixel-card";
import { cn } from "@/lib/utils";
import { TrendingUp, Search, Handshake, BarChart3 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  variant: "default" | "blue" | "yellow" | "red";
  icon?: React.ReactNode;
}

function FeatureCard({ title, description, variant, icon }: FeatureCardProps) {
  const getHoverColors = () => {
    switch (variant) {
      case "blue":
        return {
          title: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
          description: "group-hover:text-blue-500 dark:group-hover:text-blue-300",
          icon: "group-hover:text-blue-600 dark:group-hover:text-blue-400"
        };
      case "yellow":
        return {
          title: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400", 
          description: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
          icon: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
        };
      case "red":
        return {
          title: "group-hover:text-red-600 dark:group-hover:text-red-400",
          description: "group-hover:text-red-500 dark:group-hover:text-red-300",
          icon: "group-hover:text-red-600 dark:group-hover:text-red-400"
        };
      default:
        return {
          title: "group-hover:text-slate-600 dark:group-hover:text-slate-400",
          description: "group-hover:text-slate-500 dark:group-hover:text-slate-300",
          icon: "group-hover:text-slate-600 dark:group-hover:text-slate-400"
        };
    }
  };

  const hoverColors = getHoverColors();

  return (
    <PixelCard 
      variant={variant} 
      className="group cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-lg h-[280px] w-full"
    >
      <div className="absolute inset-0 p-6 text-center flex flex-col justify-center items-center z-10">
        {icon && (
          <div className={`mb-4 group-hover:scale-105 transition-all duration-300 ${hoverColors.icon}`}>
            {icon}
          </div>
        )}
        <h3 className={`text-xl font-bold mb-2 transition-all duration-300 text-foreground ${hoverColors.title}`}>
          {title}
        </h3>
        <p className={`text-sm font-medium leading-relaxed transition-all duration-300 text-muted-foreground ${hoverColors.description}`}>
          {description}
        </p>
      </div>
    </PixelCard>
  );
}

export function PixelCardRow() {
  const features = [
    {
      title: "Investment Strategy",
      description: "Developing a disciplined approach to real estate asset acquisition with focus on long-term value creation and portfolio diversification.",
      variant: "blue" as const,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Market Analysis", 
      description: "Applying disciplined market research and on-the-ground analysis to identify value-add real estate opportunities.",
      variant: "default" as const,
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Capital Formation",
      description: "Building strategic partnerships and establishing capital structures to support future acquisition and development activities.",
      variant: "yellow" as const,
      icon: <Handshake className="w-8 h-8" />
    },
    {
      title: "Growth Planning",
      description: "Focused on building a diversified asset portfolio designed to support long-term stability and growth.",
      variant: "red" as const,
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Our Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Establishing the strategic framework and operational capabilities for long-term real estate investment success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "transform transition-all duration-500",
                "hover:translate-y-[-8px]"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                variant={feature.variant}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
