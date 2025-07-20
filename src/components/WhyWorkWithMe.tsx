import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Smartphone, 
  Shield, 
  Code2, 
  Server,
  CheckCircle 
} from "lucide-react";

const WhyWorkWithMe = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Mobile-first design approach ensuring lightning-fast performance across all devices and browsers.",
      highlight: "Performance Optimized"
    },
    {
      icon: Code2,
      title: "Modern Frameworks",
      description: "Built using the latest and fastest frameworks like React, ensuring scalable and maintainable code.",
      highlight: "Cutting-edge Tech"
    },
    {
      icon: Shield,
      title: "Lifetime Maintenance",
      description: "Completely free lifetime maintenance and support. Your website stays updated and secure forever.",
      highlight: "Free Forever"
    },
    {
      icon: CheckCircle,
      title: "Secure & Scalable",
      description: "Clean, secure code architecture that grows with your business and follows industry best practices.",
      highlight: "Enterprise Ready"
    },
    {
      icon: Server,
      title: "Universal Compatibility",
      description: "Works seamlessly with any domain or hosting provider. Easy migration and deployment anywhere.",
      highlight: "Host Anywhere"
    }
  ];

  const guarantees = [
    "100% Mobile Responsive Design",
    "Cross-browser Compatibility", 
    "SEO Optimized Structure",
    "Fast Loading Times",
    "Clean, Maintainable Code",
    "Free Lifetime Updates"
  ];

  return (
    <section id="why-work-with-me" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-portfolio-red-light text-accent">
            Why Choose Me
          </Badge>
          <h2 className="text-4xl font-bold">Your Success is My Priority</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I don't just build websites—I create digital solutions that drive results 
            and grow with your business
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="relative overflow-hidden hover:shadow-card-custom transition-all duration-300 hover:translate-y-[-4px] group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs bg-portfolio-red-light text-accent border-accent">
                    {benefit.highlight}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Guarantees Section */}
        <Card className="bg-gradient-hero border-2 border-accent/20">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">What You Get</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guarantees.map((guarantee) => (
                  <div key={guarantee} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Badge className="bg-gradient-accent text-white px-6 py-2">
                  All Backed by Lifetime Support
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;