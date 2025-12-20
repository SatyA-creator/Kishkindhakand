import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink, Bell, Gift } from "lucide-react";
import { memo } from "react";

const SteamJoinSection = memo(() => {
  return (
    <section id="steam" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-6.PNG')" }}
        aria-hidden="true"
      />

      {/* Dark overlay (kept light so image is visible) */}
      <div className="absolute inset-0 bg-black/20" />

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
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Join the <span className="text-jungle-emerald">Journey</span>
          </h2>
          <div className="divider-forest mx-auto mb-6 sm:mb-8" />
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of bringing ancient Indian mythology to modern gaming.
            Wishlist Kishkindha Kand on Steam and get notified on launch.
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-jungle-emerald/30 rounded-lg p-6 sm:p-8 md:p-12 mb-10 sm:mb-12"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-jungle-emerald/20 border border-jungle-emerald/50 mb-4 sm:mb-6">
              <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 text-jungle-emerald" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Wishlist on Steam
            </h3>

            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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

        {/* Benefits Grid */}
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
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Exclusive updates",
                description:
                  "Behind-the-scenes content and development insights",
              },
              {
                icon: <ExternalLink className="w-8 h-8" />,
                title: "Beta access",
                description:
                  "Priority access to beta testing opportunities",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-black/35 backdrop-blur-md border border-jungle-emerald/20 rounded-lg p-6 text-center hover:border-jungle-emerald/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jungle-emerald/10 border border-jungle-emerald/30 mb-4">
                  <div className="text-jungle-emerald">{benefit.icon}</div>
                </div>
                <h5 className="font-display text-xl font-bold text-jungle-gold mb-3">
                  ✦ {benefit.title}
                </h5>
                <p className="font-body text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Community */}
        <motion.div
          id="join"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-black/40 backdrop-blur-md border border-jungle-emerald/30 rounded-lg p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
              Join Our Community
            </h3>
            <p className="font-body text-lg text-center text-muted-foreground mb-8">
              Let's create something amazing together
            </p>

            {/* Newsletter */}
            <div className="bg-black/35 backdrop-blur-md border border-jungle-emerald/20 rounded-lg p-6">
              <h4 className="font-display text-xl font-bold text-foreground mb-4 text-center">
                Stay Updated
              </h4>
              <p className="font-body text-sm text-muted-foreground text-center mb-4">
                Get exclusive development updates, behind-the-scenes content, and
                early access opportunities
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-jungle-emerald/30 rounded focus:outline-none focus:border-jungle-emerald/50 text-foreground"
                />
                <Button variant="mythic">Subscribe</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

SteamJoinSection.displayName = 'SteamJoinSection';

export default SteamJoinSection;
