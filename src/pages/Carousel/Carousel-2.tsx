import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/css/carousel.css";
const images = [
  "https://placehold.co/600x400/orange/white",
  "https://placehold.co/600x400/orange/black",
  "https://placehold.co/600x400/orange/green",
  "https://placehold.co/600x400/orange/blue",
  "https://placehold.co/600x400/orange/yellow",
];

const DELAY_TIME = 1000; // Delay in seconds

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent click during transition
  const totalItems = images.length;

  const goToIndex = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true); // Prevent further clicks

    let newIndex = index;
    if (newIndex < 0) newIndex = totalItems - 1;
    if (newIndex >= totalItems) newIndex = 0;

    // The delay happens *before* the new image appears
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false); // Re-enable buttons after the delay time
    }, DELAY_TIME);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    goToIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex - 1;
    goToIndex(prevIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button onClick={handlePrevious} disabled={isAnimating}>
          Previous
        </button>
        <button onClick={handleNext} disabled={isAnimating}>
          Next
        </button>
      </div>
      <div className="carousel">
        <div className="inner-carousel">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="item"
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              exit={{ opacity: 0 }} // Fade out
              transition={{ duration: 0.5 }} // How long the fade takes
            >
              <img
                src={images[currentIndex]}
                alt={`Carousel Image ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
