import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Globe, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "United Group EG",
      description: "A comprehensive corporate website for United Group Egypt showcasing their services and expertise. Built with modern React architecture and optimized for mobile-first experience with multi-language support.",
      url: "https://unitedgroupeg.com",
      technologies: ["React", "PHP", "Mobile-first", "Multilingual"],
      features: ["Responsive Design", "Multi-language", "Corporate Branding", "SEO Optimized"],
      logo: "/lovable-uploads/3b9f2436-a200-41d9-94fc-5fbd4e2e8000.png",
      logoAlt: "United Group EG Logo",
      logoBg: "bg-green-500"
    },
    {
      title: "LIFERR Technologies", 
      description: "Technology company website featuring clean design and modern user experience. Developed using vanilla technologies for optimal performance and fast loading times.",
      url: "https://liferr.co",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      features: ["Fast Loading", "Clean Design", "Modern UI", "Cross-browser Compatible"],
      logo: "/lovable-uploads/4c86b848-a758-4d23-9e8c-e3fe76d127c5.png",
      logoAlt: "LIFERR Technologies Logo",
      logoBg: "bg-white"
    },
    {
      title: "Essence eCommerce Demo",
      description: "A fully functional eCommerce single-page application demonstrating modern shopping cart functionality, product catalog, and responsive design patterns.",
      url: "https://essencedemo.com", 
      technologies: ["React SPA", "eCommerce", "Mobile-first", "API Integration"],
      features: ["Shopping Cart", "Product Catalog", "Mobile Responsive", "Payment Integration"],
      logo: "/lovable-uploads/f2e34ffa-7898-435f-8209-eda06010279d.png",
      logoAlt: "Essence Logo",
      logoBg: "bg-white"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-portfolio-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-portfolio-red-light text-accent">
            Recent Work
          </Badge>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent client projects demonstrating expertise in modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-card-custom transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="shrink-0">
                        Project {index + 1}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code2 className="h-4 w-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full sm:w-auto bg-gradient-accent hover:shadow-accent transition-all duration-300"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </Button>
                  </CardContent>
                </div>

                {/* Project Visual */}
                <div className="bg-gradient-hero p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center space-y-4 opacity-60">
                    <div className={`${project.logoBg} rounded-lg p-3 w-fit mx-auto`}>
                      {project.logo ? (
                        <img 
                          src={project.logo} 
                          alt={project.logoAlt} 
                          className="h-10 w-10"
                        />
                      ) : (
                        <Globe className="h-10 w-10 text-background" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-lg">{project.title}</p>
                      <p className="text-sm text-muted-foreground">{project.url}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;