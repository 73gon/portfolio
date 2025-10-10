import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { Globe, Menu } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const NAV_ITEMS = ['home', 'education', 'experience', 'certifications', 'skills', 'projects', 'contact'] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const items = NAV_ITEMS.map((id) => ({ id, label: t(`nav.${id}`) }));

  return (
    <header className='sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex items-center justify-between py-4 max-w-7xl'>
        <a href='#home' className='flex items-center gap-2 text-sm font-semibold tracking-tight'>
          <span className='flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-muted text-xs uppercase'>MM</span>
          <span>{t('meta.name')}</span>
        </a>

        <nav className='hidden items-center gap-6 md:flex'>
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink href={`#${item.id}`} className='cursor-pointer px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground'>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <LanguageSwitcher current={i18n.language as 'en' | 'de'} />
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Switch aria-label='Toggle dark mode' checked={theme === 'dark'} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className='md:hidden'>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' aria-label={t('nav.home')}>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-full max-w-xs'>
              <SheetHeader>
                <SheetTitle>{t('meta.name')}</SheetTitle>
              </SheetHeader>
              <div className='mt-6 flex flex-col gap-6'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium text-muted-foreground'>Dark mode</span>
                  <Switch aria-label='Toggle dark mode' checked={theme === 'dark'} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
                </div>
                <LanguageSwitcher current={i18n.language as 'en' | 'de'} />
                <ul className='flex flex-col gap-4 text-sm'>
                  {items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className='block rounded-md px-3 py-2 font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground'
                        onClick={() => setSheetOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({ current }: { current: 'en' | 'de' }) {
  const { t, i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm' className='gap-2'>
          <Globe className='h-4 w-4' aria-hidden />
          <span className='uppercase tracking-wide'>{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align='end' className='w-40'>
        <DropdownMenuRadioGroup
          value={current}
          onValueChange={(value) => {
            const language = value as 'en' | 'de';
            i18n.changeLanguage(language);
          }}
        >
          <DropdownMenuRadioItem value='en'>English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='de'>Deutsch</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuItem className='text-xs text-muted-foreground' disabled>
          {t('meta.location')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
