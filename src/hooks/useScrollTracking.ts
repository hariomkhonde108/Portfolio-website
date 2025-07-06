import { useEffect, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

export const useScrollTracking = () => {
  const { trackScroll, trackTimeOnPage } = useAnalytics();
  const startTime = useRef<number>(Date.now());
  const lastScrollTime = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll depth percentage
      const scrollDepth = Math.round((scrollY / (documentHeight - windowHeight)) * 100);
      
      // Track scroll depth every 25%
      if (scrollDepth >= 25 && !trackedSections.current.has('25%')) {
        trackScroll('25_percent', 25);
        trackedSections.current.add('25%');
      }
      if (scrollDepth >= 50 && !trackedSections.current.has('50%')) {
        trackScroll('50_percent', 50);
        trackedSections.current.add('50%');
      }
      if (scrollDepth >= 75 && !trackedSections.current.has('75%')) {
        trackScroll('75_percent', 75);
        trackedSections.current.add('75%');
      }
      if (scrollDepth >= 90 && !trackedSections.current.has('90%')) {
        trackScroll('90_percent', 90);
        trackedSections.current.add('90%');
      }

      // Track section visibility
      const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < windowHeight && rect.bottom > 0;
          
          if (isVisible && !trackedSections.current.has(section)) {
            trackScroll(section, scrollDepth);
            trackedSections.current.add(section);
          }
        }
      });

      // Track time on page when user stops scrolling
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const timeOnPage = (currentTime - startTime.current) / 1000; // in seconds
        if (timeOnPage > 30) { // Only track if user has been on page for more than 30 seconds
          trackTimeOnPage(timeOnPage);
        }
      }, 2000); // Wait 2 seconds after user stops scrolling

      lastScrollTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [trackScroll, trackTimeOnPage]);

  return {
    trackedSections: trackedSections.current,
  };
}; 