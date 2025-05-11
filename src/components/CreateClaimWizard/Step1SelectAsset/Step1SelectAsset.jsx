function Step1SelectAsset({ asset, onSelect }) {
  return (
    <section className="space-y-4">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded">
        <p className="font-semibold">Need to make a claim for a policy not listed?</p>
        <p>
          Call us at 0800 123 456.
        </p>
      </div>

      <div
        className="border border-gray-300 p-4 rounded bg-white shadow cursor-pointer hover:border-blue-500"
        onClick={() => onSelect(asset)}
      >
        <h2 className="font-semibold">{asset.title}</h2>
        <p>{asset.subtitle}</p>
        <p className="text-sm text-gray-500">Policy number: {asset.policyNumber}</p>
      </div>
    </section>
  );
}

export default Step1SelectAsset;
