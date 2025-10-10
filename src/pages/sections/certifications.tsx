import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export function CertificationsSection() {
  const { t } = useTranslation();
  const entries = t('certifications.entries', { returnObjects: true }) as Array<{
    name: string;
    issuedBy: string;
    year: string;
  }>;

  return (
    <section id='certifications' className='container space-y-8 py-20 max-w-7xl px-5'>
      <SectionHeading title={t('certifications.title')} />
      <div className='grid gap-6 md:grid-cols-3'>
        {entries.map((entry, index) => (
          <motion.div
            key={entry.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className='h-full hover:shadow-lg hover:border-border/80 transition-all'>
              <CardHeader className='gap-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted'>
                  <Award className='h-4 w-4' aria-hidden />
                </span>
                <CardTitle className='text-base'>{entry.name}</CardTitle>
                <CardDescription className='text-sm font-medium text-foreground/80'>{entry.issuedBy}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>{entry.year}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
