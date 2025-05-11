export function WitnessSection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Witnesses</h3>
      <p className="text-sm text-gray-600">
        A witness is someone who was not involved in the accident, such as someone who saw it happen from outside the vehicle.
        A witness cannot be a driver or passenger who was in the accident. If you are still finding out, select "I'm not sure".
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-800">
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="witnessStatus" checked={data.witnessStatus === 'yes'} onChange={() => update('witnessStatus', 'yes')} /> Yes
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="witnessStatus" checked={data.witnessStatus === 'no'} onChange={() => update('witnessStatus', 'no')} /> No
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="witnessStatus" checked={data.witnessStatus === 'not-sure'} onChange={() => update('witnessStatus', 'not-sure')} /> I’m not sure
        </label>
      </div>
    </section>
  );
}
