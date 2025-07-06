import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }
  };

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Enhanced tracking functions
  const trackScroll = (section: string, depth: number) => {
    trackEvent('scroll', 'engagement', `section_${section}`, depth);
  };

  const trackClick = (element: string, section?: string, metadata?: any) => {
    const label = section ? `${section}_${element}` : element;
    trackEvent('click', 'engagement', label, metadata ? 1 : undefined);
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent('form_submit', 'engagement', `${formName}_${success ? 'success' : 'error'}`);
  };

  const trackDownload = (fileType: string, fileName?: string) => {
    trackEvent('download', 'engagement', `${fileType}_${fileName || 'unknown'}`);
  };

  const trackExternalLink = (url: string, source: string) => {
    trackEvent('external_link', 'engagement', `${source}_${url}`);
  };

  const trackTimeOnPage = (duration: number) => {
    trackEvent('time_on_page', 'engagement', 'duration', Math.round(duration));
  };

  const trackProjectView = (projectName: string, viewType: 'card' | 'detail') => {
    trackEvent('project_view', 'content', `${projectName}_${viewType}`);
  };

  const trackSkillHover = (skillName: string, category: string) => {
    trackEvent('skill_hover', 'engagement', `${category}_${skillName}`);
  };

  const trackThemeToggle = (theme: 'light' | 'dark') => {
    trackEvent('theme_toggle', 'preference', theme);
  };

  const trackResumeDownload = (format: string) => {
    trackEvent('resume_download', 'engagement', format);
  };

  const trackContactMethod = (method: 'email' | 'phone' | 'location') => {
    trackEvent('contact_method', 'engagement', method);
  };

  const trackNavigation = (from: string, to: string) => {
    trackEvent('navigation', 'engagement', `${from}_to_${to}`);
  };

  return {
    trackPageView,
    trackEvent,
    trackScroll,
    trackClick,
    trackFormSubmission,
    trackDownload,
    trackExternalLink,
    trackTimeOnPage,
    trackProjectView,
    trackSkillHover,
    trackThemeToggle,
    trackResumeDownload,
    trackContactMethod,
    trackNavigation,
  };
};

export const usePageTracking = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, [trackPageView]);
}; 