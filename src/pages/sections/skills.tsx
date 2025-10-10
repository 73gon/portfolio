import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/components/section-heading';
import ScrollVelocity from '@/components/ScrollVelocity';
import LogoLoop from '@/components/LogoLoop';

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiFigma,
  SiPostman,
} from 'react-icons/si';

// Frontend skills
const skills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Redux',
  'Framer Motion',
  'React Query',
  'Zustand',
  'Vite',
  'Figma',
  'Git',
  'GitHub Actions',
  'Node.js',
  'Express',
  'NestJS',
  'Python',
  'Django',
  'FastAPI',
  'GraphQL',
  'REST API',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD',
  'Linux',
  'Postman',
];
const logos = [
  { node: <SiReact className='text-[#61DAFB]' />, title: 'React', href: 'https://react.dev' },
  { node: <SiTypescript className='text-[#3178C6]' />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss className='text-[#06B6D4]' />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiRedux className='text-[#764ABC]' />, title: 'Redux', href: 'https://redux.js.org' },
  { node: <SiFramer className='text-[#0055FF]' />, title: 'Framer Motion', href: 'https://www.framer.com/motion' },
  { node: <SiVite className='text-[#646CFF]' />, title: 'Vite', href: 'https://vitejs.dev' },
  { node: <SiFigma className='text-[#F24E1E]' />, title: 'Figma', href: 'https://www.figma.com' },
  { node: <SiGit className='text-[#F05032]' />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiGithubactions className='text-[#2088FF]' />, title: 'GitHub Actions', href: 'https://github.com/features/actions' },
  { node: <SiNodedotjs className='text-[#339933]' />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress className='text-foreground' />, title: 'Express', href: 'https://expressjs.com' },
  { node: <SiNestjs className='text-[#E0234E]' />, title: 'NestJS', href: 'https://nestjs.com' },
  { node: <SiPython className='text-[#3776AB]' />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiDjango className='text-[#092E20]' />, title: 'Django', href: 'https://www.djangoproject.com' },
  { node: <SiFastapi className='text-[#009688]' />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com' },
  { node: <SiMongodb className='text-[#47A248]' />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiMysql className='text-[#4479A1]' />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiPostgresql className='text-[#4169E1]' />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: <SiDocker className='text-[#2496ED]' />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiAmazon className='text-[#FF9900]' />, title: 'AWS', href: 'https://aws.amazon.com' },
  { node: <SiLinux className='text-[#FCC624]' />, title: 'Linux', href: 'https://www.linux.org' },
  { node: <SiPostman className='text-[#FF6C37]' />, title: 'Postman', href: 'https://www.postman.com' },
];

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id='skills' className='relative py-20 space-y-6'>
      <div className='container max-w-7xl px-5 mx-auto'>
        <SectionHeading title={t('skills.title')} description={t('skills.description')} />
      </div>

      {/* Frontend - ScrollVelocity */}
      <div className='relative w-full'>
        <ScrollVelocity texts={[skills.join(' · ')]} velocity={60} className='text-foreground/70' parallaxClassName='py-2' numCopies={3} />
      </div>

      {/* Frontend - LogoLoop */}
      <div className='relative w-full'>
        <LogoLoop
          logos={logos.map((logo) => ({ ...logo, node: <span className='text-4xl md:text-7xl'>{logo.node}</span> }))}
          speed={60}
          direction='right'
          logoHeight={48}
          gap={24}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel='Frontend technologies'
        />
      </div>
    </section>
  );
}
