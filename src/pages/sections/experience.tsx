import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export function ExperienceSection() {
  const { t } = useTranslation();
  const entries = t('experience.entries', { returnObjects: true }) as Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;

  return (
    <section id='experience' className='container space-y-8 py-20 max-w-7xl px-5'>
      <SectionHeading title={t('experience.title')} />
      <div className='grid gap-6 md:grid-cols-2'>
        {entries.map((entry, index) => (
          <motion.div
            key={entry.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className='h-full hover:shadow-lg hover:border-border/80 transition-all'>
              <CardHeader className='flex flex-row items-start gap-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted'>
                  <Briefcase className='h-4 w-4' aria-hidden />
                </span>
                <div>
                  <CardTitle className='text-base'>{entry.role}</CardTitle>
                  <CardDescription className='text-sm font-medium text-foreground/80'>{entry.company}</CardDescription>
                  <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>{entry.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>{entry.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
