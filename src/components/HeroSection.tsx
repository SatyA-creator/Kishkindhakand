import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-no-repeat
        bg-cover
        bg-top
        sm:bg-[center_40%]
        md:bg-center
        bg-[url('/finalbg2.png')]      /* mobile hero */
        sm:bg-[url('/finalbg.png')]    /* desktop hero */
      "
    >
      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full items-center max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center w-full"
          >
            <div
              className="
                relative
                w-full
                max-w-[700px]
                min-h-[380px]
                md:min-h-[420px]
                lg:min-h-[460px]
                px-8
                py-10
                flex
                flex-col
                justify-center
              "
            >
              {/* Desktop/tablet button – sits higher */}
              <div className="hidden md:flex mt-64 lg:mt-80">
                <Button
                  className="
                    relative overflow-hidden
                    px-8 py-4
                    text-base lg:text-lg
                    font-display font-bold tracking-wider
                    rounded-xl
                    text-amber-100
                    bg-[linear-gradient(135deg,#3b1f0e,#5a2e16,#3b1f0e)]
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_10px_25px_rgba(0,0,0,0.4)]
                    border border-amber-700/40
                    transition-all duration-300
                    hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                    active:scale-95
                  "
                >
                  Wishlist on Steam
                </Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — EMPTY (SHOWS ART ON DESKTOP) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* MOBILE button + scroll indicator in the same place */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 md:gap-2"
      >
        {/* Mobile button centered above scroll line */}
        <Button
          className="
            md:hidden
            relative overflow-hidden
            px-6 py-3
            text-sm
            font-display font-bold tracking-wider
            rounded-xl
            text-amber-100
            bg-[linear-gradient(135deg,#3b1f0e,#5a2e16,#3b1f0e)]
            shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_10px_25px_rgba(0,0,0,0.4)]
            border border-amber-700/40
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
            active:scale-95
          "
        >
          Wishlist on Steam
        </Button>

        {/* Scroll label (optional – hide on very small screens if needed) */}
        <div className="flex flex-col items-center gap-1 text-foreground/80">
          <span className="hidden sm:block text-xs uppercase tracking-widest">
            Scroll
          </span>
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
