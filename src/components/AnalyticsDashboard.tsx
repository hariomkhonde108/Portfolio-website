import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MousePointer, 
  Scroll, 
  Clock, 
  Download, 
  Mail, 
  ExternalLink,
  TrendingUp,
  Eye,
  BarChart3
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageTimeOnPage: number;
  scrollDepth: {
    '25%': number;
    '50%': number;
    '75%': number;
    '90%': number;
  };
  sectionEngagement: {
    hero: number;
    about: number;
    projects: number;
    skills: number;
    resume: number;
    contact: number;
  };
  interactions: {
    themeToggles: number;
    formSubmissions: number;
    downloads: number;
    externalLinks: number;
  };
}

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageTimeOnPage: 0,
    scrollDepth: {
      '25%': 0,
      '50%': 0,
      '75%': 0,
      '90%': 0,
    },
    sectionEngagement: {
      hero: 0,
      about: 0,
      projects: 0,
      skills: 0,
      resume: 0,
      contact: 0,
    },
    interactions: {
      themeToggles: 0,
      formSubmissions: 0,
      downloads: 0,
      externalLinks: 0,
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => {
      setAnalyticsData({
        pageViews: 1247,
        uniqueVisitors: 892,
        averageTimeOnPage: 145, // seconds
        scrollDepth: {
          '25%': 78,
          '50%': 65,
          '75%': 42,
          '90%': 28,
        },
        sectionEngagement: {
          hero: 95,
          about: 87,
          projects: 92,
          skills: 76,
          resume: 68,
          contact: 54,
        },
        interactions: {
          themeToggles: 156,
          formSubmissions: 23,
          downloads: 45,
          externalLinks: 89,
        },
      });
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const StatCard = ({ 
    icon, 
    title, 
    value, 
    subtitle, 
    color = 'blue' 
  }: {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    subtitle?: string;
    color?: string;
  }) => (
    <motion.div
      className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-white/70">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-white/50">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100 dark:bg-${color}-900/20`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  const ProgressBar = ({ 
    label, 
    value, 
    max = 100 
  }: {
    label: string;
    value: number;
    max?: number;
  }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-600 dark:text-white/70">{label}</span>
        <span className="text-sm text-gray-500 dark:text-white/50">{value}%</span>
      </div>
      <div className="w-full bg-gray-200/50 dark:bg-black/50 rounded-full h-2">
        <motion.div
          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${(value / max) * 100}%` } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Portfolio <span className="text-gray-600 dark:text-white/70">Analytics</span>
        </motion.h2>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<Users size={24} className="text-blue-600 dark:text-blue-400" />}
            title="Total Views"
            value={analyticsData.pageViews.toLocaleString()}
            subtitle="Page views"
            color="blue"
          />
          <StatCard
            icon={<Eye size={24} className="text-green-600 dark:text-green-400" />}
            title="Unique Visitors"
            value={analyticsData.uniqueVisitors.toLocaleString()}
            subtitle="Individual users"
            color="green"
          />
          <StatCard
            icon={<Clock size={24} className="text-purple-600 dark:text-purple-400" />}
            title="Avg. Time"
            value={`${Math.floor(analyticsData.averageTimeOnPage / 60)}m ${analyticsData.averageTimeOnPage % 60}s`}
            subtitle="On page"
            color="purple"
          />
          <StatCard
            icon={<TrendingUp size={24} className="text-orange-600 dark:text-orange-400" />}
            title="Engagement"
            value={`${Math.round((analyticsData.uniqueVisitors / analyticsData.pageViews) * 100)}%`}
            subtitle="Return rate"
            color="orange"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Scroll Depth Analysis */}
          <motion.div
            className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Scroll size={24} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Scroll Depth</h3>
            </div>
            <ProgressBar label="25% of page" value={analyticsData.scrollDepth['25%']} />
            <ProgressBar label="50% of page" value={analyticsData.scrollDepth['50%']} />
            <ProgressBar label="75% of page" value={analyticsData.scrollDepth['75%']} />
            <ProgressBar label="90% of page" value={analyticsData.scrollDepth['90%']} />
          </motion.div>

          {/* Section Engagement */}
          <motion.div
            className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 size={24} className="text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Section Engagement</h3>
            </div>
            <ProgressBar label="Hero Section" value={analyticsData.sectionEngagement.hero} />
            <ProgressBar label="About Section" value={analyticsData.sectionEngagement.about} />
            <ProgressBar label="Projects Section" value={analyticsData.sectionEngagement.projects} />
            <ProgressBar label="Skills Section" value={analyticsData.sectionEngagement.skills} />
            <ProgressBar label="Resume Section" value={analyticsData.sectionEngagement.resume} />
            <ProgressBar label="Contact Section" value={analyticsData.sectionEngagement.contact} />
          </motion.div>
        </div>

        {/* User Interactions */}
        <motion.div
          className="mt-8 bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <MousePointer size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">User Interactions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {analyticsData.interactions.themeToggles}
              </div>
              <div className="text-sm text-gray-600 dark:text-white/70">Theme Toggles</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {analyticsData.interactions.formSubmissions}
              </div>
              <div className="text-sm text-gray-600 dark:text-white/70">Form Submissions</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {analyticsData.interactions.downloads}
              </div>
              <div className="text-sm text-gray-600 dark:text-white/70">Downloads</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {analyticsData.interactions.externalLinks}
              </div>
              <div className="text-sm text-gray-600 dark:text-white/70">External Links</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard; 