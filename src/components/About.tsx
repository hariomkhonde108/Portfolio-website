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
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Text content */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              variants={itemVariants}
            >
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack and modern web technologies. With a strong foundation in
              both frontend and backend development, I specialize in creating
              scalable, efficient, and user-friendly applications that solve
              real-world problems.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              As a passionate developer, I thrive on building innovative and
              efficient solutions, whether through full-stack development, AI
              integration, or optimizing user experiences. My journey includes
              hands-on experience in hackathons, open-source contributions, and
              exploring modern technologies to push the boundaries of what’s
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

          {/* Experience cards */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <ExperienceCard
              company="Student"
              role="PES University"
              period="2023 - 2027"
              description="B.tech in Computer science and Engineering"
            />
            <ExperienceCard
              company="Student"
              role="Pes University"
              period="2023 - 2027"
              description="B.tech in Computer science and Engineering"
            />
            <ExperienceCard
               company="Free Lancer"
               role="Full Stack Developer"
               period="Present"
               description="Leading development of enterprise applications using MERN stack"
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
    className="group flex items-center gap-3 p-4 bg-gray-700/80 backdrop-blur-sm rounded-lg hover:bg-gray-600 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="text-blue-500 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <div className="font-bold text-xl">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </motion.div>
);

const ExperienceCard = ({
  company,
  role,
  period,
  description,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
}) => (
  <motion.div
    className="p-6 bg-gray-700/80 backdrop-blur-sm rounded-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    whileHover={{ scale: 1.02 }}
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <h3 className="font-bold text-xl mb-1">{company}</h3>
    <div className="text-blue-500 font-medium mb-2">{role}</div>
    <div className="text-sm text-gray-400 mb-3">{period}</div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default About;
