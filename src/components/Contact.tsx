import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink,
  MessageCircle,
  Clock
} from "lucide-react";

const Contact = () => {
  const platforms = [
    {
      name: "Upwork",
      description: "Top-rated freelancer with excellent client reviews",
      icon: ExternalLink,
      action: "View Profile"
    },
    {
      name: "Freelancer",
      description: "Certified professional with proven track record", 
      icon: ExternalLink,
      action: "View Profile"
    },
    {
      name: "Freelance.com",
      description: "Experienced developer ready for your project",
      icon: ExternalLink, 
      action: "View Profile"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "youssef.mohamed9666@icloud.com",
      action: () => window.open("mailto:youssef.mohamed9666@icloud.com", "_blank")
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Egypt",
      subtext: "Available worldwide for remote projects"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open to new projects",
      subtext: "Quick response within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-portfolio-red-light text-accent">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact me through your preferred platform 
            and let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-accent/20 hover:shadow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-accent" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div 
                    key={info.label}
                    className={`flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors duration-300 ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={info.action}
                  >
                    <div className="p-2 bg-portfolio-red-light rounded-lg">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-lg">{info.value}</p>
                      {info.subtext && (
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      )}
                    </div>
                    {info.action && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Email Button */}
            <Button 
              size="lg" 
              className="w-full bg-gradient-accent hover:shadow-accent transition-all duration-300 hover:scale-105"
              onClick={() => window.open("mailto:youssef.mohamed9666@icloud.com?subject=New Project Inquiry&body=Hi Youssef,%0D%0A%0D%0AI'm interested in discussing a web development project with you.%0D%0A%0D%0AProject details:%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0ALooking forward to hearing from you!", "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email Now
            </Button>
          </div>

          {/* Platform Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <Globe className="h-6 w-6 text-accent" />
              Find Me On These Platforms
            </h3>
            
            <div className="space-y-4">
              {platforms.map((platform) => (
                <Card key={platform.name} className="hover:shadow-card-custom transition-all duration-300 hover:translate-y-[-2px] group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">
                          {platform.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {platform.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0 group-hover:bg-portfolio-red-light group-hover:border-accent transition-all duration-300">
                        <platform.icon className="h-4 w-4 mr-2" />
                        {platform.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Badge */}
            <Card className="bg-gradient-accent text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Currently Available</h4>
                <p className="text-sm opacity-90">
                  Taking on new projects • Quick turnaround • Competitive rates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;