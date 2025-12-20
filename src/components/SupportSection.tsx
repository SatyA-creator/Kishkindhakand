import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { memo } from "react";

const SupportSection = memo(() => {
  const faqs = [
    {
      question: "What is Kishkindha Kand about?",
      answer:
        "Kishkindha Kand is an isometric narrative-action adventure game that tells the epic tale of brothers Vali and Sugriva from the Ramayana. Experience one conflict through two perspectives as you explore themes of brotherhood, betrayal, and redemption in the mythical jungle kingdom of Kishkindha.",
    },
    {
      question: "What platforms will it be available on?",
      answer:
        "Kishkindha Kand will initially launch on PC via Steam, developed in Unity Engine.",
    },
    {
      question: "When is the release date?",
      answer:
        "We're targeting a Q1 2027 release. Wishlist on Steam to get notified when we launch!",
    },
    {
      question: "How can I support the development?",
      answer:
        "You can support us by wishlisting the game on Steam, joining our community, and sharing the game.",
    },
    {
      question: "Will there be multiplayer?",
      answer:
        "No. Kishkindha Kand is a focused single-player narrative experience.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "System requirements will be announced closer to launch.",
    },
  ];

  return (
    <section id="support" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.0]"
        style={{
          backgroundImage:
            "url('/bg-7.PNG')", // 🔁 change if needed
        }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-jungle-charcoal/30" />

      {/* Accent Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-emerald/10 via-transparent to-jungle-gold/10" />

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain opacity-40" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Support & <span className="text-jungle-emerald">FAQ</span>
          </h2>
          <div className="divider-forest mx-auto mb-6 sm:mb-8" />
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/30 backdrop-blur-md border border-jungle-emerald/20 rounded-lg px-6 hover:border-jungle-emerald/50 transition-all duration-300"
              >
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-jungle-emerald">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Section */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="max-w-3xl mx-auto"
>
  <div className="bg-gradient-to-br from-jungle-emerald/10 to-jungle-gold/10 backdrop-blur-md border border-jungle-emerald/30 rounded-lg px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
    
    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-3 sm:mb-4">
      Join Our Community
    </h3>

    <p className="font-body text-sm sm:text-base text-center text-muted-foreground mb-8 sm:mb-10 px-2">
      Let's create something amazing together
    </p>

    {/* Newsletter Subscription */}
    <div className="max-w-md mx-auto mb-8">
      <div className="bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-4 sm:p-6">
        <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-3 text-center">
          Stay Updated
        </h4>
        <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4 text-center leading-relaxed">
          Get exclusive development updates, behind-the-scenes content, and early access opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full px-4 py-2.5 sm:py-3 bg-background/50 border border-jungle-emerald/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-jungle-emerald/70 transition-colors text-sm sm:text-base"
          />
          <Button
            variant="mythic"
            size="default"
            className="w-full sm:w-auto whitespace-nowrap px-4 sm:px-6"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>

    {/* Contact Card */}
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-4 sm:p-6 text-center hover:border-jungle-emerald/50 transition-all duration-300">
        
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-jungle-emerald/20 border border-jungle-emerald/50 mb-3 sm:mb-4">
          <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-jungle-emerald" />
        </div>

        <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
          Email Support
        </h4>

        <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3">
          For general inquiries and support
        </p>

        <a
          href="mailto:info@zenithstudio.live"
          className="font-body text-sm sm:text-base text-jungle-emerald hover:text-jungle-gold transition-colors duration-300 break-all"
        >
          info@zenithstudio.live
        </a>
      </div>
    </div>

    {/* FOOTER */}
    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-jungle-emerald/20 text-center">
      <p className="font-body text-[0.65rem] sm:text-xs text-muted-foreground px-2">
        Zenith Studio LLC – Innovating games for a changing world of players
      </p>
    </div>

  </div>
</motion.div>


        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="font-body text-sm text-muted-foreground">
            💡 <span className="text-jungle-emerald font-semibold">Pro Tip:</span>{" "}
            Join our newsletter for exclusive updates and early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

SupportSection.displayName = 'SupportSection';

export default SupportSection;
