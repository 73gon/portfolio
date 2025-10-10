interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl text-center">{title}</h2>
      {description ? <p className="text-sm text-muted-foreground sm:text-base text-center">{description}</p> : null}
    </div>
  )
}

