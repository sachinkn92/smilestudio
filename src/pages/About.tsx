import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Heart,
  Shield,
  Star,
  MapPin,
  Clock
} from "lucide-react";

const About = () => {
  const dentists = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Lead Dentist & Practice Owner",
      education: "DDS from Harvard School of Dental Medicine",
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Procedures", "Implants"],
      bio: "Dr. Mitchell is passionate about creating beautiful, healthy smiles while ensuring patient comfort. She stays current with the latest dental technologies and techniques."
    },
    {
      name: "Dr. James Chen",
      title: "Orthodontic Specialist",
      education: "DDS & Orthodontic Residency at UCLA",
      experience: "12+ years",
      specialties: ["Orthodontics", "Clear Aligners", "TMJ Treatment"],
      bio: "Dr. Chen specializes in creating perfectly aligned smiles using both traditional and modern orthodontic techniques."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      education: "DDS & Pediatric Residency at UCSF",
      experience: "10+ years",
      specialties: ["Pediatric Dentistry", "Preventive Care", "Special Needs"],
      bio: "Dr. Rodriguez creates positive dental experiences for children, building healthy habits that last a lifetime."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make is focused on what's best for our patients' health and comfort."
    },
    {
      icon: Shield,
      title: "Safety & Cleanliness",
      description: "We maintain the highest standards of sterilization and infection control protocols."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every procedure and interaction with our patients."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to be part of this community and give back through various programs."
    }
  ];

  const achievements = [
    "Top Rated Dental Practice 2023",
    "Excellence in Patient Care Award",
    "Advanced Technology Integration",
    "Community Service Recognition",
    "Continuing Education Leaders",
    "Patient Safety Excellence"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              About BrightSmile Dental
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Dedicated to Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dental Health
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 15 years, we've been providing exceptional dental care with a gentle touch. 
              Our team combines expertise with compassion to create positive dental experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  BrightSmile Dental was founded in 2009 with a simple mission: to provide 
                  exceptional dental care in a comfortable, anxiety-free environment. What started 
                  as a small practice has grown into a comprehensive dental clinic serving thousands 
                  of patients.
                </p>
                <p>
                  We believe that everyone deserves a healthy, beautiful smile. That's why we've 
                  invested in the latest technology, continued education for our staff, and created 
                  a welcoming atmosphere where patients feel like family.
                </p>
                <p>
                  Today, we're proud to be recognized as one of the leading dental practices in our 
                  community, but our commitment remains the same: exceptional care, one smile at a time.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced dentists are committed to providing personalized care using the 
              latest techniques and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dentists.map((dentist, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {dentist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{dentist.name}</h3>
                  <p className="text-primary text-center font-medium mb-4">{dentist.title}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{dentist.education}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{dentist.experience} experience</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {dentist.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{dentist.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              These principles guide everything we do at BrightSmile Dental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground">
              We're honored to be recognized for our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-sm">
                <Award className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Visit Our Modern Facility
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Experience dental care in our state-of-the-art clinic designed for your comfort.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-primary-foreground">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="font-semibold">123 Dental Street</div>
                <div>Health City, HC 12345</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div>
                <div className="font-semibold">Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;