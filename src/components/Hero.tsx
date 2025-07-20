import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-portfolio-red-light text-accent">
              Full-Stack Developer
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Youssef
              <span className="block text-accent">Mohamed</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Experienced in front-end and back-end development using modern technologies. 
              I offer complete website development from design to deployment with lifetime maintenance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-accent transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-portfolio-red-light transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Egypt • Available Worldwide</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-card-custom border-4 border-background">
              <img 
                src={profilePhoto} 
                alt="Youssef Mohamed - Full-Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;