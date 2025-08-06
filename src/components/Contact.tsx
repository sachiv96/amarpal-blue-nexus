import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock, Shield, Zap } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "+916307263185";
    const message = "Hi Amarpal Tech, I want to get in touch with your team. Please reply.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="bg-gradient-primary bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today and experience the best digital services at unbeatable prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 6307263185</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">Available via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Support Hours</h4>
                    <p className="text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why Choose Amarpal Tech?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>100% Safe & Secure Services</span>
                </div>
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Instant Delivery & Activation</span>
                </div>
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl text-center relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-xl" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 glow">
                <MessageCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Start Your Order Now</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Click the button below to start chatting with us on WhatsApp. 
                We'll help you find the perfect service for your needs.
              </p>
              
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8 py-6 text-lg rounded-xl w-full glow animate-glow-pulse"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Response time: Usually within 5 minutes
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join <span className="text-primary">1000+</span> Satisfied Customers
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience premium digital services at the best prices in the market
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppContact}
            variant="outline"
            className="border-primary hover:bg-primary/10"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;