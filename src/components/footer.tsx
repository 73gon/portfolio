import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-background/90">
      <div className="container flex flex-col gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-foreground/80">{t('footer.tagline')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>
        <div className="flex flex-col gap-2 text-xs uppercase tracking-wide md:text-right">
          <p>{t('footer.rights', { year })}</p>
          <nav className="flex gap-4 md:justify-end">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t('footer.social.github')}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t('footer.social.linkedin')}
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t('footer.social.dribbble')}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

