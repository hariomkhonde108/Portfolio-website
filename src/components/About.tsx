import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Terminal, Coffee, ExternalLink } from "lucide-react";
import pesLogo from "../assets/pes-logo1.jpeg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 dark:from-white/5 via-gray-200/50 dark:via-white/5 to-gray-200/50 dark:to-white/5 animate-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-gray-600 dark:text-white/70">Me</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left column: Text content and Stats */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-lg text-gray-600 dark:text-white/70 mb-6"
              variants={itemVariants}
            >
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack and modern web technologies. With a strong foundation in
              both frontend and backend development, I specialize in creating
              scalable, efficient, and user-friendly applications that solve
              real-world problems.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-white/70 mb-8"
              variants={itemVariants}
            >
              As a passionate developer, I thrive on building innovative and
              efficient solutions, whether through full-stack development, AI
              integration, or optimizing user experiences. My journey includes
              hands-on experience in hackathons, open-source contributions, and
              exploring modern technologies to push the boundaries of what's
              possible. I believe in continuous learning and experimentation,
              always seeking new challenges to refine my skills and stay ahead
              in the ever-evolving tech landscape.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <Stat icon={<Code />} label="Projects Completed" value="5+" />
              <Stat icon={<Server />} label="Hackathons Attended" value="4" />
              <Stat icon={<Terminal />} label="Technologies" value="10+" />
              <Stat icon={<Coffee />} label="Coffee Consumed" value="∞" />
            </motion.div>
          </motion.div>

          {/* Right column: Experience cards */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <ExperienceCard
              title="PES University, RR Campus, Bengaluru"
              subtitle="Student"
              period="2023 – Present"
              description="B.Tech in Computer Science and Engineering"
              logo={pesLogo}
              website="https://www.pes.edu/"
              isActive={true}
              showDetails={true}
            />

            <ExperienceCard
              title="Diamond Group of Institutions, Bidar"
              subtitle="Student"
              period="2021 – 2023"
              description="PUC (Karnataka Board)"
              isActive={true}
              showDetails={false}
            />

            <ExperienceCard
              title="Shahu Maharaj Residential School, Bidar"
              subtitle="Student"
              period="2008 – 2021"
              description="Completed 6th to SSLC here"
              isActive={true}
              showDetails={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <motion.div
    className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="text-gray-600 dark:text-white/70">{icon}</div>
      <h3 className="font-medium text-gray-600 dark:text-white/70">{label}</h3>
    </div>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
  </motion.div>
);

const ExperienceCard = ({
  title,
  subtitle,
  period,
  description,
  image,
  logo,
  website,
  isActive,
  showDetails,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image?: string;
  logo?: string;
  website?: string;
  isActive: boolean;
  showDetails: boolean;
}) => (
  <motion.div
    className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-200/20 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    {showDetails ? (
      // Detailed card with logo, image, and website
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${title} logo`}
            className="w-16 h-16 rounded-lg object-cover border border-gray-200/20 dark:border-white/10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">{subtitle}</p>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-2">{period}</p>
              <p className="text-gray-600 dark:text-white/60">{description}</p>
            </div>
            
            {/* Website link */}
            <motion.a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 text-gray-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Visit website"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
          
          {/* Institution image - only show if image is provided */}
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt={`${title} campus`}
                className="w-full h-32 rounded-lg object-cover border border-gray-200/20 dark:border-white/10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      </div>
    ) : (
      // Simple card without logo, image, and website
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">{subtitle}</p>
        <p className="text-sm text-gray-500 dark:text-white/50 mb-2">{period}</p>
        <p className="text-gray-600 dark:text-white/60">{description}</p>
      </div>
    )}
  </motion.div>
);

export default About;
