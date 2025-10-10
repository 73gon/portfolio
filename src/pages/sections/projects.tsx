import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t('projects.entries', { returnObjects: true }) as Project[];

  return (
    <section id='projects' className='container space-y-8 py-20 max-w-7xl px-5'>
      <SectionHeading title={t('projects.title')} description={t('projects.description')} />
      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className='h-full hover:shadow-lg hover:border-border/80 transition-all'>
              <CardHeader>
                <CardTitle className='text-lg'>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted-foreground'>
                {project.tech.map((tech) => (
                  <span key={tech} className='rounded-full border border-border/70 px-3 py-1'>
                    {tech}
                  </span>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant='ghost' size='sm' asChild className='gap-2'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    {t('actions.viewProject')}
                    <ExternalLink className='h-4 w-4' aria-hidden />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
