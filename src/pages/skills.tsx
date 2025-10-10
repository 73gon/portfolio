import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SkillGroup {
  label: string;
  items: string[];
}

export function SkillsSection() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true }) as SkillGroup[];

  return (
    <section id='skills' className='container space-y-8 py-20 max-w-7xl'>
      <SectionHeading title={t('skills.title')} description={t('skills.description')} />
      <Tabs defaultValue={groups[0]?.label ?? ''} className='w-full'>
        <TabsList className='flex-wrap justify-start gap-2 bg-muted/60'>
          {groups.map((group) => (
            <TabsTrigger key={group.label} value={group.label} className='capitalize'>
              {group.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {groups.map((group, index) => (
          <TabsContent value={group.label} key={group.label}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
              <Card>
                <CardContent className='flex flex-wrap gap-3 p-6'>
                  {group.items.map((item) => (
                    <Badge key={item} variant='outline' className='rounded-md border-foreground/20 bg-muted/40 px-3 py-1'>
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
