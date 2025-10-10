import { motion } from 'framer-motion';
import { HeroSection } from './hero';
import { EducationSection } from './education';
import { ExperienceSection } from './experience';
import { CertificationsSection } from './certifications';
import { SkillsSection } from './skills';
import { ProjectsSection } from './projects';
import { ContactSection } from './contact';

export function Portfolio() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='min-h-screen bg-background relative overflow-hidden'>
      {/* Subtle gradient background decoration */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      </div>

      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
}
