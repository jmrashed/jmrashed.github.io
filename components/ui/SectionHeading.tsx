interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="section-heading">{title}</h2>
      <div className="section-divider" />
      {subtitle && (
        <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
