export function CriminalHistorySection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Criminal history and past claims</h3>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Any criminal offence in the last 7 years?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="criminalOffenceHistory" checked={data.criminalOffenceHistory === 'yes'} onChange={() => update('criminalOffenceHistory', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="criminalOffenceHistory" checked={data.criminalOffenceHistory === 'no'} onChange={() => update('criminalOffenceHistory', 'no')} /> No</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="criminalOffenceHistory" checked={data.criminalOffenceHistory === 'not-sure'} onChange={() => update('criminalOffenceHistory', 'not-sure')} /> I’m not sure</label>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Any vehicle claims or theft/damage in last 5 years?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2"><input type="radio" name="pastVehicleClaims" checked={data.pastVehicleClaims === 'yes'} onChange={() => update('pastVehicleClaims', 'yes')} /> Yes</label>
          <label className="inline-flex items-center gap-2"><input type="radio" name="pastVehicleClaims" checked={data.pastVehicleClaims === 'no'} onChange={() => update('pastVehicleClaims', 'no')} /> No</label>
        </div>
      </div>
    </section>
  );
}
