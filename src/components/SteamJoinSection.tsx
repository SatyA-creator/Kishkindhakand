import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink, Bell, Gift } from "lucide-react";
import { memo } from "react";

const SteamJoinSection = memo(() => {
  return (
    <section id="steam" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/border002.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover"
        }}
        aria-hidden="true"
      />

      {/* Dark overlay (kept light so image is visible) */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/20" />

      {/* Subtle mythic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-jungle-emerald/10 via-transparent to-jungle-gold/10" />

      {/* Film grain */}
      <div className="absolute inset-0 film-grain opacity-35" />

      {/* ================= CONTENT ================= */}
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
            Join the <span className="text-jungle-emerald">Journey</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of bringing ancient Indian mythology to modern gaming.
            Wishlist Kishkindha Kand on Steam and get notified on launch.
          </p>
        </motion.div>

        {/* Main CTA Card with image background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto rounded-lg overflow-hidden mb-8 sm:mb-10"
          style={{
            backgroundImage: "url('/768313.png')", // <-- your CTA image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 sm:bg-transparent" aria-hidden="true" />

          <div className="relative p-5 sm:p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-jungle-emerald/30 border border-jungle-emerald/60 mb-4">
              <ExternalLink className="w-7 h-7 sm:w-8 sm:h-8 text-jungle-emerald" />
            </div>

            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Wishlist on Steam
            </h3>

            <p className="font-body text-base text-white/85 mb-6 max-w-xl mx-auto">
              Support independent game development and be among the first to
              experience the epic tale of Kishkindha Kand.
            </p>

            <Button
              variant="mythic"
              size="lg"
              className="group"
              onClick={() =>
                window.open("https://store.steampowered.com", "_blank")
              }
            >
              Wishlist on Steam
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Benefits Grid with image-backed cards */}
        <div className="max-w-5xl mx-auto">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-8 sm:mb-10"
          >
            Early supporters will receive:
          </motion.h4>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Day-one launch notification",
                description: "Be the first to know when the game launches",
                bg: "/benefit-card-1.png",
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Exclusive updates",
                description:
                  "Behind-the-scenes content and development insights",
                bg: "/benefit-card-2.png",
              },
              {
                icon: <ExternalLink className="w-8 h-8" />,
                title: "Beta access",
                description: "Priority access to beta testing opportunities",
                bg: "/benefit-card-3.png",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative rounded-lg overflow-hidden text-center cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('/320237.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0  transition-colors duration-300" />

                <div className="relative p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jungle-emerald/30 border border-jungle-emerald/50 mb-4">
                    <div className="text-jungle-emerald">{benefit.icon}</div>
                  </div>
                  <h5 className="font-display text-lg font-bold text-jungle-gold mb-3">
                    ✦ {benefit.title}
                  </h5>
                  <p className="font-body text-sm text-white/85">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Community (empty for now) */}
        <motion.div
          id="join"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-20"
        >
          {/* add community CTA here if needed */}
        </motion.div>
      </div>
    </section>
  );
});

SteamJoinSection.displayName = "SteamJoinSection";

export default SteamJoinSection;
