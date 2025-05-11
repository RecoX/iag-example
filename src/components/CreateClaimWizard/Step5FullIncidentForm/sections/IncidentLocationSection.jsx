export function IncidentLocationSection({ data, update }) {
  return (
    <section className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Where did the incident happen?</h3>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => update('address', e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Describe the area and include any landmarks</label>
        <textarea
          value={data.locationDetails}
          onChange={(e) => update('locationDetails', e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-full"
        ></textarea>
      </div>
    </section>
  );
}
