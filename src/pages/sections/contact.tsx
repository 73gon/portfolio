import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { type ContactFormState } from '@/schemas/contact';

const INITIAL_STATE: ContactFormState = {
  name: '',
  email: '',
  message: '',
  company: '',
};

export function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof ContactFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          company: form.company, // honeypot
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setForm(INITIAL_STATE);
        toast.success(t('contact.toast.success'));
      } else {
        toast.error(t('contact.toast.error') || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(t('contact.toast.error') || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id='contact' className='container space-y-8 py-20 pb-32 max-w-7xl'>
      <SectionHeading title={t('contact.title')} description={t('contact.subtitle')} />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }}>
        <Card className='shadow-md'>
          <CardContent className='space-y-6 p-8'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='space-y-2'>
                <Label htmlFor='name'>{t('contact.name')}</Label>
                <Input id='name' value={form.name} autoComplete='name' onChange={(event) => handleChange('name', event.target.value)} placeholder='Taylor Doe' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>{t('contact.email')}</Label>
                <Input id='email' type='email' autoComplete='email' value={form.email} onChange={(event) => handleChange('email', event.target.value)} placeholder='you@example.com' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>{t('contact.message')}</Label>
                <Textarea id='message' value={form.message} onChange={(event) => handleChange('message', event.target.value)} placeholder={t('contact.message')} rows={5} required />
              </div>
              {/* Honeypot field - hidden from users, catches bots */}
              <input
                type='text'
                name='company'
                value={form.company}
                onChange={(event) => handleChange('company', event.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete='off'
                aria-hidden='true'
              />
              <p className='text-xs text-muted-foreground'>{t('contact.privacy')}</p>
              <Button type='submit' size='lg' className='w-full' disabled={isSubmitting || !form.message.trim()}>
                {isSubmitting ? 'Sending...' : t('actions.sendMessage')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
