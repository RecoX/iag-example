export function DamageSection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Vehicle damage</h3>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Please give a detailed description of what happened</label>
        <textarea value={data.whatHappened} onChange={(e) => update('whatHappened', e.target.value)} className="border border-gray-300 px-3 py-2 rounded w-full"></textarea>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Has your vehicle been damaged?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="vehicleDamaged" checked={data.vehicleDamaged === 'yes'} onChange={() => update('vehicleDamaged', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="vehicleDamaged" checked={data.vehicleDamaged === 'no'} onChange={() => update('vehicleDamaged', 'no')} /> No</label>
        </div>
      </div>

      {data.vehicleDamaged === 'yes' && (
        <div>
          <label className="block font-medium text-gray-700 mb-1">Describe the damage (optional)</label>
          <textarea value={data.damageDescription} onChange={(e) => update('damageDescription', e.target.value)} className="border border-gray-300 px-3 py-2 rounded w-full"></textarea>
        </div>
      )}

      <div>
        <label className="block font-medium text-gray-700 mb-1">Is your vehicle safe to drive?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="safeToDrive" checked={data.safeToDrive === 'yes'} onChange={() => update('safeToDrive', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="safeToDrive" checked={data.safeToDrive === 'no'} onChange={() => update('safeToDrive', 'no')} /> No</label>
        </div>
      </div>
    </section>
  );
}
