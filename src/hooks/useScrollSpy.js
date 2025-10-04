import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section that is currently in view
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If we're at the very top, default to the first section
      if (scrollPosition < 200) {
        currentSection = sectionIds[0];
      }
      
      // If we're near the bottom, default to the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = sectionIds[sectionIds.length - 1];
      }
      
      setActiveSection(currentSection);
    };

    // Set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;