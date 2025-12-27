import { motion } from "framer-motion";
import { useState, useMemo, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";

const MediaSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Define images array
  const images = useMemo(() => [
  {
    src: "img-2.PNG",
    title: "Kishkindha Kingdom",
  },
  {
    src: "/img-3.PNG",
    title: "Vali & Sugriva",
  },
  {
    src: "/img-4.PNG",
    title: "Epic Combat",
  },
  {
    src: "/img-5.PNG",
    title: "Jungle Landscapes",
  },
  {
    src: "/img-6.PNG",
    title: "Boss Battles",
  },
  {
    src: "/img-7.PNG",
    title: "Ancient Architecture",
  },
  {
    src: "/img-8.PNG",
    title: "Ancient Architecture",
  },
  {
    src: "/img-9.jpg",
    title: "Ancient Architecture",
  },
], []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play carousel every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalId = setInterval(() => {
      nextImage();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextImage]);

  // Pause auto-play on user interaction
  const handleManualChange = useCallback((action: () => void) => {
    setIsAutoPlaying(false);
    action();
    // Resume auto-play after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  }, []);

  return (
    <section id="media" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/exp.PNG')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/20" />

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
            Experience <span className="text-jungle-emerald">Kishkindha</span>
          </h2>
          <p className="font-body text-white">
            Images are from engine and alpha build
          </p>
        </motion.div>

        {/* Image Carousel */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-jungle-charcoal/50 backdrop-blur-sm border border-jungle-emerald/30 rounded-lg overflow-hidden"
          >
            {/* Main Image Display */}
           <div className="aspect-video relative group overflow-hidden">
  <motion.img
    key={currentImageIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    src={images[currentImageIndex].src}
    alt={images[currentImageIndex].title}
    className="w-full h-full object-cover"
    loading="lazy"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* Text Overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
      {images[currentImageIndex].title}
    </h3>
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={() => handleManualChange(previousImage)}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jungle-emerald/40 border border-jungle-emerald/50 rounded-full p-2 sm:p-3 opacity-80 hover:opacity-100 transition-all duration-200 z-20"
    aria-label="Previous image"
  >
    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-jungle-emerald" />
  </button>

  <button
    onClick={() => handleManualChange(nextImage)}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jungle-emerald/40 border border-jungle-emerald/50 rounded-full p-2 sm:p-3 opacity-80 hover:opacity-100 transition-all duration-200 z-20"
    aria-label="Next image"
  >
    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-jungle-emerald" />
  </button>

  {/* Progress Indicators */}
  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => handleManualChange(() => setCurrentImageIndex(index))}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          index === currentImageIndex
            ? "w-8 bg-jungle-emerald"
            : "w-1.5 bg-white/50 hover:bg-white/80"
        }`}
        aria-label={`Go to image ${index + 1}`}
      />
    ))}
  </div>
</div>


            {/* Thumbnail Navigation */}
           <div className="p-4 flex gap-3 overflow-x-auto scrollbar-hide">
  {images.map((image, index) => (
    <button
      key={index}
      onClick={() => handleManualChange(() => setCurrentImageIndex(index))}
      className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
        index === currentImageIndex
          ? "border-jungle-emerald scale-105 shadow-lg shadow-jungle-emerald/30"
          : "border-jungle-emerald/30 opacity-70 hover:opacity-100 hover:border-jungle-emerald/60"
      }`}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </button>
  ))}
</div>

          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center font-body text-sm text-white mt-6"
          >
            More gameplay footage and screenshots coming soon as development progresses
          </motion.p>
        </div>

        {/* Video/Trailer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* <div className="bg-secondary/30 backdrop-blur-sm border border-jungle-emerald/20 rounded-lg p-6 sm:p-8 text-center">
            <Play className="w-12 h-12 sm:w-16 sm:h-16 text-jungle-emerald mx-auto mb-4 sm:mb-6" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Watch the Trailer
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Experience the epic journey of Vali and Sugriva in our cinematic trailer
            </p>
            <Button variant="mythic" size="lg">
              Watch Now
            </Button>
          </div> */}
        </motion.div>

       
      </div>
    </section>
  );
};

MediaSection.displayName = 'MediaSection';

export default MediaSection;
