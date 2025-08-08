import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Users, 
  Calendar, 
  Star, 
  CheckCircle,
  Smile,
  Heart,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";

const Index = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: Shield
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, whitening, and aesthetic treatments.",
      icon: Smile
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or clear aligners.",
      icon: Award
    },
    {
      title: "Emergency Care",
      description: "Urgent dental care when you need it most, available same-day.",
      icon: Heart
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Dr. Sumithra's root canal treatment was completely painless. Speaking in Kannada made me feel comfortable. Excellent service!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "Dr. Nandish B K's teeth clipping gave me the perfect smile. The 25% discount for new patients was a great bonus!",
      rating: 5
    },
    {
      name: "Ananda Murthy",
      text: "Smile Studio in Hassan is the best dental clinic. Easy booking, professional staff, and they speak all three languages perfectly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1000+", label: "Happy Patients" },
    { number: "25%", label: "New Patient Discount" },
    { number: "24/7", label: "Emergency: 0987654321" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  ✨ New Patient Special - 25% Off First Visit
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  "Smile Alive" -{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Smile Studio
                  </span>{" "}
                  Hassan
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Experience exceptional dental care in Hassan, Karnataka. Our multilingual team (Kannada, Hindi, English) 
                  provides specialized treatments with advance booking and emergency services available.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Appointment
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  Learn More About Us
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Dental Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we provide complete dental care 
              using the latest technology and techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Smile Studio?</h2>
              <div className="space-y-6">
                {[
                  "Multilingual support (Kannada, Hindi, English)",
                  "Specialized doctors with 5+ years experience",
                  "25% discount for new patients",
                  "Convenient booking slots (10 AM - 1 PM)",
                  "Advance booking with minimal payment",
                  "Emergency care available: 0987654321"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Patients</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent">25%</div>
                  <div className="text-sm text-muted-foreground">New Patient Discount</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real patients who trust us with their smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call 1234567890
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
