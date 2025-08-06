import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      avatar: avatar1,
      rating: 5,
      text: "Amarpal Tech saved my business! My WhatsApp got banned and they restored it within 24 hours. Their service is incredible and very affordable. Highly recommended!"
    },
    {
      name: "Priya Patel",
      role: "Content Creator",
      avatar: avatar2,
      rating: 5,
      text: "Got my YouTube Premium and Spotify subscriptions at amazing prices. The delivery was instant and everything works perfectly. Will definitely buy again!"
    },
    {
      name: "Arjun Kumar",
      role: "Startup Founder",
      avatar: avatar3,
      rating: 5,
      text: "They built an amazing website for my startup. Professional, responsive, and delivered on time. The team is very knowledgeable and supportive throughout the process."
    },
    {
      name: "Sneha Reddy",
      role: "Digital Marketer",
      avatar: avatar1,
      rating: 5,
      text: "Best place for all digital subscriptions! Netflix, Amazon Prime, all at unbeatable prices. Customer support is excellent and always helpful."
    }
  ];

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
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Amarpal Tech for their digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Safe & Secure</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">⚡</div>
              <div className="text-muted-foreground">Instant Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;