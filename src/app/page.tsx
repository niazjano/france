import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { ImpactProgress } from "@/components/ImpactProgress";
import { StorySection } from "@/components/StorySection";
import { ActionGrid } from "@/components/ActionGrid";
import { Stories } from "@/components/Stories";
import { BookSection } from "@/components/BookSection";
import { ImpactStats } from "@/components/ImpactStats";
import { Transparency } from "@/components/Transparency";
import { Donation } from "@/components/Donation";
import { CommunityCTA } from "@/components/CommunityCTA";
import { NewsSection } from "@/components/NewsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ImpactProgress />
        <StorySection />
        <ActionGrid />
        <Stories />
        <BookSection />
        <ImpactStats />
        <Transparency />
        <Donation />
        <CommunityCTA />
        <NewsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
