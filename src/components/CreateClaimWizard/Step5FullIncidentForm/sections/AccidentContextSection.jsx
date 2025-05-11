export function AccidentContextSection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Accident context</h3>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Was your vehicle parked when the damage happened?</label>
        <div className="flex gap-4 text-sm text-gray-800">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="wasParked" checked={data.wasParked === 'yes'} onChange={() => update('wasParked', 'yes')} /> Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="wasParked" checked={data.wasParked === 'no'} onChange={() => update('wasParked', 'no')} /> No
          </label>
        </div>
      </div>

      {data.wasParked === 'no' && (
        <div>
          <label className="block font-medium text-gray-700 mb-1">Was anyone in the driver’s seat when the accident happened?</label>
          <div className="flex gap-4 text-sm text-gray-800">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="someoneInDriverSeat" checked={data.someoneInDriverSeat === 'yes'} onChange={() => update('someoneInDriverSeat', 'yes')} /> Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="someoneInDriverSeat" checked={data.someoneInDriverSeat === 'no'} onChange={() => update('someoneInDriverSeat', 'no')} /> No
            </label>
          </div>
        </div>
      )}

      <div>
        <label className="block font-medium text-gray-700 mb-1">What was involved in the accident?</label>
        <select
          value={data.accidentInvolved}
          onChange={(e) => update('accidentInvolved', e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-full max-w-md text-sm"
        >
          <option value="">Select one</option>
          <option value="you-hit">You hit another vehicle</option>
          <option value="they-hit">Someone else hit your vehicle</option>
          <option value="property">Someone’s property (e.g. fence, house)</option>
          <option value="object">An object (e.g. tree, pole)</option>
          <option value="animal">An animal</option>
          <option value="person">A person (e.g. cyclist, pedestrian)</option>
          <option value="none">None of the above</option>
        </select>
      </div>
    </section>
  );
}
