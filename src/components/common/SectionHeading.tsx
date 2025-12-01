interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="space-y-2">
      <h2 className="font-serif text-2xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-700">{subtitle}</p>}
    </div>
  );
}
