export function DriverSection({ data, update }) {
  const toggle = (field, value) => {
    const current = new Set(data[field] || []);
    current.has(value) ? current.delete(value) : current.add(value);
    update(field, Array.from(current));
  };

  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Driver details</h3>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Do you use the vehicle for business?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="usedForBusiness" checked={data.usedForBusiness === 'yes'} onChange={() => update('usedForBusiness', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="usedForBusiness" checked={data.usedForBusiness === 'no'} onChange={() => update('usedForBusiness', 'no')} /> No</label>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Has your vehicle been modified (value &gt; $1000)?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="hasModifications" checked={data.hasModifications === 'yes'} onChange={() => update('hasModifications', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="hasModifications" checked={data.hasModifications === 'no'} onChange={() => update('hasModifications', 'no')} /> No</label>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Who was driving?</label>
        <select value={data.driver} onChange={(e) => update('driver', e.target.value)} className="border border-gray-300 px-3 py-2 rounded w-full max-w-md text-sm">
          <option value="">Select</option>
          <option value="john-doe">John Doe (11 Aug 1990)</option>
          <option value="someone-else">Someone else</option>
        </select>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Licence type</label>
        <select value={data.licenceType} onChange={(e) => update('licenceType', e.target.value)} className="border border-gray-300 px-3 py-2 rounded w-full max-w-md text-sm">
          <option value="">Select</option>
          <option value="learner">Learner</option>
          <option value="restricted">Restricted</option>
          <option value="full">Full</option>
          <option value="international">International</option>
          <option value="not-sure">I’m not sure</option>
        </select>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">How long has the licence been held?</label>
        <input value={data.licenceHeldDuration} onChange={(e) => update('licenceHeldDuration', e.target.value)} className="border border-gray-300 px-3 py-2 rounded w-full max-w-md text-sm" />
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Driving offences in the last 3 years?</label>
        <div className="flex flex-col gap-2 text-sm text-gray-800 pl-1">
          <label className="inline-flex gap-2"><input type="checkbox" checked={data.driverOffences?.includes('loss-of-license')} onChange={() => toggle('driverOffences', 'loss-of-license')} /> Loss of licence</label>
          <label className="inline-flex gap-2"><input type="checkbox" checked={data.driverOffences?.includes('endorsement')} onChange={() => toggle('driverOffences', 'endorsement')} /> Licence endorsement</label>
          <label className="inline-flex gap-2"><input type="checkbox" checked={data.driverOffences?.includes('conditions')} onChange={() => toggle('driverOffences', 'conditions')} /> Licence conditions</label>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Alcohol or drugs in the 12h before the accident?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="drugsOrAlcohol" checked={data.drugsOrAlcohol === 'yes'} onChange={() => update('drugsOrAlcohol', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="drugsOrAlcohol" checked={data.drugsOrAlcohol === 'no'} onChange={() => update('drugsOrAlcohol', 'no')} /> No</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="drugsOrAlcohol" checked={data.drugsOrAlcohol === 'not-sure'} onChange={() => update('drugsOrAlcohol', 'not-sure')} /> I’m not sure</label>
        </div>
      </div>
    </section>
  );
}
