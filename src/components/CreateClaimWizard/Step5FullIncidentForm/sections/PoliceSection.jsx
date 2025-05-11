export function PoliceSection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Police involvement</h3>

      <label className="block font-medium text-gray-700 mb-1">Did the police attend or were they notified?</label>
      <div className="flex gap-4 text-sm text-gray-800">
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="policeStatus" checked={data.policeStatus === 'yes'} onChange={() => update('policeStatus', 'yes')} />
          Yes
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="policeStatus" checked={data.policeStatus === 'no'} onChange={() => update('policeStatus', 'no')} />
          No
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="policeStatus" checked={data.policeStatus === 'not-sure'} onChange={() => update('policeStatus', 'not-sure')} />
          I’m not sure
        </label>
      </div>
    </section>
  );
}
