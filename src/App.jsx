import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen.jsx';
import Hero from './components/Hero.jsx';
import Countdown from './components/Countdown.jsx';
import Timeline from './components/Timeline.jsx';
import Gallery from './components/Gallery.jsx';
import Reasons from './components/Reasons.jsx';
import GiftBox from './components/GiftBox.jsx';
import VideoSection from './components/VideoSection.jsx';
import Wishes from './components/Wishes.jsx';
import Cake from './components/Cake.jsx';
import FinalLetter from './components/FinalLetter.jsx';
import GrandFinale from './components/GrandFinale.jsx';
import Footer from './components/Footer.jsx';
import SectionDivider from './components/SectionDivider.jsx';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. Hero */}
            <Hero />
            <SectionDivider label="Counting Down" />

            {/* 2. Countdown */}
            <Countdown />
            <SectionDivider label="Your Story" />

            {/* 3. Timeline */}
            <Timeline />
            <SectionDivider label="Captured Moments" />

            {/* 4. Gallery */}
            <Gallery />
            <SectionDivider label="50 Reasons" />

            {/* 5. Reasons flip cards */}
            <Reasons />
            <SectionDivider label="A Gift For You" />

            {/* 6. Gift Box */}
            <GiftBox />
            <SectionDivider label="Video Message" />

            {/* 7. Video */}
            <VideoSection />
            <SectionDivider label="Birthday Wishes" />

            {/* 8. Wishes Carousel */}
            <Wishes />
            <SectionDivider label="Make a Wish" />

            {/* 9. Cake */}
            <Cake />
            <SectionDivider label="A Letter" />

            {/* 10. Final Letter */}
            <FinalLetter />
            <SectionDivider label="Grand Finale" />

            {/* 11. Grand Finale */}
            <GrandFinale />

            {/* Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
