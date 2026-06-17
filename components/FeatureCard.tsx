type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}