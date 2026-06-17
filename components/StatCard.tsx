type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition duration-300 cursor-pointer">
      <h2 className="text-lg font-semibold text-slate-300">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}