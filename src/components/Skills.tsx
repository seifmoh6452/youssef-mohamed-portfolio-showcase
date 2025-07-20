import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Server, 
  Shield, 
  Zap,
  Languages,
  Database
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", level: "Expert", icon: Code2 },
    { name: "CSS3", level: "Expert", icon: Code2 },
    { name: "JavaScript", level: "Expert", icon: Code2 },
    { name: "PHP", level: "Advanced", icon: Server },
    { name: "React.js", level: "Advanced", icon: Code2 },
  ];

  const specializations = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices"
    },
    {
      icon: Languages,
      title: "Multi-language Support", 
      description: "Building applications with internationalization capabilities"
    },
    {
      icon: Server,
      title: "Hosting & Deployment",
      description: "Expert in deployment strategies and server management"
    },
    {
      icon: Shield,
      title: "Lifetime Maintenance",
      description: "Ongoing support and updates to keep your site secure"
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast-loading websites built with modern frameworks"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-portfolio-red-light text-accent">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on creating scalable, 
            maintainable solutions
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill) => (
              <Card key={skill.name} className="p-6 hover:shadow-card-custom transition-all duration-300 hover:scale-105">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="p-3 bg-portfolio-red-light rounded-lg">
                    <skill.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <Badge variant="outline" className="text-sm">
                      {skill.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec) => (
              <Card key={spec.title} className="p-6 hover:shadow-card-custom transition-all duration-300 hover:translate-y-[-4px] group">
                <CardContent className="space-y-4 p-0">
                  <div className="p-3 bg-gradient-accent rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{spec.title}</h4>
                  <p className="text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;