export function ContactSection({ data, update }) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Main contact</h3>
      <label className="block font-medium text-gray-700 mb-1">Who is the main contact for this claim?</label>
      <div className="flex gap-4 text-sm text-gray-800">
        <label className="inline-flex items-center gap-2"><input type="radio" name="mainContact" checked={data.mainContact === 'driver'} onChange={() => update('mainContact', 'driver')} /> Driver</label>
        <label className="inline-flex items-center gap-2"><input type="radio" name="mainContact" checked={data.mainContact === 'someone-else'} onChange={() => update('mainContact', 'someone-else')} /> Someone else</label>
      </div>
    </section>
  );
}
