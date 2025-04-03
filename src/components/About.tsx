import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Terminal, Coffee } from "lucide-react";

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
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-white/5 animate-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-white/70">Me</span>
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
              className="text-lg text-white/70 mb-6"
              variants={itemVariants}
            >
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack and modern web technologies. With a strong foundation in
              both frontend and backend development, I specialize in creating
              scalable, efficient, and user-friendly applications that solve
              real-world problems.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 mb-8"
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
              <Stat icon={<Server />} label="Hackathons Attended" value="2" />
              <Stat icon={<Terminal />} label="Technologies" value="10+" />
              <Stat icon={<Coffee />} label="Coffee Consumed" value="∞" />
            </motion.div>
          </motion.div>

          {/* Right column: Experience cards */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <ExperienceCard
              title="Student"
              subtitle="PES University"
              period="2023 - 2027"
              description="B.tech in Computer science and Engineering"
              isActive={true}
            />
            <ExperienceCard
              title="Student"
              subtitle="PES University"
              period="2023 - 2027"
              description="B.tech in Computer science and Engineering"
              isActive={true}
            />
            <ExperienceCard
              title="Free Lancer"
              subtitle="Full Stack Developer"
              period="Present"
              description="Leading development of enterprise applications using MERN stack"
              isActive={true}
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
    className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/5"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="text-white/70">{icon}</div>
      <h3 className="font-medium text-white/70">{label}</h3>
    </div>
    <p className="text-2xl font-bold text-white">{value}</p>
  </motion.div>
);

const ExperienceCard = ({
  title,
  subtitle,
  period,
  description,
  isActive,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  isActive: boolean;
}) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/5"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
    <p className="text-lg text-blue-400 mb-1">{subtitle}</p>
    <p className="text-sm text-white/50 mb-2">{period}</p>
    <p className="text-white/60">{description}</p>
  </motion.div>
);

export default About;
