import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Smile, 
  Award, 
  Heart,
  Zap,
  Eye,
  Scissors,
  RefreshCw,
  Calendar,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "General Dentistry",
      icon: Shield,
      color: "from-primary to-primary-dark",
      services: [
        {
          name: "Dental Cleanings & Exams",
          description: "Regular checkups and professional cleanings to maintain optimal oral health.",
          features: ["Digital X-rays", "Oral cancer screening", "Personalized care plan", "Preventive education"]
        },
        {
          name: "Fillings & Restorations",
          description: "Tooth-colored fillings that restore function while maintaining natural appearance.",
          features: ["Mercury-free materials", "Same-day service", "Comfortable procedures", "Long-lasting results"]
        },
        {
          name: "Root Canal Therapy",
          description: "Advanced endodontic treatment to save infected or damaged teeth.",
          features: ["Gentle techniques", "Pain management", "High success rate", "Tooth preservation"]
        },
        {
          name: "Dental Crowns & Bridges",
          description: "Custom-made restorations to repair damaged teeth or replace missing ones.",
          features: ["Porcelain materials", "Perfect fit", "Natural appearance", "Durable construction"]
        }
      ]
    },
    {
      title: "Cosmetic Dentistry",
      icon: Smile,
      color: "from-secondary to-accent",
      services: [
        {
          name: "Teeth Whitening",
          description: "Professional whitening treatments for a brighter, more confident smile.",
          features: ["In-office treatment", "Take-home kits", "Safe & effective", "Dramatic results"]
        },
        {
          name: "Porcelain Veneers",
          description: "Ultra-thin shells that transform the appearance of your front teeth.",
          features: ["Custom design", "Stain resistant", "Minimal prep", "Instant transformation"]
        },
        {
          name: "Smile Makeovers",
          description: "Comprehensive treatment plans to completely transform your smile.",
          features: ["Digital smile design", "Multiple procedures", "Coordinated care", "Stunning results"]
        },
        {
          name: "Bonding & Contouring",
          description: "Minor corrections to improve the shape and appearance of teeth.",
          features: ["Same-day results", "Conservative approach", "Natural appearance", "Affordable option"]
        }
      ]
    },
    {
      title: "Orthodontics",
      icon: Award,
      color: "from-accent to-secondary",
      services: [
        {
          name: "Traditional Braces",
          description: "Proven orthodontic treatment for complex alignment issues.",
          features: ["Metal & ceramic options", "Precise control", "All age groups", "Comprehensive correction"]
        },
        {
          name: "Clear Aligners",
          description: "Nearly invisible orthodontic treatment using custom-made aligners.",
          features: ["Removable convenience", "Comfortable fit", "Predictable results", "Discreet treatment"]
        },
        {
          name: "Retainers",
          description: "Custom retainers to maintain your beautiful new smile after treatment.",
          features: ["Fixed & removable", "Long-term stability", "Comfortable wear", "Ongoing support"]
        }
      ]
    },
    {
      title: "Specialized Care",
      icon: Heart,
      color: "from-primary to-secondary",
      services: [
        {
          name: "Dental Implants",
          description: "Permanent tooth replacement solution for missing teeth.",
          features: ["Titanium implants", "Natural feel", "Preserve jawbone", "Lifetime solution"]
        },
        {
          name: "Oral Surgery",
          description: "Surgical procedures including extractions and jaw treatments.",
          features: ["Wisdom teeth removal", "Sedation options", "Expert care", "Fast recovery"]
        },
        {
          name: "TMJ Treatment",
          description: "Comprehensive care for jaw joint disorders and related pain.",
          features: ["Custom appliances", "Pain relief", "Functional improvement", "Non-invasive options"]
        },
        {
          name: "Emergency Care",
          description: "Urgent dental care when you need it most, available same-day.",
          features: ["Same-day appointments", "Pain management", "24/7 availability", "Immediate relief"]
        }
      ]
    }
  ];

  const insuranceProviders = [
    "Delta Dental", "MetLife", "Aetna", "Cigna", 
    "Blue Cross Blue Shield", "Guardian", "Humana", "United Healthcare"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Comprehensive Dental Services
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Complete Dental Care for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Every Need
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From routine cleanings to complex procedures, we offer comprehensive dental services 
              using the latest technology and techniques for optimal results.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => {
        const Icon = category.icon;
        return (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full mt-4 border-primary/20 hover:bg-primary/5">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in the latest dental technology to provide more accurate diagnoses, 
              comfortable treatments, and better outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: "Digital X-Rays", description: "Instant, low-radiation imaging for accurate diagnosis" },
              { icon: Zap, title: "Laser Dentistry", description: "Precise, comfortable treatments with faster healing" },
              { icon: RefreshCw, title: "3D Imaging", description: "Advanced cone beam CT for complex procedures" },
              { icon: Scissors, title: "Intraoral Cameras", description: "High-definition imaging for patient education" }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Insurance & Payment Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options 
              to make dental care affordable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Accepted Insurance Plans</h3>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{provider}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Don't see your insurance? Call us - we work with many additional providers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Payment Options</h3>
              <div className="space-y-4">
                {[
                  "Insurance claims processing",
                  "Flexible payment plans",
                  "CareCredit financing",
                  "HSA/FSA accepted",
                  "Senior & military discounts",
                  "Family plan discounts"
                ].map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule a consultation to discuss your dental needs and create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (123) 456-7890
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;