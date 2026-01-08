import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Sparkles,
  Shield,
  Zap,
  Award,
  Menu,
  X,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@assets/generated_images/modern_dental_laboratory_hero_background.png";
import techImage from "@assets/generated_images/dental_technology_abstract_background.png";
import digitalImage from "@assets/generated_images/digital_dentistry_workflow.png";
import smileImage from "@assets/generated_images/happy_patient_smile.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3" data-testid="link-home">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">D</span>
            </div>
            <span className="font-heading font-bold text-2xl text-foreground">
              Dentrx<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white px-6" data-testid="button-get-started">
              Get Started
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Dental laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="max-w-2xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            30+ Years of Excellence
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6"
          >
            Precision Crafted
            <span className="text-gradient block">Dental Solutions</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Santa Monica's premier dental laboratory delivering exceptional prosthetics 
            with industry-leading 3-day turnaround. Family-owned dedication meets 
            cutting-edge technology.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              data-testid="button-request-quote"
            >
              Request a Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-2"
              data-testid="button-view-services"
            >
              View Services
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-border"
          >
            <div>
              <p className="text-3xl font-heading font-bold text-foreground">3-Day</p>
              <p className="text-sm text-muted-foreground">Turnaround</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-heading font-bold text-foreground">Free</p>
              <p className="text-sm text-muted-foreground">Shipping</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-heading font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Crowns & Bridges",
      description: "Precision-crafted restorations using premium materials for natural aesthetics and lasting durability.",
      icon: "👑",
      features: ["Zirconia", "PFM", "Full Gold", "E-max"]
    },
    {
      title: "Dental Implants",
      description: "Custom abutments and implant-supported restorations for seamless integration.",
      icon: "🦷",
      features: ["Custom Abutments", "Screw-Retained", "Cement-Retained"]
    },
    {
      title: "Removable Prosthetics",
      description: "Full and partial dentures crafted for optimal fit, function, and patient comfort.",
      icon: "✨",
      features: ["Full Dentures", "Partials", "Flippers", "Flexible"]
    },
    {
      title: "Night Guards",
      description: "Our specialty Talon® Flexible Nightguard - BPA-free protection against bruxism.",
      icon: "🌙",
      features: ["Talon® Flexible", "Hard Guards", "Soft Guards"]
    },
    {
      title: "Retainers",
      description: "Custom orthodontic retainers for maintaining perfect alignment post-treatment.",
      icon: "💎",
      features: ["Hawley", "Essix", "Bonded", "Vivera"]
    },
    {
      title: "Sports Guards",
      description: "Premium mouth protection for athletes using non-toxic, BPA-free materials.",
      icon: "🏆",
      features: ["Custom Fit", "Multi-layer", "Pro-Form"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Comprehensive Dental Lab Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            From fixed restorations to removable prosthetics, we deliver excellence in every case.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="glass-card h-full group cursor-pointer"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "3-Day Turnaround",
      description: "Industry-leading production speed without compromising quality. Get your cases faster."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Rigorous quality control on every case. We stand behind our work with full remakes if needed."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "30+ Years Experience",
      description: "Three decades of dental expertise. Family-owned dedication you can trust."
    }
  ];

  return (
    <section id="why-us" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              The Dentrx Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We combine traditional craftsmanship with state-of-the-art technology to deliver 
              results that exceed expectations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={digitalImage} 
                alt="Digital dentistry workflow" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold">BPA-Free Materials</span>
              </div>
              <p className="text-sm text-muted-foreground">
                All our products use non-toxic, premium-grade materials.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={techImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white/70 font-semibold text-sm uppercase tracking-wider">About Dentrx</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Family-Owned Excellence Since 1994
            </h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              Founded by skilled technician Vagner Angelo, Dentrx Dental Lab has been serving 
              the Santa Monica dental community for over three decades. What started as a small 
              family operation has grown into a trusted partner for dental practices throughout California.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              We believe in personalized service, treating every case with the attention it deserves. 
              Our team combines decades of hands-on experience with the latest in digital dentistry 
              to deliver prosthetics that fit perfectly and look natural.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-heading font-bold">10k+</p>
                <p className="text-white/70">Cases Completed</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold">500+</p>
                <p className="text-white/70">Partner Practices</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold">99%</p>
                <p className="text-white/70">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={smileImage} 
                alt="Happy patient with perfect smile" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reach out today to discuss your case or request a quote. We're here to help 
              you deliver the best results for your patients.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">1137 2nd Street<br />Santa Monica, CA 90403</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Phone</h3>
                  <a href="tel:+13105551234" className="text-primary hover:underline" data-testid="link-phone">
                    (310) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Email</h3>
                  <a href="mailto:info@dentrxdentallab.com" className="text-primary hover:underline" data-testid="link-email">
                    info@dentrxdentallab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8am - 5pm<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Request a Quote
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Practice Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your practice name"
                        data-testid="input-practice-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your name"
                        data-testid="input-contact-name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="(555) 555-5555"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your case requirements..."
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                    data-testid="button-submit-quote"
                  >
                    Submit Request
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">D</span>
              </div>
              <span className="font-heading font-bold text-2xl">
                Dentrx<span className="text-secondary">.</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm mb-6">
              Santa Monica's trusted dental laboratory partner. Delivering precision, 
              quality, and exceptional service since 1994.
            </p>
            <p className="text-white/40 text-sm">
              © 2024 Dentrx Dental Lab. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Crowns & Bridges</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Removable Prosthetics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Night Guards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60">
              <li>1137 2nd Street</li>
              <li>Santa Monica, CA 90403</li>
              <li className="pt-2">
                <a href="tel:+13105551234" className="hover:text-white transition-colors">(310) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@dentrxdentallab.com" className="hover:text-white transition-colors">info@dentrxdentallab.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
