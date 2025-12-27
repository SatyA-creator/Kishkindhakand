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
      bgImage: "/faq-card-1.png",
    },
    {
      question: "What platforms will it be available on?",
      answer:
        "Kishkindha Kand will initially launch on PC via Steam, developed in Unity Engine.",
      bgImage: "/faq-card-2.png",
    },
    {
      question: "When is the release date?",
      answer:
        "We're targeting a Q1 2027 release. Wishlist on Steam to get notified when we launch!",
      bgImage: "/faq-card-3.png",
    },
    {
      question: "How can I support the development?",
      answer:
        "You can support us by wishlisting the game on Steam, joining our community, and sharing the game.",
      bgImage: "/faq-card-4.png",
    },
    {
      question: "Will there be multiplayer?",
      answer:
        "No. Kishkindha Kand is a focused single-player narrative experience.",
      bgImage: "/faq-card-5.png",
    },
    {
      question: "What are the system requirements?",
      answer: "System requirements will be announced closer to launch.",
      bgImage: "/faq-card-6.png",
    },
  ];

  const firstColumnFaqs = faqs.slice(0, 3);
  const secondColumnFaqs = faqs.slice(3);

  return (
    <section
      id="support"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img002.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-jungle-charcoal/50 sm:bg-jungle-charcoal/30" />

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
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Support & <span className="text-jungle-emerald">FAQ</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions
          </p>
        </motion.div>

        {/* FAQ Accordion - Two Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {firstColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`left-item-${index}`}
                  className="relative rounded-lg overflow-hidden border border-jungle-emerald/25 hover:border-jungle-emerald/50 transition-all duration-300"
                  style={{
                    backgroundImage: `url('/50061.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Card overlay */}
                  <div className="absolute inset-0  transition-colors duration-300" />
                  <div className="relative px-4 sm:px-5">
                    <AccordionTrigger className="font-display text-base sm:text-lg font-semibold text-white hover:text-jungle-emerald">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-white/85 leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {secondColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`right-item-${index}`}
                  className="relative rounded-lg overflow-hidden border border-jungle-emerald/25 hover:border-jungle-emerald/50 transition-all duration-300"
                  style={{
                    backgroundImage: `url('/50061.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Card overlay */}
                  <div className="absolute inset-0  transition-colors duration-300" />
                  <div className="relative px-4 sm:px-5">
                    <AccordionTrigger className="font-display text-base sm:text-lg font-semibold text-white hover:text-jungle-emerald">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-white/85 leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
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

SupportSection.displayName = "SupportSection";

export default SupportSection;
