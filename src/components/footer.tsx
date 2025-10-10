import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-border/60 bg-background/90'>
      <div className='container flex flex-col gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between w-full mx-auto px-5'>
        <div className='space-y-2 text-center'>
          <p>{t('footer.rights', { year })}</p>
        </div>
        <div className='flex flex-col gap-2 text-xs uppercase tracking-wide md:text-right'>
          <nav className='flex gap-4 justify-center md:justify-end'>
            <a href='https://github.com/73gon' target='_blank' rel='noreferrer' className='hover:text-foreground'>
              {t('footer.social.github')}
            </a>
            <a href='https://linkedin.com/in/malikmardan' target='_blank' rel='noreferrer' className='hover:text-foreground'>
              {t('footer.social.linkedin')}
            </a>
            <a href='https://x.com/ryqoai' target='_blank' rel='noreferrer' className='hover:text-foreground'>
              {t('footer.social.x')}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
