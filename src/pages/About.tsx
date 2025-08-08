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
  Clock,
  Globe
} from "lucide-react";
import drSumithra from "@/assets/dr-sumithra.jpg";
import drNandish from "@/assets/dr-nandish.jpg";

const About = () => {
  const dentists = [
    {
      name: "Dr. Sumithra",
      title: "Root Canal Specialist",
      education: "BDS with Advanced Endodontic Training",
      experience: "5+ years",
      specialties: ["Root Canal Treatment", "Endodontics", "Pain Management"],
      bio: "Dr. Sumithra specializes in complex root canal treatments, ensuring pain-free procedures with advanced techniques. Fluent in Kannada, Hindi, and English.",
      image: drSumithra,
      languages: ["Kannada", "Hindi", "English"]
    },
    {
      name: "Dr. Nandish B K",
      title: "Cosmetic & Restorative Dentist",
      education: "BDS with Cosmetic Dentistry Certification",
      experience: "5+ years",
      specialties: ["Teeth Clipping", "Cosmetic Dentistry", "Dental Aesthetics"],
      bio: "Dr. Nandish B K excels in cosmetic procedures and teeth clipping, helping patients achieve perfect smiles. Speaks Kannada, Hindi, and English.",
      image: drNandish,
      languages: ["Kannada", "Hindi", "English"]
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
              About Smile Studio
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              "Smile Alive" -{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Dental Care
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in Hassan, Karnataka, Smile Studio provides exceptional dental care with our experienced team. 
              We offer services in Kannada, Hindi, and English for your comfort.
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
                  Smile Studio was established in Hassan, Karnataka with our mission "Smile Alive" - 
                  to bring life to every smile through exceptional dental care. We serve the local 
                  community with personalized attention and multilingual support.
                </p>
                <p>
                  Our team of experienced dentists, Dr. Sumithra and Dr. Nandish B K, each bring 5+ years 
                  of specialized expertise. We offer comprehensive dental services with a special 25% 
                  discount for new patients.
                </p>
                <p>
                  With convenient appointment booking (10 AM - 1 PM) and emergency services available, 
                  we're committed to making quality dental care accessible to everyone in Hassan and 
                  surrounding areas.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">New Patient Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Languages Spoken</div>
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

          <div className="grid md:grid-cols-2 gap-8">
            {dentists.map((dentist, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={dentist.image} 
                      alt={dentist.name}
                      className="w-full h-full object-cover"
                    />
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
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{dentist.languages?.join(', ')}</span>
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
              These principles guide everything we do at Smile Studio.
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
                <div className="font-semibold">Smile Studio</div>
                <div>Hassan, Karnataka, 573201</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div>
                <div className="font-semibold">Mon-Sat: 10:00 AM - 1:00 PM</div>
                <div>Mon-Sat: 2:00 PM - 6:00 PM</div>
                <div className="text-red-300">Emergency: 0987654321</div>
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