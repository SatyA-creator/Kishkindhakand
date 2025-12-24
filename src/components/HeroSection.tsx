import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-jungle-charcoal">
      {/* MAIN BACKGROUND (CLEARER NOW) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-1.PNG"
          alt="Vali and Sugriva - Kishkindha Kingdom"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* VERY LIGHT overlay only for contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">

          {/* LEFT SIDE — BIG IMAGE WITH TEXT OVER IT */}
         <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="relative flex items-center w-full"
>
  {/* WOODEN BOARD */}
  <div
    className="
      relative
      w-full
      max-w-[900px]
      min-h-[480px]
      md:min-h-[520px]
      lg:min-h-[560px]
      px-14
      py-14
      flex
      flex-col
      justify-center
      bg-no-repeat
      bg-center
      bg-cover
    "
    // style={{
    //   backgroundImage: "url('/woddenhang.PNG')",
    // }}
  >
    {/* TEXT */}
    <p className="font-display text-jungle-gold text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
      Zenith Studio LLC Presents
    </p>

    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
      <span className="text-gradient-emerald">Kishkindha</span>{" "}
      <span className="text-foreground">Kand</span>
    </h1>

    {/* <p className="font-accent text-base sm:text-lg md:text-xl italic mb-2 sm:mb-3 text-foreground">
      Innovating Games for a Changing World of Players
    </p> */}

    {/* <p className="font-body text-xs sm:text-sm md:text-base text-foreground/90 mb-6 sm:mb-8 max-w-xl">
      We're not retelling history. We're making it as a new experience.

Every myth ends in a war. Ours ends in understanding.
    </p> */}

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Button variant="mythic" size="xl">
        Enter the Kingdom
      </Button>
      <Button variant="mythicOutline" size="xl">
        Watch Trailer
      </Button>
    </div>
  </div>
</motion.div>


          {/* RIGHT SIDE — EMPTY (SHOWS CLEAR BACKGROUND ART) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-foreground/80">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-jungle-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
