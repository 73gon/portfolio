import { motion } from 'framer-motion';
import { HeroSection } from './sections/hero';
import { EducationSection } from './sections/education';
import { ExperienceSection } from './sections/experience';
import { CertificationsSection } from './sections/certifications';
import { SkillsSection } from './sections/skills';
import { ProjectsSection } from './sections/projects';
import { ContactSection } from './sections/contact';

export function PortfolioPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='min-h-screen bg-background relative overflow-hidden max-w-7xl mx-auto'>
      {/* Subtle gradient background decoration */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      </div>

      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </motion.div>
  );
}
