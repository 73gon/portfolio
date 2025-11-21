import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Shuffle from '@/components/Shuffle';

export function HeroSection() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const totalProjects = 5;
  const totalCertifications = 0;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id='home' className='container flex flex-col gap-10 py-20 sm:py-32 px-5'>
      <motion.div initial='initial' animate='animate' transition={{ staggerChildren: 0.15 }} className='space-y-6'>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className='flex justify-center'>
          <Badge className='w-fit bg-muted/80 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground hover:bg-muted transition-colors pt-2'>
            <Shuffle
              text={t('meta.role')}
              className='text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'
              shuffleDirection='right'
              duration={1.5}
              animationMode='evenodd'
              shuffleTimes={2}
              ease='power3.out'
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={true}
              loopDelay={2}
            />
          </Badge>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold tracking-tight text-balance sm:text-6xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-center'
        >
          {t('hero.headline')}
        </motion.h1>
        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className='text-base text-muted-foreground sm:text-xl leading-relaxed text-center max-w-4xl mx-auto'>
          {t('hero.intro')}
        </motion.p>
        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className='text-sm text-muted-foreground text-center'>
          {t('meta.description')}
        </motion.p>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className='flex flex-wrap items-center gap-4 pt-2 justify-center'>
          <Button size='lg' className='group shadow-lg hover:shadow-xl transition-all' asChild>
            <a href='#contact'>
              <Mail className='mr-2 h-4 w-4' aria-hidden />
              {t('actions.hireMe')}
              <ArrowUpRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' aria-hidden />
            </a>
          </Button>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant='outline' size='lg' className='group hover:bg-muted transition-all' asChild>
                  <a href='#projects'>
                    <Download className='mr-2 h-4 w-4 transition-transform group-hover:scale-110' aria-hidden />
                    {t('actions.downloadCv')}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{t('hero.availability')}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='grid gap-6 sm:grid-cols-3'>
        {[
          { label: currentYear - 2022 + '+ ' + t('stats.experience'), hint: t('nav.experience') },
          { label: totalProjects + ' ' + t('stats.projects'), hint: t('nav.projects') },
          { label: totalCertifications + ' ' + t('stats.certified'), hint: t('nav.certifications') },
        ].map((stat) => (
          <div className='group rounded-2xl border border-border/50 bg-card px-6 py-8 shadow-sm hover:shadow-lg hover:border-border transition-all cursor-default'>
            <p className='text-3xl font-bold mb-1'>{stat.label}</p>
            <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground'>{stat.hint}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
