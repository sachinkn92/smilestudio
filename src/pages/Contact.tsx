import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "routine"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      urgency: "routine"
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(123) 456-7890",
      secondary: "Emergency: (123) 456-7899",
      action: "tel:+1234567890"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@brightsmile.com",
      secondary: "appointments@brightsmile.com",
      action: "mailto:info@brightsmile.com"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "123 Dental Street",
      secondary: "Health City, HC 12345",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon-Fri: 8:00 AM - 6:00 PM",
      secondary: "Sat: 9:00 AM - 4:00 PM",
      action: null
    }
  ];

  const services = [
    "General Consultation",
    "Cleaning & Checkup",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Dental Implants",
    "Emergency Care",
    "Other"
  ];

  const officeHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Contact BrightSmile Dental
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to answer your questions and help you schedule your next appointment. 
              Contact us today to begin your journey to optimal oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="block space-y-1 hover:text-primary transition-colors"
                      >
                        <div className="font-medium">{info.primary}</div>
                        <div className="text-sm text-muted-foreground">{info.secondary}</div>
                      </a>
                    ) : (
                      <div className="space-y-1">
                        <div className="font-medium">{info.primary}</div>
                        <div className="text-sm text-muted-foreground">{info.secondary}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Priority Level</Label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="routine">Routine - within a week</option>
                      <option value="urgent">Urgent - within 2-3 days</option>
                      <option value="emergency">Emergency - same day</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your dental needs or questions..."
                      rows={4}
                      required
                    />
                  </div>

                  {formData.urgency === "emergency" && (
                    <div className="flex items-start space-x-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-destructive">Emergency Care</p>
                        <p className="text-sm text-muted-foreground">
                          For dental emergencies, please call us directly at (123) 456-7899 for immediate assistance.
                        </p>
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours & Additional Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-muted-foreground' : ''}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Emergency Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">24/7 Emergency Line</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Call (123) 456-7899 for dental emergencies outside office hours.
                        </p>
                        <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Emergency Line
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">New Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Welcome Special</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          New patients receive 50% off their first cleaning and comprehensive exam.
                        </p>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book First Visit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Modern Facility</h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located in the heart of Health City with ample parking.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">123 Dental Street</h3>
            <p className="text-muted-foreground mb-6">Health City, HC 12345</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button variant="outline">
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;