import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart,
  Smartphone,
  Globe,
  Music,
  Tv,
  Crown,
  Zap
} from "lucide-react";

// Import service logos
import whatsappLogo from "@/assets/logos/whatsapp.png";
import spotifyLogo from "@/assets/logos/spotify.png";
import netflixLogo from "@/assets/logos/netflix.png";
import appleMusicLogo from "@/assets/logos/apple-music.png";
import youtubeLogo from "@/assets/logos/youtube.png";
import primeVideoLogo from "@/assets/logos/prime-video.png";
import webDevLogo from "@/assets/logos/web-dev.png";
import tidalLogo from "@/assets/logos/tidal.png";
import crunchyrollLogo from "@/assets/logos/crunchyroll.png";
import huluLogo from "@/assets/logos/hulu.png";
import genericOttLogo from "@/assets/logos/generic-ott.png";
import genericMusicLogo from "@/assets/logos/generic-music.png";

interface Service {
  name: string;
  description: string;
  price?: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const ServicesGrid = () => {
  const handleBuyNow = (serviceName: string) => {
    const phoneNumber = "+916307263185";
    const message = `Hi Amarpal Tech, I'm interested in your ${serviceName}. Please send more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const whatsappServices: Service[] = [
    {
      name: "WhatsApp Unban Service",
      description: "Get your banned WhatsApp account restored quickly and safely",
      price: "Contact for pricing",
      icon: <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />,
      popular: true
    },
    {
      name: "WhatsApp Marketing",
      description: "Boost your business with professional WhatsApp marketing solutions",
      price: "Contact for pricing",
      icon: <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
    }
  ];

  const webServices: Service[] = [
    {
      name: "Custom Website Development",
      description: "Professional, responsive websites tailored to your business needs",
      price: "Starting ₹5,999",
      icon: <img src={webDevLogo} alt="Web Development" className="w-6 h-6" />,
      popular: true
    }
  ];

  const musicServices: Service[] = [
    {
      name: "Apple Music (1 Year)",
      description: "Premium Apple Music subscription with full access",
      price: "₹399",
      icon: <img src={appleMusicLogo} alt="Apple Music" className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Spotify Premium (1M)",
      description: "Ad-free music streaming with offline downloads",
      price: "Contact for pricing",
      icon: <img src={spotifyLogo} alt="Spotify" className="w-6 h-6" />
    },
    {
      name: "Spotify Premium (2M/3M/1Y)",
      description: "Extended Spotify Premium subscriptions",
      price: "Contact for pricing",
      icon: <img src={spotifyLogo} alt="Spotify" className="w-6 h-6" />
    },
    {
      name: "YouTube Premium (Individual)",
      description: "Ad-free YouTube with background play and downloads",
      price: "Contact for pricing",
      icon: <img src={youtubeLogo} alt="YouTube" className="w-6 h-6" />
    },
    {
      name: "YouTube Premium (Family)",
      description: "YouTube Premium for up to 6 family members",
      price: "Contact for pricing",
      icon: <img src={youtubeLogo} alt="YouTube" className="w-6 h-6" />
    },
    {
      name: "Qobuz Studio",
      description: "High-resolution music streaming service",
      price: "Contact for pricing",
      icon: <img src={genericMusicLogo} alt="Qobuz" className="w-6 h-6" />
    },
    {
      name: "Epidemic Sound Commercial",
      description: "Royalty-free music for commercial use",
      price: "Contact for pricing",
      icon: <img src={genericMusicLogo} alt="Epidemic Sound" className="w-6 h-6" />
    },
    {
      name: "Tidal Premium",
      description: "High-fidelity music streaming with exclusive content",
      price: "Contact for pricing",
      icon: <img src={tidalLogo} alt="Tidal" className="w-6 h-6" />
    }
  ];

  const ottServices: Service[] = [
    {
      name: "Netflix Premium",
      description: "4K Ultra HD streaming with multiple screens",
      price: "Contact for pricing",
      icon: <img src={netflixLogo} alt="Netflix" className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Amazon Prime Video",
      description: "Unlimited streaming with Prime benefits",
      price: "Contact for pricing",
      icon: <img src={primeVideoLogo} alt="Prime Video" className="w-6 h-6" />
    },
    {
      name: "Crunchyroll",
      description: "Premium anime streaming service",
      price: "Contact for pricing",
      icon: <img src={crunchyrollLogo} alt="Crunchyroll" className="w-6 h-6" />
    },
    {
      name: "Hulu NoAds",
      description: "Ad-free streaming with premium content",
      price: "Contact for pricing",
      icon: <img src={huluLogo} alt="Hulu" className="w-6 h-6" />
    },
    {
      name: "Sony LIV",
      description: "Premium Indian content and sports streaming",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Sony LIV" className="w-6 h-6" />
    },
    {
      name: "Zee5",
      description: "Premium Indian entertainment streaming",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Zee5" className="w-6 h-6" />
    },
    {
      name: "Alt Balaji",
      description: "Premium Indian web series and shows",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Alt Balaji" className="w-6 h-6" />
    },
    {
      name: "Hoichoi",
      description: "Premium Bengali content streaming",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Hoichoi" className="w-6 h-6" />
    },
    {
      name: "Jio Hotstar Super",
      description: "Premium sports and entertainment content",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Jio Hotstar" className="w-6 h-6" />
    },
    {
      name: "Ullu Premium",
      description: "Premium adult entertainment content",
      price: "Contact for pricing",
      icon: <img src={genericOttLogo} alt="Ullu" className="w-6 h-6" />
    }
  ];

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
    >
      {service.popular && (
        <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
          <Crown className="w-3 h-3 mr-1" />
          Popular
        </Badge>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
          {service.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <div className="text-primary font-bold text-lg">
          {service.price}
        </div>
        <Button
          onClick={() => handleBuyNow(service.name)}
          className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium digital services and subscriptions at the best prices in the market
          </p>
        </motion.div>

        <Tabs defaultValue="whatsapp" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass-card mb-8">
            <TabsTrigger value="whatsapp" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              WhatsApp
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Websites
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              Music
            </TabsTrigger>
            <TabsTrigger value="ott" className="flex items-center gap-2">
              <Tv className="w-4 h-4" />
              OTT Streaming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="whatsapp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatsappServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ott">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ottServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesGrid;