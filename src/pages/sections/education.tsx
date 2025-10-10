import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionHeading } from '@/components/section-heading';

export function EducationSection() {
  const { t } = useTranslation();
  const entries = t('education.entries', { returnObjects: true }) as Array<{
    title: string;
    institution: string;
    period: string;
    summary: string;
  }>;

  return (
    <section id='education' className='container space-y-8 py-20 max-w-7xl px-5'>
      <SectionHeading title={t('education.title')} />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
        <Accordion type='single' collapsible className='divide-border/60 rounded-xl border border-border/60 bg-card'>
          {entries.map((entry, index) => (
            <AccordionItem value={`education-${index}`} key={entry.title}>
              <AccordionTrigger className='px-6 text-left text-lg'>
                <div>
                  <p className='font-medium text-foreground'>{entry.title}</p>
                  <p className='text-xs text-muted-foreground'>{entry.institution}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className='px-6 text-sm text-muted-foreground'>
                <p className='pb-3'>{entry.summary}</p>
                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground/80'>{entry.period}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
