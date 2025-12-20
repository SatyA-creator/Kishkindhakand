import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load sections for better performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const MediaSection = lazy(() => import("@/components/MediaSection"));
const SteamJoinSection = lazy(() => import("@/components/SteamJoinSection"));
const DevlogSection = lazy(() => import("@/components/DevlogSection"));
const SupportSection = lazy(() => import("@/components/SupportSection"));

// Loading component for lazy sections
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-jungle-emerald">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kishkindha Kand | A Mythic Action Adventure Game by Zenith Studio</title>
        <meta
          name="description"
          content="Experience the epic tale of Vali and Sugriva in Kishkindha Kand - an isometric narrative-action adventure based on Indian mythology. Coming soon from Zenith Studio LLC."
        />
        <meta name="keywords" content="Kishkindha Kand, indie game, action adventure, Indian mythology, Ramayana, Vali, Sugriva, Zenith Studio" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        
        <main>
          <HeroSection />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <FeaturesSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <MediaSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SteamJoinSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <DevlogSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SupportSection />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
